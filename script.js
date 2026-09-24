/* ===== ЭКРАНИРОВАНИЕ ===== */
function esc(str){
  return String(str)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}

/* ===== РЕНДЕР СЕКЦИЙ И КАРТОЧЕК ===== */
function renderMods(){
  const container = document.getElementById('mods-container');
  let html = '';

  MODS_DATA.forEach(section => {
    html += `<section data-cat="${esc(section.cat)}">`;
    html += `<h2>${esc(section.title)}</h2>`;
    html += `<div class="grid">`;

    section.items.forEach(item => {
      // data-name = чистый текст названия (для поиска), без HTML
      const plainName = item.name.replace(/<[^>]+>/g, '');

      // бейдж
      const badgeClass = item.badge === 'add' ? 'b-add'
                       : item.badge === 'rem' ? 'b-rem'
                       : 'b-rep';
      const badgeText = item.badge;

      // теги
      let tagsHtml = '';
      if (item.tags && item.tags.length){
        tagsHtml = item.tags.map(t => `<span class="tag">${esc(t)}</span>`).join('');
      }

      html += `
        <div class="card" data-name="${esc(plainName)}">
          <div class="name">
            ${item.name}
            <span class="badge ${badgeClass}">${esc(badgeText)}</span>
          </div>
          <div class="desc">${item.desc}${tagsHtml}</div>
        </div>
      `;
    });

    html += `</div></section>`;
  });

  container.innerHTML = html;
}

/* ===== ФИЛЬТР + ПОИСК ===== */
function initFilters(){
  const tabs = document.querySelectorAll('.tab');
  const sections = document.querySelectorAll('section[data-cat]');
  const search = document.getElementById('search');
  let currentFilter = 'all';

  function applyFilter(){
    sections.forEach(sec => {
      const show = (currentFilter === 'all') || (sec.dataset.cat === currentFilter);
      sec.classList.toggle('hidden', !show);
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentFilter = tab.dataset.filter;
      applyFilter();
    });
  });

  search.addEventListener('input', () => {
    const q = search.value.trim().toLowerCase();
    sections.forEach(sec => {
      const cards = sec.querySelectorAll('.card');
      let visibleInSection = 0;
      cards.forEach(card => {
        const name = card.dataset.name.toLowerCase();
        const match = name.includes(q);
        card.classList.toggle('hidden', !match);
        if (match) visibleInSection++;
      });
      const catOk = (currentFilter === 'all') || (sec.dataset.cat === currentFilter);
      sec.classList.toggle('hidden', !catOk || visibleInSection === 0);
    });
  });
}

/* ===== АНИМАЦИИ ПРИ ПРОКРУТКЕ ===== */
function initReveal(){
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const sections = document.querySelectorAll('section[data-cat]');

  if (!reduceMotion && 'IntersectionObserver' in window){
    const revealTargets = [];

    sections.forEach(sec => {
      const h2 = sec.querySelector('h2');
      if (h2){
        h2.classList.add('reveal');
        revealTargets.push(h2);
      }

      const cards = sec.querySelectorAll('.card');
      cards.forEach((card, i) => {
        card.classList.add('reveal');
        card.style.transitionDelay = Math.min(i * 45, 400) + 'ms';
        revealTargets.push(card);
      });
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.08
    });

    revealTargets.forEach(el => observer.observe(el));
  } else {
    document.querySelectorAll('.card, section h2').forEach(el => {
      el.classList.add('reveal', 'is-visible');
    });
  }
}

/* ===== СТАРТ ===== */
document.addEventListener('DOMContentLoaded', () => {
  renderMods();
  initFilters();
  initReveal();
});
