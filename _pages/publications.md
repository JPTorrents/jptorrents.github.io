---
layout: default
title: Publications
permalink: /publications/
description: "Publications with direct links to articles."
robots: noindex, follow
---

<p class="archive-note">This is an archival page. The current site architecture is centered on <a href="{{ '/' | relative_url }}">Vita contemplativa</a> and <a href="{{ '/vita-activa/' | relative_url }}">Vita activa</a>; this material has been migrated to <a href="{{ '/vita-activa/#articles' | relative_url }}">the relevant Vita activa section</a>.</p>

# Publications

{% assign publications = site.data.publications | sort: "year" | reverse %}

{% for pub in publications %}
  {% assign link_target = nil %}
  {% if pub.doi and pub.doi != "" %}
    {% assign doi_prefix = pub.doi | slice: 0, 4 %}
    {% if doi_prefix == "http" %}{% assign link_target = pub.doi %}{% else %}{% assign link_target = "https://doi.org/" | append: pub.doi %}{% endif %}
  {% elsif pub.url and pub.url != "" %}
    {% assign link_target = pub.url %}
  {% endif %}

  <article class="publication-block">
    <h2>
      {% if link_target %}
        <a href="{{ link_target }}" rel="noopener noreferrer">
          {{ pub.title }}
        </a>
      {% else %}
        {{ pub.title }}
      {% endif %}
    </h2>

    <p><strong>Authors:</strong> {{ pub.authors | join: ', ' }}</p>
    <p><strong>Year:</strong> {{ pub.year }}</p>
    <p><strong>Journal:</strong> {{ pub.venue }}</p>
    <p><strong>Abstract:</strong> {{ pub.abstract }}</p>
  </article>
{% endfor %}
