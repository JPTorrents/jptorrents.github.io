---
layout: default
title: Vita activa
permalink: /vita-activa/
description: "Joel Perez-Torrents is a postdoctoral researcher in organization studies working on collective inquiry, expertise, artificial intelligence, healthcare, and sociotechnical systems."
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
    <p class="lede">Public academic CV, articles, talks, essays, and biographical materials.</p>
  </header>

  <nav class="toc" aria-label="Vita activa sections">
    <p class="toc-title">Contents</p>
    <ol>
      <li><a href="#bio">Bio</a></li>
      <li><a href="#articles">Articles</a></li>
      <li><a href="#talks">Talks</a></li>
      <li><a href="#essays">Essays</a></li>
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

    <section id="articles" aria-labelledby="articles-heading">
      <h2 id="articles-heading">Articles</h2>
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
          <details id="article-{{ pub.slug }}">
            <summary>{{ pub.title }}</summary>
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

    <section id="talks" aria-labelledby="talks-heading">
      <h2 id="talks-heading">Talks</h2>

      <h3>Selected academic talks</h3>
      <div class="details-list">
        <details id="talk-iae-nantes-personalized-patient-pathways-2025"><summary>Managing Personalized Patient Pathways in the Digital Age</summary><div class="details-body"><p>Invited talk, IAE Nantes, 27 Nov 2025. <em>Large-Scale Management of Uniqueness via Human–Machine Collaboration.</em></p></div></details>
        <details id="talk-fnege-thesee-en-quete-dia-2025"><summary>FNEGE Thésée Workshops “En quête d’IA”</summary><div class="details-body"><p>Workshop presentation, France, 26 Nov 2025.</p></div></details>
        <details id="talk-essec-generative-ai-responsible-performance-2025"><summary>A Time for Monsters: Organizational Knowing After LLMs</summary><div class="details-body"><p><em>International Academic Action-Research Day on Generative AI, Responsible Performance, and Transformation</em>, ESSEC Executive, France, 15 Oct 2025.</p></div></details>
        <details id="talk-ai-healthcare-sector-opportunities-challenges-2025"><summary>Artificial Intelligence in the Healthcare Sector</summary><div class="details-body"><p><em>New Opportunities and Challenges</em>, Management Research Center &amp; Chair Technology for Change (École polytechnique) and University of Southern Denmark, 21 Feb 2025.</p></div></details>
        <details id="talk-doctoriales-i3-telecom-paris-2024"><summary>Doctoriales</summary><div class="details-body"><p>i3–CNRS, Télécom Paris – IMT, 12 Jun 2024.</p></div></details>
        <details id="talk-ethique-radiologie-micro-tri-2023"><summary>La question du tri et du micro-tri en radiologie</summary><div class="details-body"><p>Journée Éthique de la radiologie et de l’imagerie médicale, Espace éthique Ile-de-France, 18 Jan 2023. <a href="https://www.youtube.com/watch?v=5H5zft381kg" rel="noopener noreferrer">Video</a>.</p></div></details>
        <details id="talk-big-data-health-seminar-2022"><summary>Toward an ethology of AI tools in the healthcare system</summary><div class="details-body"><p><em>Big Data &amp; Health Seminar</em>, Paris Santé Campus, 22 Sep 2022.</p></div></details>
        <details id="talk-ip-paris-science-forum-2021"><summary>A healthcare revolution?</summary><div class="details-body"><p>IP Paris Science Forum, Télécom, 21 Oct 2021.</p></div></details>
        <details id="talk-cnrs-paul-langevin-ai-personalization-2021"><summary>AI and the personalization of patient pathways</summary><div class="details-body"><p>CNRS Paul-Langevin Center Summer School, Aussois, 5–9 Jul 2021.</p></div></details>
      </div>

      <h3>Conferences</h3>
      <div class="details-list">
        <details id="talk-telemedicine-platforms-loosely-coupled-systems-2025"><summary>Telemedicine platforms as loosely coupled systems</summary><div class="details-body"><p>Yatim, F., et al. ARAMOS, France, 21 Nov 2025.</p></div></details>
        <details id="talk-human-ai-knowledge-creation-peircean-lens-2025"><summary>Human-AI Knowledge Creation Through a Peircean Lens</summary><div class="details-body"><p>Perez-Torrents, J.; Altmejd, S. AMCIS 2025 Proceedings 28, 14–16 Aug 2025. <a href="https://aisel.aisnet.org/amcis2025/sig_osra/sig_osra/28" rel="noopener noreferrer">Proceedings</a>.</p></div></details>
        <details id="talk-transforming-care-symposium-aom-2025"><summary>Transforming Care: Coordination, Innovation and Technology in Healthcare Transformation</summary><div class="details-body"><p>Symposium, Academy of Management Proceedings, Denmark, 27 Jul 2025. <a href="https://journals.aom.org/doi/abs/10.5465/AMPROC.2025.10472symposium" rel="noopener noreferrer">Proceedings</a>.</p></div></details>
        <details id="talk-pragmatist-lenses-human-ai-collaboration-2025"><summary>Pragmatist Lenses on Epistemic Human–AI Collaboration</summary><div class="details-body"><p><em>Toward a Typology of Inquiring-With-Algorithms</em>, ASAC, Canada, 19 May 2025.</p></div></details>
        <details id="talk-inquiring-with-algorithms-ideas-2025"><summary>Inquiring with algorithms</summary><div class="details-body"><p><em>An epistemological cut on human–AI collaboration</em>, IDeaS Conference, Canada, 30 Apr–2 May 2025.</p></div></details>
        <details id="talk-inquiring-with-algorithms-joint-phd-2025"><summary>Inquiring with algorithms</summary><div class="details-body"><p><em>An epistemological cut on human–AI collaboration</em>, Montreal Business School Joint PhD Symposium, Canada, 28 Mar 2025.</p></div></details>
        <details id="talk-ethnographic-case-study-algorithmic-organizing-2024"><summary>Ethnographic case study of algorithmic organizing in medical research</summary><div class="details-body"><p>IDeaS Conference, Canada, 20–23 Mar 2024.</p></div></details>
        <details id="talk-understanding-ai-pragmatist-perspective-2023"><summary>Understanding AI from a pragmatist perspective</summary><div class="details-body"><p>PHILOS Conference (3rd edition), Greece, 22–24 Jun 2023.</p></div></details>
      </div>

      <h3>Workshops</h3>
      <div class="details-list">
        <details id="talk-rick-workshop-ai-agency-2025"><summary>RICK Workshop — AI and Agency</summary><div class="details-body"><p>Judge Business School, University of Cambridge, June 2025. Sponsored by <em>Information and Organization</em> and University of Cambridge.</p></div></details>
        <details id="talk-oms-development-workshop-2023"><summary>Organization &amp; Management Studies Development Workshop</summary><div class="details-body"><p>April 2023. Sponsored by EGOS, <em>Organization Studies</em>, and Università LUMSA, Italy.</p></div></details>
        <details id="talk-sig-tutorial-design-theory-2022"><summary>SIG Tutorial on Design Theory</summary><div class="details-body"><p>Centre Scientifique de Gestion, Mines ParisTech, France, February 2022.</p></div></details>
        <details id="talk-doctoriales-i3-mines-2021"><summary>Doctoriales</summary><div class="details-body"><p>i3–CNRS, Mines ParisTech, 19 May 2021.</p></div></details>
        <details id="talk-ai-winter-school-2020"><summary>AI Winter School</summary><div class="details-body"><p>Health Data Hub, online, 2020.</p></div></details>
      </div>
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
  </div>
</div>
