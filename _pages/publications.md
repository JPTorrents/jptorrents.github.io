---
layout: default
title: Publications
permalink: /publications/
description: Publications list curated from CV and Google Scholar references.
keywords:
  - publications
  - scholarly articles
---

# Publications

This page lists publications in a stable format for human reading and machine parsing.

{% assign publications = site.data.publications | sort: 'year' | reverse %}
{% for pub in publications %}
<article class="publication-block">
  <h2><a href="{{ '/publications/' | append: pub.slug | append: '/' | relative_url }}">{{ pub.title }}</a></h2>
  <p><strong>Authors:</strong> {{ pub.authors | join: ', ' }}</p>
  <p><strong>Year:</strong> {{ pub.year }}</p>
  <p><strong>Venue:</strong> {{ pub.venue }}</p>
  <p><strong>DOI/URL:</strong>
    {% if pub.doi %}
      <a href="https://doi.org/{{ pub.doi }}">https://doi.org/{{ pub.doi }}</a>
    {% elsif pub.url %}
      <a href="{{ pub.url }}">{{ pub.url }}</a>
    {% else %}
      Not available
    {% endif %}
  </p>
  <p><strong>Abstract:</strong> {{ pub.abstract | default: 'Not available.' }}</p>
  <p><strong>Keywords:</strong> {% if pub.keywords %}{{ pub.keywords | join: ', ' }}{% else %}Not available.{% endif %}</p>
  <p><strong>Methods:</strong> {{ pub.methods | default: 'Not available.' }}</p>
  <p><strong>Data:</strong> {{ pub.data | default: 'Not available.' }}</p>
</article>
{% endfor %}
