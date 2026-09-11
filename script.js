const navLinks = document.querySelectorAll('.main-nav a, .site-nav a');
const sections = document.querySelectorAll('main section[id]');
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const yearEl = document.getElementById('year');
const analyticsKey = 'portfolio_metrics_v1';

function trackMetric(metricName) {
  try {
    const raw = localStorage.getItem(analyticsKey);
    const metrics = raw ? JSON.parse(raw) : {};
    metrics[metricName] = Number(metrics[metricName] || 0) + 1;
    metrics.lastUpdated = new Date().toISOString();
    localStorage.setItem(analyticsKey, JSON.stringify(metrics));
  } catch {
    // Ignore storage exceptions in private mode or restricted contexts.
  }
}

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

trackMetric('page_view');

document.querySelectorAll('a[href^="http"]').forEach((link) => {
  link.addEventListener('click', () => {
    trackMetric('outbound_click');
  });
});

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 980) {
      mainNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const id = entry.target.getAttribute('id');
      navLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === `#${id}`;
        link.classList.toggle('active', isActive);
      });
    });
  },
  {
    rootMargin: '-45% 0px -45% 0px',
    threshold: 0,
  }
);

sections.forEach((section) => sectionObserver.observe(section));
