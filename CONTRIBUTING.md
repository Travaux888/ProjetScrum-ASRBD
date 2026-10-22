# Contribuer à BricoLoop

## Branches

- Créer chaque branche à partir de `main` à jour.
- Pour une story, utiliser `feature/US-xx-slug`, en remplaçant `xx` par l’identifiant réel de la story.
- Pour une correction, utiliser `fix/slug`.
- Garder une branche par sujet et ne pas pousser directement sur `main`.

## Commits

Préfixer chaque commit avec le type de changement :

- `feat:` pour une fonctionnalité;
- `fix:` pour une correction;
- `test:` pour les tests;
- `refactor:` pour une restructuration sans changement fonctionnel;
- `docs:` pour la documentation.

Exemple : `feat: add tool search by category`.

## Pull requests

- Ouvrir une PR vers `main` et l’associer à la story Trello correspondante.
- Décrire le changement et indiquer les critères d’acceptation couverts.
- Faire passer `npm run check` : lint sans avertissement et tests réussis.
- Demander la revue d’un membre autre que l’auteur et répondre aux commentaires.
- Fusionner seulement après approbation et réussite des contrôles.

## Definition of Done

Une story est terminée lorsque ses critères d’acceptation sont vérifiés, que les tests correspondants passent, que `npm run check` réussit, que la PR est approuvée par un pair et que le PO a validé le résultat.
