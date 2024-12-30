---
layout: default
title: About
permalink: /about/
description:
keywords:
---

{% for item in site.data.skills %}
<h4>{{ item.category }}</h4>
<ul>
    {% for skill in item.skills %}
    <li class="skill">{{ skill.name }}: {{ skill.rating }}</li> 
    {% endfor %}
</ul>
{% endfor %}