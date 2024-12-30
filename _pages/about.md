---
layout: default
title: About
permalink: /about/
description:
keywords:
---

<!--- 
This page is not on the site for now 
--->

{% for item in site.data.skills %}
<h4>{{ item.category }}</h4>
<ul>
    {% for skill in item.skills %}
    <li class="skill">{{ skill.name }}: {{ skill.rating }}</li> 
    {% endfor %}
</ul>
{% endfor %}
