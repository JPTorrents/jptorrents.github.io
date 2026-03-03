# agents.md — Site personnel académique

## Objectif produit
Construire / refactorer un site personnel académique hébergé sur GitHub Pages (repo JPTorrents/ jptorrents.github.io),
dont le rendu final est **100% statique (HTML/CSS/JS minimal)**, lisible sans JavaScript, et robuste au scraping.

## Contraintes
- Sortie: fichiers HTML statiques (pas d’app runtime).
- Contenu principal visible dans le HTML (éviter contenu injecté côté client).
- Respecter une hiérarchie de titres H1/H2/H3 stricte et stable.
- Ajouter des métadonnées machine: JSON-LD schema.org (Person, ScholarlyArticle), OpenGraph, canonical.
- Performance: pages légères, images optimisées.
- Accessibilité: nav clavier, alt text, contrastes corrects.

## Sections attendues
- Home: identité, position, axes de recherche, contact.
- Research: axes + projets en cours (structure régulière).
- Publications: liste structurée (titre, auteurs, année, venue, DOI/URL, abstract court). Plus, une page par article
- Teaching (optionnel), Talks, CV (PDF + version HTML), About.

## Schémas de contenu (à respecter)
### Publication block
- Title
- Authors
- Year
- Venue (journal/conf)
- DOI / URL
- Abstract (100–200 mots)
- Keywords (5–10)

## Méthode de travail
1. Diagnostic: cartographier l’existant (structure, build, thèmes, pages, SEO, accessibilité).
2. Plan: proposer une refonte minimale (petites étapes testables).
3. Implémentation: créer une branche, commit atomiques, PR.
4. Vérification: build local + vérif GitHub Pages si possible, liens, sitemap, meta.

## Outils autorisés
- Jekyll/GitHub Pages natif OU génération statique équivalente déjà présente dans le repo.
- Markdown pour l’édition de contenu si le pipeline du repo l’utilise.
