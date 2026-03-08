---
layout: default
title: Publications
permalink: /publications/
description: "Publications with direct links to articles."
keywords:
  - publications
  - papers
  - articles
---

# Publications

{% assign publications = site.data.publications | sort: "year" | reverse %}

{% for pub in publications %}
  {% assign link_target = nil %}
  {% if pub.doi and pub.doi != "" %}
    {% assign link_target = "https://doi.org/" | append: pub.doi %}
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
