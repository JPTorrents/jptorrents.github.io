# Diagnostic du site `jptorrents.github.io`

_Date: 2026-03-03_

## 1) Stack actuel, arborescence, build GitHub Pages, dépendances

### Stack
- Générateur statique: **Jekyll** (repo GitHub Pages classique).
- Thème: `theme: null` (thème custom).
- Moteur markdown: `kramdown`.
- Plugin déclaré: `jekyll-feed` (compatible GitHub Pages).

### Arborescence observée
- `_config.yml`: configuration globale.
- `_layouts/`: layouts HTML (`default.html`, `post.html`).
- `_pages/`: pages de contenu.
- `_posts/`: blog posts.
- `_sass/` + `assets/styles/main.scss`: styles.
- `_data/`: données YAML.

### Logique de build GitHub Pages
- Dépendance Ruby: gem `github-pages` dans `Gemfile`.
- Build local attendu: `bundle exec jekyll build` ou `bundle exec jekyll serve`.
- Publication: rendue statique générée automatiquement par GitHub Pages depuis la branche par défaut.

### Dépendances principales
- `github-pages` (bundle standard de versions supportées).
- `jekyll-feed`.
- `kramdown-parser-gfm`.

## 2) Évaluation de l’existant avant refactor

### (i) Statique réel vs contenu injecté JS
- La Home dépendait d’un embed Substack injecté en JavaScript (`substackapi.com/embeds/feed.js`), donc contenu critique non présent dans le HTML initial.

### (ii) Sémantique HTML (H1/H2/H3)
- Home sans `h1` explicite, seulement un `#### My last posts`.
- Hiérarchie de titres irrégulière selon pages.

### (iii) Lisibilité crawl/scrape
- Données principales partielles/incomplètes dans le HTML source de la Home (cause JS).
- Peu de structuration machine des contenus académiques (pas de blocs publication stables).

### (iv) Accessibilité minimale
- Navigation basique sans skip-link.
- Pas d’indication `aria-current` stable pour la page active.
- Contrastes et focus pas explicitement travaillés.

### (v) Performance
- Dépendance à un script tiers pour la Home.
- Peu d’assets lourds observés, mais opportunité de simplification en supprimant l’injection externe.

### (vi) Cohérence des URLs
- URLs principales existantes mais structure orientée `about/posts/contact`, pas alignée sur une IA académique standard (`research/publications/cv/about`).

## 3) Écarts précis vs objectif “HTML statique scrapable + metadata structurées”

### Écarts constatés
1. **Contenu critique côté client** (Home via JS Substack) au lieu d’HTML statique.
2. **Absence de métadonnées structurées** (`JSON-LD Person` et `ScholarlyArticle`).
3. **Absence de métadonnées sociales complètes** (OpenGraph/Twitter/canonical systématiques).
4. **Absence de page publications standardisée** avec schéma stable.
5. **Sitemap/robots non explicitement fournis** pour crawl.
6. **README absent**, donc maintenance/build non documentés.

### Exemples de fichiers (état pré-refactor)
- `_pages/index.md`: bloc Substack injecté en JS.
- `_layouts/default.html`: absence de canonical/OG/Twitter/JSON-LD.
- `_pages/posts.md`: liste de posts simple, pas de structuration publication académique.
- Racine du repo: pas de `README.md`, pas de `sitemap.xml`, pas de `robots.txt` explicite.

## 4) Direction de refactor retenue
- Conserver Jekyll natif (compatibilité GitHub Pages).
- Introduire une IA académique minimale: Home / Research / Publications / CV / About.
- Rendre tout contenu principal côté build (pas d’injection JS critique).
- Ajouter métadonnées SEO + données structurées.
- Générer la liste Publications depuis `_data/publications.yml` + pages article via collection `_publications`.
