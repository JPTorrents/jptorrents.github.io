# LLM Readability and Machine-Readable Maintenance Guide

## Goals

This website is designed to be:
- fully static (Jekyll build output),
- readable without JavaScript,
- machine-readable for crawlers and LLM pipelines.

## Stack and rendering model

- Static generator: Jekyll (GitHub Pages compatible).
- Main pages are Markdown under `_pages/`.
- Publication records are maintained in `_data/publications.yml`.
- Publication detail routes are under `_publications/` and pull fields from `_data/publications.yml`.
- JSON-LD is injected in `<head>` via `_includes/jsonld.html` and `_layouts/default.html`.

## How to add or update publications

1. Edit `_data/publications.yml` and add a record with:
   - `slug`
   - `title`
   - `authors`
   - `year`
   - `venue`
   - `doi` and/or `url`
   - `abstract`
   - `keywords`
   - `methods`
   - `data`
2. Add a companion file in `_publications/<slug>.md`:
   ```yaml
   ---
   slug: <slug>
   title: <title>
   ---
   ```
3. Verify the new item appears:
   - in `/publications/` (ItemList index),
   - in `/publications/<slug>/` (detail page + ScholarlyArticle JSON-LD).

## Authoritative identifiers

Keep these links present in Home/About + JSON-LD `sameAs`:
- ORCID: `https://orcid.org/0009-0008-5860-1948`
- Google Scholar: `https://scholar.google.com/citations?user=a-3uzfgAAAAJ&hl=en`
- GitHub: `https://github.com/JPTorrents`

## Metadata verification checklist

Open page source and confirm:
- canonical URL (`<link rel="canonical" ...>`),
- OpenGraph tags (`og:title`, `og:description`, `og:type`, `og:url`),
- Twitter card tags,
- JSON-LD script in `<head>`.

Expected JSON-LD types:
- Home: `Person`
- Publications index: `CollectionPage` + `ItemList`
- Publication detail: `ScholarlyArticle`
- CV: `ProfilePage`

## Robots and sitemap

- `robots.txt` allows crawling and points to sitemap.
- `sitemap.xml` includes main pages, publication pages, and posts.

## Local checks

```bash
bundle install
bundle exec jekyll build
bundle exec jekyll serve
```

If `bundle install` is blocked by environment/network, verify file-level constraints with:

```bash
rg -n "application/ld\+json|canonical|og:|twitter:|ItemList|ScholarlyArticle|ProfilePage" _layouts _includes _pages _publications
```
