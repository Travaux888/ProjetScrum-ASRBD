import request from 'supertest';
import { describe, expect, it } from 'vitest';
import { createApp } from '../src/app.js';
import { createSeedData } from '../src/data/seed.js';
const validTool = {
  name: 'Scie circulaire',
  category: 'Perçage',
  description: 'Scie avec carter de protection.',
};
function createTestContext() {
  const data = createSeedData();
  return { app: createApp({ data }), data };
}
describe('POST /api/tools', () => {
  it('creates a tool for the current user with available status', async () => {
    const { app, data } = createTestContext();
    const response = await request(app).post('/api/tools').send(validTool);
    expect(response.status).toBe(201);
    expect(response.body).toMatchObject({
      id: 'tool-9',
      ownerId: 'user-1',
      name: validTool.name,
      category: validTool.category,
      description: validTool.description,
      status: 'available',
    });
    expect(data.tools).toContainEqual(response.body);
  });
  it('uses the current user supplied by the demo identity header', async () => {
    const { app } = createTestContext();
    const response = await request(app)
      .post('/api/tools')
      .set('x-user-id', 'user-2')
      .send(validTool);
    expect(response.status).toBe(201);
    expect(response.body.ownerId).toBe('user-2');
  });
  it('accepts the name and description limits and an omitted description', async () => {
    const { app } = createTestContext();
    const maximums = await request(app).post('/api/tools').send({
      name: 'N'.repeat(60),
      category: 'Perçage',
      description: 'D'.repeat(300),
    });
    const optionalDescription = await request(app).post('/api/tools').send({
      name: 'AB',
      category: 'Perçage',
    });
    expect(maximums.status).toBe(201);
    expect(maximums.body.name).toHaveLength(60);
    expect(maximums.body.description).toHaveLength(300);
    expect(optionalDescription.status).toBe(201);
    expect(optionalDescription.body.description).toBe('');
  });
  it('returns 400 and identifies the name for missing or out-of-range names', async () => {
    const { app } = createTestContext();
    const invalidNames = [undefined, 'A', 'N'.repeat(61)];
    for (const name of invalidNames) {
      const payload = { category: 'Perçage' };
      if (name !== undefined) payload.name = name;
      const response = await request(app).post('/api/tools').send(payload);
      expect(response.status).toBe(400);
      expect(response.body.field).toBe('name');
      expect(response.body.error).toBeTruthy();
    }
  });
  it('returns 400 and identifies an unauthorized category', async () => {
    const { app } = createTestContext();
    const response = await request(app).post('/api/tools').send({
      ...validTool,
      category: 'Catégorie inconnue',
    });
    expect(response.status).toBe(400);
    expect(response.body.field).toBe('category');
    expect(response.body.error).toBeTruthy();
  });
  it('returns 400 and identifies a description longer than 300 characters', async () => {
    const { app } = createTestContext();
    const response = await request(app).post('/api/tools').send({
      ...validTool,
      description: 'D'.repeat(301),
    });
    expect(response.status).toBe(400);
    expect(response.body.field).toBe('description');
    expect(response.body.error).toBeTruthy();
  });
  it('returns 400 and identifies an unknown current user', async () => {
    const { app } = createTestContext();
    const response = await request(app)
      .post('/api/tools')
      .set('x-user-id', 'unknown-user')
      .send(validTool);
    expect(response.status).toBe(400);
    expect(response.body.field).toBe('userId');
    expect(response.body.error).toBeTruthy();
  });
});
