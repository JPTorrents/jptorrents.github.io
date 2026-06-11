(function () {
  function buildTocFromHeadings() {
    var targetList = document.querySelector('.toc-group.is-current [data-toc-auto]');
    var body = document.querySelector('.document-body');
    if (!targetList || !body) return;

    targetList.innerHTML = '';

    Array.prototype.slice.call(body.querySelectorAll(':scope > section[id]')).forEach(function (section) {
      var heading = section.querySelector('h2');
      if (!heading) return;

      var item = document.createElement('li');
      var link = document.createElement('a');
      link.href = '#' + section.id;
      link.textContent = heading.textContent.replace(/\s*\([^)]*\)\s*$/, '').trim();
      item.appendChild(link);
      targetList.appendChild(item);
    });
  }

  function openDetailsForHash() {
    if (!window.location.hash) return;
    var target = document.getElementById(window.location.hash.slice(1));
    if (!target) return;
    var parent = target.closest('details');
    if (parent) parent.open = true;
    target.scrollIntoView({ block: 'start' });
  }

  function activateToc(id) {
    document.querySelectorAll('.toc a[href^="#"]').forEach(function (link) {
      link.classList.toggle('is-active', link.getAttribute('href') === '#' + id);
    });
  }

  function initScrollSpy() {
    var sections = Array.prototype.slice.call(document.querySelectorAll('main section[id]'));
    if (!sections.length || !('IntersectionObserver' in window)) return;

    var visible = new Map();

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) visible.set(entry.target.id, entry.intersectionRatio);
        else visible.delete(entry.target.id);
      });

      if (!visible.size) return;

      var active = Array.from(visible.entries()).sort(function (a, b) {
        return b[1] - a[1];
      })[0][0];

      activateToc(active);

      if (history.replaceState && window.location.hash !== '#' + active) {
        history.replaceState(null, '', '#' + active);
      }
    }, {
      rootMargin: '-18% 0px -68% 0px',
      threshold: [0.05, 0.2, 0.5, 0.8]
    });

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  window.addEventListener('hashchange', openDetailsForHash);

  document.addEventListener('DOMContentLoaded', function () {
    buildTocFromHeadings();
    openDetailsForHash();
    initScrollSpy();

    document.querySelectorAll('.toc a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function () {
        activateToc(link.getAttribute('href').slice(1));
      });
    });
  });
}());