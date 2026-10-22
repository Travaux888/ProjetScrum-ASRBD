import express from 'express';
import { createSeedData } from './data/seed.js';

export function createApp({ data = createSeedData(), currentUserId = data.users[0]?.id } = {}) {
  const app = express();
  let nextToolNumber = data.tools.reduce((max, tool) => {
    const match = /^tool-(\d+)$/.exec(tool.id);
    return match ? Math.max(max, Number(match[1])) : max;
  }, 0) + 1;

  app.use(express.json());

  app.get('/health', (_request, response) => {
    response.status(200).json({ status: 'ok' });
  });

  app.get('/api/tools', (_request, response) => {
    response.status(200).json(data.tools);
  });

  app.post('/api/tools', (request, response) => {
    const { name, category, description } = request.body ?? {};
    const normalizedName = typeof name === 'string' ? name.trim() : '';

    if (normalizedName.length < 2 || normalizedName.length > 60) {
      return response.status(400).json({
        field: 'name',
        error: 'Le nom doit contenir entre 2 et 60 caractères.',
      });
    }

    const allowedCategories = new Set(data.tools.map((tool) => tool.category));
    if (typeof category !== 'string' || !allowedCategories.has(category)) {
      return response.status(400).json({
        field: 'category',
        error: 'La catégorie doit être une catégorie autorisée.',
      });
    }

    if (description !== undefined && (typeof description !== 'string' || description.length > 300)) {
      return response.status(400).json({
        field: 'description',
        error: 'La description doit contenir au maximum 300 caractères.',
      });
    }

    const userId = request.get('x-user-id') ?? currentUserId;
    if (!data.users.some((user) => user.id === userId)) {
      return response.status(400).json({
        field: 'userId',
        error: 'L’utilisateur courant doit être un membre connu.',
      });
    }

    const tool = {
      id: 'tool-' + nextToolNumber++,
      ownerId: userId,
      name: normalizedName,
      category,
      description: description?.trim() ?? '',
      status: 'available',
    };

    data.tools.push(tool);
    return response.status(201).json(tool);
  });

  return app;
}
