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
<article class="pub">
  <h2><a href="{{ '/publications/' | append: pub.slug | append: '/' | relative_url }}">{{ pub.title }}</a></h2>
  <p class="meta">Publication entry</p>
  <dl class="meta-list">
    <dt>Authors</dt>
    <dd>{{ pub.authors | join: ', ' }}</dd>
    <dt>Year</dt>
    <dd>{{ pub.year }}</dd>
    <dt>Venue</dt>
    <dd>{{ pub.venue }}</dd>
    <dt>DOI</dt>
    <dd>{% if pub.doi %}<a href="https://doi.org/{{ pub.doi }}">https://doi.org/{{ pub.doi }}</a>{% else %}N/A{% endif %}</dd>
    <dt>URL</dt>
    <dd><a href="{{ '/publications/' | append: pub.slug | append: '/' | relative_url }}">{{ '/publications/' | append: pub.slug | append: '/' | absolute_url }}</a></dd>
    <dt>Abstract</dt>
    <dd>{{ pub.abstract }}</dd>
    <dt>Methods</dt>
    <dd>{{ pub.methods }}</dd>
    <dt>Data</dt>
    <dd>{{ pub.data }}</dd>
  </dl>
  <ul class="tags">
    {% for keyword in pub.keywords %}
      <li><span>{{ keyword }}</span></li>
    {% endfor %}
  </ul>
</article>
{% endfor %}
