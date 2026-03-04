# Diagnostic du site `jptorrents.github.io`

_Date: 2026-03-04_

## Vérifications exécutées

- `bundle exec jekyll build` (échec: exécutable `jekyll` absent localement avant installation).
- `bundle install` (échec réseau vers RubyGems: HTTP 403 Forbidden, donc build Jekyll non vérifiable dans cet environnement).
- Vérification statique des templates, pages et métadonnées (`_config.yml`, `_layouts/default.html`, `_includes/jsonld.html`, `_pages/*.md`).

## Résultats du diagnostic

### ✅ Points conformes
- Site conçu en génération statique Jekyll (pas d’application runtime).
- Pages académiques structurantes présentes (`/`, `/research/`, `/publications/`, `/cv/`, `/about/`).
- Métadonnées SEO principales présentes (description, canonical, OpenGraph, Twitter).
- Skip-link et navigation sémantique en place pour l’accessibilité de base.

### ⚠️ Points à corriger identifiés puis traités
1. Le fichier `_includes/jsonld.html` existait mais n’était pas injecté dans le layout principal.
2. Les données JSON-LD `Person`/`ProfilePage` étaient partiellement incohérentes avec `_config.yml` (identité/email/affiliation codées en dur).
3. La home contenait un second bloc JSON-LD inline redondant par rapport à la logique centralisée d’`_includes/jsonld.html`.

## Correctifs appliqués

- Injection de `jsonld.html` dans le head global (`_layouts/default.html`) pour rendre les données structurées effectives sur tout le site.
- Harmonisation des JSON-LD avec les variables `site.author` pour éviter les divergences de contenu et faciliter la maintenance.
- Suppression du JSON-LD inline de la page d’accueil pour éviter la duplication et centraliser la source de vérité.

## Conclusion

- Le site est mieux aligné avec l’objectif “HTML statique + métadonnées structurées robustes”.
- Le seul blocage restant est **environnemental** (accès RubyGems), empêchant la validation de build Jekyll dans cette session.
