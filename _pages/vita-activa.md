---
layout: default
title: Vita activa
permalink: /vita-activa/
description: "Joel Perez-Torrents is an organization scholar studying collective inquiry, expertise, artificial intelligence, and sociotechnical systems in healthcare organizations."
keywords:
  - vita
  - curriculum vitae
  - publications
  - talks
person_schema: true
---

<div class="academic-page">
  <header class="page-header">
    <h1>Vita activa</h1>
    <p class="lede">Public academic CV, publications, talks, essays, and biographical materials.</p>
  </header>
<nav class="toc" aria-label="Vita activa sections">
  <p class="toc-title">Vitae</p>
  <ol class="toc-pages">
    <li><a href="{{ '/' | relative_url }}">Vita contemplativa</a></li>
    <li><a href="{{ '/vita-activa/' | relative_url }}" aria-current="page">Vita activa</a></li>
  </ol>

  <p class="toc-title">Contents</p>
  <ol>
    <li><a href="#bio">Bio</a></li>
    <li><a href="#publications">Publications</a></li>
    <li><a href="#selected-talks">Selected talks (9)</a></li>
    <li><a href="#conferences">Conferences (8)</a></li>
    <li><a href="#workshops">Workshops (5)</a></li>
    <li><a href="#essays">Essays (6)</a></li>
    <li><a href="#teaching">Teaching (5)</a></li>
  </ol>
</nav>

  <div class="document-body">
    <section id="bio" aria-labelledby="bio-heading">
      <h2 id="bio-heading">Bio</h2>
      <p>Joel Perez-Torrents is a postdoctoral researcher at the Desautels Faculty of Management, McGill University, and a fellow at the Centre de Recherche en Gestion, Institut Polytechnique de Paris. He studies how organizations produce knowledge, distribute judgment, and act under uncertainty, with a focus on healthcare, expertise, and artificial intelligence.</p>
      <details id="bio-medium">
        <summary>Medium bio</summary>
        <div class="details-body">
          <p>I study how Artificial Intelligence reconfigures expert work and knowledge production in high-stakes and expert organizational settings—especially healthcare. Trained at École polytechnique (engineering) and holding a PhD in Management (2024), I combine pragmatist approaches, Science &amp; Technology Studies, and organization theory to understand AI use in the production of knowledge. I also contribute to the creation of McGill’s Institute for Health Transformation, at the intersection of management, medicine, and public policy.</p>
        </div>
      </details>
      <details id="bio-long">
        <summary>Long bio and CV notes</summary>
        <div class="details-body">
          <h3>Research profile</h3>
          <p>Organizational Theory.</p>
          <p>Postdoctoral Researcher — Desautels Faculty of Management, McGill University — Montréal, Canada.</p>
          <p>Fellow — Centre de Recherche en Gestion (i3–CNRS), Institut Polytechnique de Paris, France.</p>
          <p>Contact: jpereztorrents+github (at) gmail.com.</p>
          <p class="profile-links">
            <a href="{{ '/assets/files/joel-perez-torrents-cv.pdf' | relative_url }}">Download CV</a> ·
            Last updated: coming soon!
          </p>
          <h3>Teaching</h3>
          <ul>
            <li><strong>École nationale des ponts et chaussées, Champs-sur-Marne (France)</strong> — Teaching Assistant (4 months, 2023–2024).</li>
            <li><strong>Mines ParisTech, Paris (France)</strong> — Teaching Assistant, Deeptech Entrepreneurship &amp; Innovation (2 months, 2023).</li>
            <li><strong>École polytechnique, Palaiseau (France)</strong> — Serious-games facilitation, Department MIE (sessions 2023, 2024); Master’s thesis supervision, MSIE, Department MIE (2022); Scientific project supervision, Department MIE (4 months, 2021).</li>
          </ul>
          <h3>Funding</h3>
          <ul>
            <li>Mack Institute (Wharton School, University of Pennsylvania) — Visiting scholarship: $4,000.</li>
            <li>CEFAG (FNEGE) — Visiting scholarship: €1,400.</li>
          </ul>
          <h3>Awards</h3>
          <ul>
            <li><a href="https://aramos.fr/2025/09/02/portrait-de-rentree-episode-1-3/">2nd Prize — Best Dissertation, ARAMOS (2025)</a>.</li>
            <li>2nd Prize — Best Paper, ARAMOS (2025).</li>
            <li>Selected for the Academic Excellence Prize — Jean-Jacques &amp; Felicia Lopez-Loreta Foundation (2024).</li>
            <li><a href="https://fnege.org/programme-cefag/">CEFAG Fellowship (cohort 2022), FNEGE</a>.</li>
          </ul>
          <h3>Education</h3>
          <ul>
            <li><strong>PhD in Management</strong> — École polytechnique (Institut Polytechnique de Paris), Centre de Recherche en Gestion (i3–CNRS) (2020–2024). Dissertation: <em>Managing collaboration between domain experts and Artificial Intelligence: Two case studies in the healthcare system.</em></li>
            <li><strong>Research Master’s (MSc) — Project, Innovation, Design</strong> — École polytechnique (with HEC Paris) (2020). Work-study action-research placement at Ekimetrics, data-science consulting.</li>
            <li><strong>Engineering Degree (Cycle ingénieur polytechnicien)</strong> — École polytechnique (2016–2020).</li>
            <li><strong>Classes préparatoires (CPGE), Physics &amp; Chemistry</strong> — Lycée Sainte-Geneviève, Versailles (2016).</li>
          </ul>
          <h3>Professional experience</h3>
          <ul>
            <li><strong>Ekimetrics (France)</strong> — Innovation Advisor (2019–2020). Built the innovation department in its early stage: 10 strategic projects and 50+ research topics.</li>
            <li><strong>SATT Paris-Saclay (France)</strong> — Management Research (Apr–Aug 2019). Research on intellectual property strategy.</li>
            <li><strong>PRO BESPOKE (Thailand)</strong> — Project Management (Jun–Aug 2018). IT project management.</li>
          </ul>
        </div>
      </details>
    </section>
    <section id="publications" aria-labelledby="publications-heading">
      <h2 id="publications-heading">Publications</h2>
      <p class="archive-note">Full publication list, migrated from the former Publications page. Each entry has a stable fragment identifier.</p>
      <div class="details-list">
        {% assign publications = site.data.publications | sort: "year" | reverse %}
        {% for pub in publications %}
          {% assign link_target = nil %}
          {% if pub.doi and pub.doi != "" %}
            {% assign doi_prefix = pub.doi | slice: 0, 4 %}
            {% if doi_prefix == "http" %}{% assign link_target = pub.doi %}{% else %}{% assign link_target = "https://doi.org/" | append: pub.doi %}{% endif %}
          {% elsif pub.url and pub.url != "" %}
            {% assign link_target = pub.url %}
          {% endif %}
          <details id="publication-{{ pub.slug }}">
            <summary>
              {{ pub.title }}
              <span class="summary-meta"> — {{ pub.year }} · {{ pub.venue }}</span>
            </summary>
            <div class="details-body">
              <dl class="entry-grid">
                <dt>Metadata</dt>
                <dd>{{ pub.authors | join: ', ' }} ({{ pub.year }}), <em>{{ pub.venue }}</em>{% if pub.volume %}, {{ pub.volume }}{% endif %}{% if pub.issue %}({{ pub.issue }}){% endif %}{% if pub.pages %}: {{ pub.pages }}{% endif %}{% if pub.article_number %}, {{ pub.article_number }}{% endif %}.</dd>
                {% if pub.type %}<dt>Type</dt><dd>{{ pub.type }}</dd>{% endif %}
                {% if pub.location %}<dt>Location</dt><dd>{{ pub.location }}</dd>{% endif %}
                <dt>Summary</dt>
                <dd>{{ pub.abstract }}</dd>
                {% if pub.methods and pub.methods != "" %}<dt>Methods</dt><dd>{{ pub.methods }}</dd>{% endif %}
                {% if pub.data and pub.data != "" %}<dt>Abstract / data</dt><dd>{{ pub.data }}</dd>{% endif %}
                {% if link_target %}<dt>Links</dt><dd><a href="{{ link_target }}" rel="noopener noreferrer">Article / DOI</a>{% assign publication_page = site.publications | where: "slug", pub.slug | first %}{% if publication_page %} · <a href="{{ publication_page.url | relative_url }}">Publication page</a>{% endif %}</dd>{% endif %}
              </dl>
            </div>
          </details>
        {% endfor %}
      </div>
    </section>
<section id="selected-talks" aria-labelledby="selected-talks-heading">
  <h2 id="selected-talks-heading">Selected talks</h2>
  <details>
    <summary>Selected talks</summary>
    <div class="details-body">
      <ul>
        <li><strong>Managing Personalized Patient Pathways in the Digital Age</strong> — Invited talk, IAE Nantes, 27 Nov 2025. <em>Large-Scale Management of Uniqueness via Human–Machine Collaboration.</em></li>
        <li><strong>FNEGE Thésée Workshops “En quête d’IA”</strong> — Workshop presentation, France, 26 Nov 2025.</li>
        <li><strong>A Time for Monsters: Organizational Knowing After LLMs</strong> — ESSEC Executive, France, 15 Oct 2025.</li>
        <li><strong>Artificial Intelligence in the Healthcare Sector</strong> — École polytechnique and University of Southern Denmark, 21 Feb 2025.</li>
        <li><strong>Doctoriales</strong> — i3–CNRS, Télécom Paris – IMT, 12 Jun 2024.</li>
        <li><strong>La question du tri et du micro-tri en radiologie</strong> — Espace éthique Ile-de-France, 18 Jan 2023.</li>
        <li><strong>Toward an ethology of AI tools in the healthcare system</strong> — Paris Santé Campus, 22 Sep 2022.</li>
        <li><strong>A healthcare revolution?</strong> — IP Paris Science Forum, 21 Oct 2021.</li>
        <li><strong>AI and the personalization of patient pathways</strong> — CNRS Paul-Langevin Center Summer School, 5–9 Jul 2021.</li>
      </ul>
    </div>
  </details>
</section>
<section id="conferences" aria-labelledby="conferences-heading">
  <h2 id="conferences-heading">Conferences</h2>
  <details>
    <summary>Conferences</summary>
    <div class="details-body">
      <ul>
        <li><strong>Telemedicine platforms as loosely coupled systems</strong> — ARAMOS, France, 21 Nov 2025.</li>
        <li><strong>Human-AI Knowledge Creation Through a Peircean Lens</strong> — AMCIS 2025 Proceedings 28, 14–16 Aug 2025.</li>
        <li><strong>Transforming Care: Coordination, Innovation and Technology in Healthcare Transformation</strong> — Academy of Management Proceedings, Denmark, 27 Jul 2025.</li>
        <li><strong>Pragmatist Lenses on Epistemic Human–AI Collaboration</strong> — ASAC, Canada, 19 May 2025.</li>
        <li><strong>Inquiring with algorithms</strong> — IDeaS Conference, Canada, 30 Apr–2 May 2025.</li>
        <li><strong>Inquiring with algorithms</strong> — Montreal Business School Joint PhD Symposium, Canada, 28 Mar 2025.</li>
        <li><strong>Ethnographic case study of algorithmic organizing in medical research</strong> — IDeaS Conference, Canada, 20–23 Mar 2024.</li>
        <li><strong>Understanding AI from a pragmatist perspective</strong> — PHILOS Conference, Greece, 22–24 Jun 2023.</li>
      </ul>
    </div>
  </details>
</section>
<section id="workshops" aria-labelledby="workshops-heading">
  <h2 id="workshops-heading">Workshops</h2>
  <details>
    <summary>Workshops</summary>
    <div class="details-body">
      <ul>
        <li><strong>RICK Workshop — AI and Agency</strong> — Judge Business School, University of Cambridge, June 2025.</li>
        <li><strong>Organization &amp; Management Studies Development Workshop</strong> — April 2023.</li>
        <li><strong>SIG Tutorial on Design Theory</strong> — Mines ParisTech, February 2022.</li>
        <li><strong>Doctoriales</strong> — i3–CNRS, Mines ParisTech, 19 May 2021.</li>
        <li><strong>AI Winter School</strong> — Health Data Hub, online, 2020.</li>
      </ul>
    </div>
  </details>
</section>
    <section id="essays" aria-labelledby="essays-heading">
      <h2 id="essays-heading">Essays</h2>
      <div class="details-list">
        <details id="essay-organizing-as-collective-inquiry"><summary>Organizing as Collective Inquiry</summary><div class="details-body"><p class="meta">Forthcoming</p><p>Conceptual essay on organizations as collective inquiry systems.</p></div></details>
        <details id="essay-healthcare-as-an-inquiry-system"><summary>Healthcare as an Inquiry System</summary><div class="details-body"><p class="meta">Forthcoming</p><p>Essay on healthcare organizations as settings where knowing and acting are inseparable.</p></div></details>
        <details id="essay-ai-in-expert-work"><summary>AI in Expert Work: From Replacement to Distributed Judgment</summary><div class="details-body"><p class="meta">Forthcoming</p><p>Essay reframing AI adoption around distributed judgment.</p></div></details>
        <details id="essay-hta-as-organized-inquiry"><summary>HTA as Organized Inquiry</summary><div class="details-body"><p class="meta">Forthcoming</p><p>Essay on health technology assessment as an organized evidentiary practice.</p></div></details>
        <details id="essay-organizations-of-cultivation"><summary>Organizations of Cultivation</summary><div class="details-body"><p class="meta">Forthcoming</p><p>Essay on organizational forms oriented to cultivation, maintenance, and care.</p></div></details>
        <details id="essay-from-decision-support-to-inquiry-support"><summary>From Decision Support to Inquiry Support</summary><div class="details-body"><p class="meta">Forthcoming</p><p>Essay on designing AI around inquiry support rather than decision support alone.</p></div></details>
      </div>
    </section>
    <section id="teaching" aria-labelledby="teaching-heading">
      <h2 id="teaching-heading">Teaching</h2>
      <details>
        <summary>Teaching</summary>
        <div class="details-body">
          <ul>
            <li><strong>École nationale des ponts et chaussées, Champs-sur-Marne</strong> — Teaching Assistant, 2023–2024.</li>
            <li><strong>Mines ParisTech, Paris</strong> — Teaching Assistant, Deeptech Entrepreneurship &amp; Innovation, 2023.</li>
            <li><strong>École polytechnique, Palaiseau</strong> — Serious-games facilitation, Master’s thesis supervision, and scientific project supervision, 2021–2024.</li>
          </ul>
        </div>
      </details>
    </section>
  </div>
</div>
