# Carnet de bord BricoLoop — relevé vérifiable
> Établi le 22 octobre 2026 à partir des éléments consultables du dépôt GitHub et du tableau Trello. Ce document ne reconstitue pas des réunions ou des résultats absents des traces. Les sprints produit 1 à 3 restent à compléter par l’équipe à partir de son suivi réel.
## 1. En-tête
- **Équipe :** Valentin, Benjamin et Bastien.
- **Dépôt :** [Travaux888/ProjetScrum-ASRBD](https://github.com/Travaux888/ProjetScrum-ASRBD).
- **Vidéo de démonstration :** non disponible dans le dépôt ou le README à la date de rédaction.
- **Période vérifiable :** Sprint 0 technique et travail de préparation US-02, le 22 octobre 2026 (horodatages GitHub en UTC).
### Rotation des rôles
Le README sur main indique le PO et les développeurs, mais ne documente pas les Scrum Masters. La proposition complète ci-dessous est portée par la PR #2, qui est encore ouverte et sans approbation au moment de cette rédaction. Elle ne doit pas être présentée comme une rotation validée par l’équipe.
| Sprint | PO proposé dans la PR #2 | Scrum Master proposé dans la PR #2 | État vérifiable |
| --- | --- | --- | --- |
| Sprint 1 | Valentin | Benjamin | Proposition non approuvée |
| Sprint 2 | Benjamin | Bastien | Proposition non approuvée |
| Sprint 3 | Bastien | Valentin | Proposition non approuvée |
## 2. Lancement et Sprint 0 technique
Les seules traces horodatées consultées sont les commits, PR et exécutions GitHub Actions. Aucun relevé de Planning Poker, estimation du backlog, Sprint Goal, burndown ou compte rendu de décision du PO n’est disponible dans ces traces ; ces valeurs ne sont donc pas reconstituées ici.
| Heure UTC | Événement attesté |
| --- | --- |
| 10:15:36 | PR #1 « Sprint 0 : socle technique et CI » ouverte. |
| 10:15:42 | Exécution Actions #1 terminée avec succès sur la PR #1. |
| 10:17:53 | PR #1 fusionnée dans main (commit d2585a5). |
| 10:18:14–10:18:41 | Deux commits docs: sur la branche codex/sprint-0-foundation pour la rotation PO/SM et le README. |
| 10:19:15 | PR #2 ouverte pour compléter la rotation ; aucune revue n’est enregistrée au moment du relevé. |
| 10:19:19 | Exécution Actions #2 terminée avec succès sur la PR #2. |
| 10:41:28 | PR #3 ouverte avec les conventions Git et le modèle de PR ; branche fix/git-conventions. |
| 10:41:34 | Exécution Actions #3 terminée avec succès sur la PR #3. |
| 10:48:42 | README actualisé sur la branche de la PR #2 ; l’exécution Actions #4 a réussi. |
| 10:51:58 | PR #5 ouverte depuis feature/US-02-ajout-outil pour ajouter la création d’outil, ses validations et ses tests. |
| 10:52:24 | Exécution Actions #5 réussie sur la PR #5 : npm run check ; ESLint avec --max-warnings=0 ; 2 fichiers de tests et 8 tests passés. Le journal signale aussi une dépréciation Node 20 pour les actions CI, sans avertissement ESLint. |
| 10:53 UTC (12:53 heure de Paris) | Carte US-02 déplacée dans Tests & revue de code et commentée avec le lien PR #5 et le résultat CI ; relecture par un pair et validation PO en attente. |
Le contenu vérifiable fusionné par la PR #1 comprend le socle Express, GET /health, GET /api/tools, quatre voisins, huit outils, six catégories, un test de santé, ESLint et le workflow GitHub Actions. Le README indique npm install --legacy-peer-deps, npm start, npm test, npm run lint et npm run check.
**Résultat mesuré :** cinq exécutions GitHub Actions consultées, toutes terminées avec success (100 % sur cet échantillon). Pour la PR #5, npm run check a passé ESLint avec --max-warnings=0 et les 8 tests. Le journal CI affiche un avertissement de dépréciation Node 20 lié aux actions checkout/setup-node, distinct du lint.
**Stories produit acceptées :** la PR produit #5 pour US-02 est ouverte, avec tests et CI verte, mais elle n’a pas encore été relue, fusionnée ni validée par le PO. Aucune story produit n’est donc attestée comme acceptée. La route GET /api/tools et les données seed ne suffisent pas à prouver les critères d’acceptation de US-01.
**Métriques de sprint :** points engagés, points validés et burndown non consignés dans les artefacts accessibles ; vélocité non calculable.
## 3. Sprints produit
### Sprint 1
- Sprint Goal, stories engagées/acceptées/refusées, estimation, vélocité et burndown : **non documentés dans les traces consultées**.
- Imprévus, décisions du PO et rétrospective Start/Stop/Continue : **aucune preuve disponible**.
- Action de rétrospective : à renseigner par l’équipe à partir du compte rendu réel.
### Sprint 2
- Sprint Goal, stories engagées/acceptées/refusées, estimation, vélocité et burndown : **non documentés dans les traces consultées**.
- Imprévus, décisions du PO et rétrospective Start/Stop/Continue : **aucune preuve disponible**.
- Action de rétrospective : à renseigner par l’équipe à partir du compte rendu réel.
### Sprint 3
- Sprint Goal, stories engagées/acceptées/refusées, estimation, vélocité et burndown : **non documentés dans les traces consultées**.
- Imprévus, décisions du PO et rétrospective Start/Stop/Continue : **aucune preuve disponible**.
- Action de rétrospective : à renseigner par l’équipe à partir du compte rendu réel.
## 4. Bilan vérifiable
- **Vélocité produit totale sur les sprints 1 à 3 :** non calculable, faute de points réellement engagés et acceptés consignés.
- **Éléments techniques accomplis :** PR #1 fusionnée ; socle et workflow présents sur main ; cinq exécutions Actions réussies ; PR #5 contient une première story produit testée, en attente de revue et de validation PO.
- **Éléments encore ouverts :** PR #2 sur la rotation PO/SM, PR #3 sur les conventions Git, PR #4 sur ce carnet, PR #5 sur US-02 ; pas de story produit attestée comme Done ; pas de lien vidéo dans le README.
- **Retour d’expérience par membre et apprentissages :** à écrire par Valentin, Benjamin et Bastien à partir de leurs rôles et événements réellement vécus. Aucun témoignage n’est attribué sans leur contribution.
### Mise à jour Trello vérifiée pendant ce relevé
- **T-01 :** 2/3 points cochés ; le point sur la protection de main a été décoché car la règle n’est pas configurée et l’accès GitHub disponible renvoie 403. Un commentaire consigne le blocage.
- **T-02 :** 4/4 points cochés après vérification des scripts sur main, du test GET /health, de la séparation createApp()/listen() et du workflow vert. Un commentaire lie ces preuves.
- **US-02 :** déplacée dans Tests & revue de code, commentaire avec lien PR #5 et résultat CI ; aucune validation PO n’est consignée.
- **T-03 et T-04 :** état non modifié pendant ce relevé ; l’interface Trello a signalé une perte de connexion, donc aucune modification n’y est tenue pour enregistrée.
### Limites du relevé
Ce carnet est un état des preuves consultables à la date indiquée, pas un compte rendu complet des ateliers. Pour finaliser les sections manquantes, l’équipe doit reporter les estimations, décisions, validations PO, refus, burndowns et rétrospectives issus de ses fiches ou de son tableau Trello. Aucun historique ou chiffre de sprint n’a été inventé.
### Rectification du relevé Trello — 22 octobre 2026, 11:00 UTC
La mention antérieure indiquant que T-03 et T-04 n’avaient pas été modifiées est obsolète : après le rétablissement de la connexion, les mises à jour suivantes ont été enregistrées et vérifiées après rechargement.
- **T-03 :** checklist 3/3 cochée après vérification de `src/data/seed.js` sur `main` : quatre voisins, huit outils et au moins trois catégories autorisées. Un commentaire indique qu’aucune PR dédiée n’est liée.
- **T-04 :** checklist 1/1 cochée ; un commentaire consigne le workflow `npm run check`, les runs Actions #2, #3 et #5 réussis et les 8 tests passés sur la PR #5. La PR #5 reste en attente de revue par un pair et de validation PO.
