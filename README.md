# jptorrents.github.io

Academic website for Joël Perez-Torrents, built with Jekyll and deployed on GitHub Pages.

## Main routes

- `/` Home
- `/research/` Research
- `/publications/` Publications index
- `/cv/` CV (HTML summary + downloadable PDF)
- `/about/` About

## Content model

- `_pages/`: static core pages.
- `_data/publications.yml`: single structured publication data source.
- `_publications/`: one route file per publication slug.
- `_includes/jsonld.html`: JSON-LD blocks emitted in `<head>`.

## Update publications

1. Add/update publication metadata in `_data/publications.yml`.
2. Add `_publications/<slug>.md` with matching `slug` front matter.
3. Rebuild and check `/publications/` and `/publications/<slug>/`.

## Authoritative profiles

- ORCID: https://orcid.org/0009-0008-5860-1948
- Google Scholar: https://scholar.google.com/citations?user=a-3uzfgAAAAJ&hl=en
- GitHub: https://github.com/JPTorrents

## Local build

```bash
bundle install
bundle exec jekyll build
bundle exec jekyll serve
```

## Metadata verification

Inspect page source and confirm:
- canonical link,
- OpenGraph tags,
- Twitter cards,
- JSON-LD in `<head>`.

See also: `docs/LLM_READABILITY.md`.

## Deployment (GitHub Pages)

This repo uses the native GitHub Pages-compatible Jekyll setup (`github-pages` gem). Pushing to the default branch triggers static site generation and deployment.
