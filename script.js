const header = document.querySelector('.header');
const menu = document.querySelector('#mobile-menu');
const toggle = document.querySelector('.menu-toggle');
const closeButton = document.querySelector('.menu-close');
function syncHeader() { header.classList.toggle('scrolled', window.scrollY > 90); }
window.addEventListener('scroll', syncHeader, { passive: true });
syncHeader();
function closeMenu() { menu.close(); }
toggle.addEventListener('click', () => {
  menu.showModal();
  toggle.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
});
closeButton.addEventListener('click', closeMenu);
menu.addEventListener('keydown', event => {
  if (event.key !== 'Tab') return;
  const items = [...menu.querySelectorAll('button, a[href]')];
  const first = items[0];
  const last = items[items.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault(); last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault(); first.focus();
  }
});
menu.addEventListener('close', () => {
  toggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
  toggle.focus({ preventScroll: true });
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
window.matchMedia('(min-width: 761px)').addEventListener('change', event => {
  if (event.matches && menu.open) closeMenu();
});
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !motionPreference.matches) {
  document.documentElement.classList.add('motion-ready');
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  motionPreference.addEventListener('change', event => {
    if (event.matches) { observer.disconnect(); document.documentElement.classList.remove('motion-ready'); }
  });
}
document.querySelector('#year').textContent = new Date().getFullYear();
