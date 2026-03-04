---
layout: default
title: Publications
permalink: /publications/
description: Structured publication list with links to article details.
keywords:
  - publications
  - papers
---

# Publications

Below is a structured list of publications using a stable schema for easy reading and machine parsing.

{% assign publications = site.data.publications | sort: 'year' | reverse %}
{% for pub in publications %}
<article class="publication-block">
  <h2><a href="{{ '/publications/' | append: pub.slug | append: '/' | relative_url }}">{{ pub.title }}</a></h2>
  <p><strong>Authors:</strong> {{ pub.authors | join: ', ' }}</p>
  <p><strong>Year:</strong> {{ pub.year }}</p>
  <p><strong>Venue:</strong> {{ pub.venue }}</p>
  <p><strong>DOI:</strong> {% if pub.doi %}<a href="https://doi.org/{{ pub.doi }}">{{ pub.doi }}</a>{% else %}N/A{% endif %}</p>
  <p><strong>Abstract:</strong> {{ pub.abstract }}</p>
  <p><strong>Keywords:</strong> {{ pub.keywords | join: ', ' }}</p>
  <p><strong>Methods:</strong> {{ pub.methods }}</p>
  <p><strong>Data:</strong> {{ pub.data }}</p>
</article>
{% endfor %}
