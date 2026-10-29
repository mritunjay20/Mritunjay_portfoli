/**
 * Navigation Component
 * Handles sticky topbar, active section spy, mobile drawer toggle,
 * and smooth navigation scrolls.
 */
export function initNavigation() {
  const nav = document.getElementById('main-nav');
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelectorAll('#main-nav a');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('nav-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.textContent = isOpen ? '✕' : '☰';
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('nav-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.textContent = '☰';
      });
    });
  }

  // Active section spy with IntersectionObserver
  const sections = document.querySelectorAll('main section[id]');
  const observerOptions = {
    rootMargin: '-30% 0px -50% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          link.classList.toggle('active', href === `#${id}`);
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));

  // Reduced motion detection
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    document.documentElement.classList.add('reduced-motion');
  }
}
