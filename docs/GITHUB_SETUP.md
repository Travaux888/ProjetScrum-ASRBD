# Mise en place GitHub du Sprint 0

Checklist d’administration pour le dépôt `Travaux888/ProjetScrum-ASRBD`.

## Accès équipe

Vérifier que Valentin et Benjamin ont accepté leur invitation comme collaborateurs du dépôt.

## Protection de `main`

Dans **Settings → Branches → Branch protection rules**, protéger `main` :

- exiger une pull request avant fusion;
- exiger au moins une approbation;
- invalider les approbations obsolètes lorsqu’un nouveau commit est poussé;
- exiger la résolution des conversations;
- bloquer les push directs et les force-push, y compris pour les administrateurs;
- après le premier passage du workflow, exiger le statut `check` de GitHub Actions.

## Déroulement de la PR Sprint 0

La branche `main` existe déjà avec le README de présentation de l’équipe. Les fichiers du socle Sprint 0 sont ajoutés sur `codex/sprint-0-foundation`, puis proposés dans une pull request vers `main`.

Une personne différente de l’auteur relit et approuve la PR avant la fusion.

## Validation de T-01 à T-04

- T-01 : README avec présentation de l’équipe, rotation des rôles, commandes et structure du dépôt.
- T-02 : `npm run lint`, `npm test` et `npm run check` réussissent; `GET /health` retourne 200.
- T-03 : les données de démonstration comprennent quatre voisins, huit outils et six catégories.
- T-04 : une pull request déclenche `Quality checks / check` et le contrôle termine avec succès.
