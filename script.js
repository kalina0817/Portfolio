const navLinks = document.querySelectorAll('.main-nav a, .site-nav a');
const sections = document.querySelectorAll('main section[id]');
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const mobileBackButton = document.querySelector('.mobile-back-btn');
const mobileTopButton = document.querySelector('.mobile-top-btn');
const expandableActionGroups = document.querySelectorAll('.hero-actions, .project-links');
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

if (expandableActionGroups.length > 0) {
  const actionGroupControls = [];
  const isDesktopViewport = () => window.matchMedia('(min-width: 721px)').matches;
  let wasDesktopViewport = isDesktopViewport();

  const getToggleText = (isExpanded, label) => {
    if (isExpanded) {
      return 'Show less';
    }
    return `More ${label}`;
  };

  expandableActionGroups.forEach((group) => {
    const actionLinks = group.querySelectorAll('a');
    if (actionLinks.length < 2) {
      return;
    }

    const label = group.classList.contains('project-links') ? 'links' : 'actions';
    const startsExpanded = isDesktopViewport();
    group.classList.add('collapsible-actions');
    group.dataset.expanded = startsExpanded ? 'true' : 'false';
    group.classList.toggle('is-expanded', startsExpanded);
    group.classList.toggle('is-collapsed', !startsExpanded);

    const toggleButton = document.createElement('button');
    toggleButton.type = 'button';
    toggleButton.className = 'expand-actions-toggle';
    toggleButton.setAttribute('aria-expanded', startsExpanded ? 'true' : 'false');
    toggleButton.textContent = getToggleText(startsExpanded, label);

    toggleButton.addEventListener('click', () => {
      const isExpanded = group.dataset.expanded === 'true';
      const nextExpanded = !isExpanded;
      group.dataset.expanded = nextExpanded ? 'true' : 'false';
      group.classList.toggle('is-collapsed', !nextExpanded);
      group.classList.toggle('is-expanded', nextExpanded);
      toggleButton.setAttribute('aria-expanded', nextExpanded ? 'true' : 'false');
      toggleButton.textContent = getToggleText(nextExpanded, label);
    });

    group.insertAdjacentElement('afterend', toggleButton);
    actionGroupControls.push({ group, toggleButton, label });
  });

  const syncExpandableActions = () => {
    const isDesktop = isDesktopViewport();

    actionGroupControls.forEach(({ group, toggleButton, label }) => {
      if (isDesktop !== wasDesktopViewport) {
        group.dataset.expanded = isDesktop ? 'true' : 'false';
      }

      const isExpanded = group.dataset.expanded === 'true';
      group.classList.toggle('is-collapsed', !isExpanded);
      group.classList.toggle('is-expanded', isExpanded);
      toggleButton.hidden = false;
      toggleButton.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
      toggleButton.textContent = getToggleText(isExpanded, label);
    });

    wasDesktopViewport = isDesktop;
  };

  window.addEventListener('resize', syncExpandableActions);
  syncExpandableActions();
}

if (mobileBackButton || mobileTopButton) {
  const isMobileViewport = () => window.matchMedia('(max-width: 980px)').matches;
  let lastScrollY = window.scrollY;

  const updateMobileButtonsVisibility = () => {
    const isMobile = isMobileViewport();
    const hasAnchorHistory = Boolean(window.location.hash && window.location.hash !== '#home');
    const canUseHistoryBack = window.history.length > 1;
    if (mobileBackButton) {
      mobileBackButton.hidden = !(isMobile && (hasAnchorHistory || canUseHistoryBack));
    }

    if (mobileTopButton) {
      mobileTopButton.hidden = !(isMobile && window.scrollY > 220);
    }
  };

  if (mobileBackButton) {
    mobileBackButton.addEventListener('click', () => {
      const currentHash = window.location.hash;
      const canUseHistoryBack = window.history.length > 1;

      if (canUseHistoryBack) {
        window.history.back();

        // If history cannot move (for example first in-tab state), return to Home.
        window.setTimeout(() => {
          if (window.location.hash === currentHash) {
            window.location.hash = '#home';
          }
        }, 220);
        return;
      }

      window.location.hash = '#home';
    });
  }

  if (mobileTopButton) {
    mobileTopButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const scrollingDown = currentScrollY > lastScrollY + 6;
    const nearTop = currentScrollY < 80;

    if (isMobileViewport() && scrollingDown && !nearTop) {
      document.body.classList.add('mobile-fabs-hidden');
    } else {
      document.body.classList.remove('mobile-fabs-hidden');
    }

    lastScrollY = currentScrollY;
    updateMobileButtonsVisibility();
  }, { passive: true });

  window.addEventListener('hashchange', updateMobileButtonsVisibility);
  window.addEventListener('resize', () => {
    if (!isMobileViewport()) {
      document.body.classList.remove('mobile-fabs-hidden');
    }
    updateMobileButtonsVisibility();
  });
  updateMobileButtonsVisibility();
}

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
