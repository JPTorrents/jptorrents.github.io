# jptorrents.github.io

Static academic website built with Jekyll and compatible with GitHub Pages.

## Structure

- `_pages/` : main pages (`/`, `/publications/`, `/cv/`, `/talks/`, `/essays/`, `/posts/`, `/contact/`).
- `_data/publications.yml` : sdata source for publications
- `_publications/` : individual publication pages (Jekyll collection)
- `_layouts/` : templates (`default`, `publication`, `post`).
- `_sass/` and `assets/styles/` : styles.
- `docs/DIAGNOSTIC.md` : initial diagnostic and identified issues
  
## Editing content

### Main pages 
Edit the Markdown files in `_pages/`.

### Publications
1. Add or edit an entry in `_data/publications.yml` using the stable schema:
   - `title`, `authors`, `year`, `venue`, `doi`, `abstract`, `keywords`, `methods`, `data`, `slug`
2. Add a corresponding page in: `_publications/<slug>.md` with the same metadata in the front matter.

## Build local

Prerequisites: Ruby + Bundler.

```bash
bundle install
bundle exec jekyll serve
```

Verification build:

```bash
bundle exec jekyll build
```

The generated site is located in `_site/`.

## GitHub Pages deployment

The repository is configured for the native GitHub Pages pipeline (gem `github-pages`).
Pushing to the default branch automatically triggers static site generation on GitHub.
