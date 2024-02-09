---
title: Posts
description: Page to my posts
keywords: [posts]

permalink: /posts/

---

# My posts

<ul>
  {% for post in site.posts %}
  <li><a href="{{ post.url }}" class="post-preview">{{ post.title }}</a></li>
  {% endfor %}
</ul>

