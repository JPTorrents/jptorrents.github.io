# Noir-violet editorial design system

This site uses a static, semantic visual system designed for readability, accessibility, and LLM scraping.

## Tokens (`:root`)

Color tokens:

- `--bg-0: #200C1C`
- `--bg-1: #1E1142`
- `--fg-0: #F4F5F7`
- `--fg-1: #C6CBD4`
- `--accent: #8197B2`
- `--border: #381F2F`
- `--surface: #422F4E`
- `--surface-2: #54476D`

Typography tokens:

- Body: `ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`
- Headings: `ui-serif, Iowan Old Style, Palatino Linotype, Palatino, Georgia, serif`
- Mono: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`
- Scale: `--text-sm`, `--text-body`, `--text-h3`, `--text-h2`, `--text-h1`

Spacing tokens (8px baseline):

- `--space-1: 0.5rem`
- `--space-2: 1rem`
- `--space-3: 1.5rem`
- `--space-4: 2rem`

## Layout and landmarks

- Global content wrapper: `.container` with `max-width: 72ch` and responsive side padding.
- Shared landmarks are rendered in `default` layout: `<header>`, `<nav>`, `<main>`, `<footer>`.
- Keep exactly one `<h1>` per page and maintain a strict `h1 > h2 > h3` hierarchy.

## Core interaction rules

- Links are always underlined.
- Hover increases underline thickness but keeps near-identical color.
- Keyboard focus uses: `outline: 3px solid var(--accent); outline-offset: 3px;`.

## Editorial content styling

- Paragraph rhythm is based on generous line-height (`1.7`).
- Headings use serif with slightly tighter letter spacing.
- `blockquote` uses a left accent border and subtle surface background.
- Tables, lists, and code use consistent borders, spacing, and high-contrast colors.

## Components

### `.card`
Use for thematic blocks on index/research pages.

```html
<section class="card">
  <h3>Heading</h3>
  <p>Body text.</p>
  <ul class="tags">
    <li><span>Tag</span></li>
  </ul>
</section>
```

### `.pub`
Use for publication entries with labeled metadata fields.

```html
<article class="pub">
  <h2>Title</h2>
  <p class="meta">Publication entry</p>
  <dl class="meta-list">
    <dt>Authors</dt><dd>...</dd>
    <dt>DOI</dt><dd><a href="...">...</a></dd>
    <dt>URL</dt><dd><a href="...">...</a></dd>
  </dl>
</article>
```

### `.tags`
Inline list of compact pills, typically nested inside `.card` or `.pub`.

```html
<ul class="tags">
  <li><span>Keyword</span></li>
</ul>
```

### `.callout`
Use for highlighted editorial notes.

```html
<div class="callout">
  <p class="meta">Short highlight.</p>
</div>
```

### `.meta`
Smaller supporting metadata in `--fg-1`.

```html
<p class="meta">Updated 2026-01-01</p>
```

## Manual accessibility checks

1. Navigate using keyboard only and confirm visible focus outlines on all interactive elements.
2. Verify link hover state increases underline thickness without major color shift.
3. Confirm text colors are only `--fg-0`, `--fg-1`, or `--accent` on dark surfaces.
4. Confirm publication entries expose DOI and URL as visible text links.
5. Confirm no content requires JavaScript to render.
