# jptorrents.github.io

Site académique statique basé sur **Jekyll** et compatible **GitHub Pages**.

## Structure

- `_pages/` : pages principales (`/`, `/publications/`, `/cv/`, `/talks/`, `/essays/`, `/posts/`, `/contact/`).
- `_data/publications.yml` : source de données des publications.
- `_publications/` : pages individuelles de publication (collection Jekyll).
- `_layouts/` : templates (`default`, `publication`, `post`).
- `_sass/` et `assets/styles/` : styles.
- `docs/DIAGNOSTIC.md` : diagnostic initial et écarts identifiés.

## Éditer le contenu

### Pages principales
Modifier les fichiers Markdown dans `_pages/`.

### Publications
1. Ajouter/éditer une entrée dans `_data/publications.yml` avec le schéma stable:
   - `title`, `authors`, `year`, `venue`, `doi`, `abstract`, `keywords`, `methods`, `data`, `slug`
2. Ajouter une page correspondante dans `_publications/<slug>.md` avec les mêmes métadonnées front matter.

## Build local

Prérequis: Ruby + Bundler.

```bash
bundle install
bundle exec jekyll serve
```

Build de vérification:

```bash
bundle exec jekyll build
```

Le site généré est dans `_site/`.

## Déploiement GitHub Pages

Le dépôt est conçu pour le pipeline natif GitHub Pages (gem `github-pages`).
Pousser sur la branche par défaut déclenche la génération statique côté GitHub.
