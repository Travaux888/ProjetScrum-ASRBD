# BricoLoop

**Équipe 7**

## Présentation

BricoLoop est une plateforme collaborative qui favorise le partage d’outils entre voisins. Une perceuse, une ponceuse ou un taille-haie sont souvent utilisés seulement quelques heures par an.

BricoLoop permet de les mettre à disposition de la communauté locale afin de réduire les achats inutiles et encourager l’économie de partage.

L’application permet de rechercher des outils disponibles, de demander leur emprunt et de gérer les prêts grâce à un système de demandes et de validation par le propriétaire.

## Membres de l’équipe

- Valentin
- Benjamin
- Bastien

## Rotation effective des rôles

| Étape | Product Owner | Scrum Master | Développeurs |
| --- | --- | --- | --- |
| Lancement | Valentin | — | Benjamin, Bastien |
| Sprint 1 | Valentin | Benjamin | Bastien |
| Sprint 2 | Benjamin | Bastien | Valentin |
| Sprint 3 | Bastien | Valentin | Benjamin |

Le PO change à chaque sprint et ne code pas pendant son sprint. Le Scrum Master est une autre personne et code avec les Developers.

## Prérequis

- Node.js 20.19+, 22.13+ ou 24+
- npm

## Installation et lancement

```bash
npm install --legacy-peer-deps
npm start
```

L’API écoute sur `http://localhost:3000` (ou le port défini par `PORT`).

## Routes de démonstration

- `GET /health` retourne `{ "status": "ok" }` si l’API répond.
- `GET /api/tools` retourne les huit outils de démonstration.

## Vérification et tests

```bash
npm test
npm run lint
npm run check
```

`npm run check` exécute le lint puis les tests.

## Structure du dépôt

- `src/app.js` configure les routes Express et exporte `createApp()` pour les tests.
- `src/server.js` démarre le serveur HTTP.
- `src/data/seed.js` contient quatre voisins, huit outils et six catégories.
- `test/health.test.js` vérifie la route `/health`.
- `.github/workflows/check.yml` lance le lint et les tests sur chaque pull request vers `main`.
- `docs/GITHUB_SETUP.md` décrit les vérifications et réglages GitHub du Sprint 0.

## Sprint 0

Le Sprint 0 met en place le dépôt, le socle Express, les données de démonstration et les contrôles automatisés. Les fonctionnalités de catalogue et d’emprunt seront développées dans les sprints suivants.
# BricoLoop

**Équipe 7**

## Présentation

BricoLoop est une plateforme collaborative qui favorise le partage d’outils entre voisins. Une perceuse, une ponceuse ou un taille-haie sont souvent utilisés seulement quelques heures par an.

BricoLoop permet de les mettre à disposition de la communauté locale afin de réduire les achats inutiles et encourager l’économie de partage.

L’application permet de rechercher des outils disponibles, de demander leur emprunt et de gérer les prêts grâce à un système de demandes et de validation par le propriétaire.

## Membres de l’équipe

- Valentin
- Benjamin
- Bastien

## Rotation des rôles

| Sprint | Product Owner | Développeurs |
| --- | --- | --- |
| Sprint 1 | Valentin | Benjamin, Bastien |
| Sprint 2 | Benjamin | Valentin, Bastien |
| Sprint 3 | Bastien | Valentin, Benjamin |

## Prérequis

- Node.js 20.19+, 22.13+ ou 24+
- npm

## Installation et lancement

```bash
npm install --legacy-peer-deps
npm start
```

L’API écoute sur `http://localhost:3000` (ou le port défini par `PORT`).

## Routes de démonstration

- `GET /health` retourne `{ "status": "ok" }` si l’API répond.
- `GET /api/tools` retourne les huit outils de démonstration.

## Vérification et tests

```bash
npm test
npm run lint
npm run check
```

`npm run check` exécute le lint puis les tests.

## Structure du dépôt

- `src/app.js` configure les routes Express et exporte `createApp()` pour les tests.
- `src/server.js` démarre le serveur HTTP.
- `src/data/seed.js` contient quatre voisins, huit outils et six catégories.
- `test/health.test.js` vérifie la route `/health`.
- `.github/workflows/check.yml` lance le lint et les tests sur chaque pull request vers `main`.
- `docs/GITHUB_SETUP.md` décrit la configuration GitHub du Sprint 0.

## Sprint 0

Le Sprint 0 met en place le dépôt, le socle Express, les données de démonstration et les contrôles automatisés. Les fonctionnalités de catalogue et d’emprunt seront développées dans les sprints suivants.
