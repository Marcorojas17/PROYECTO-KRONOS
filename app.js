/* ============================================
   CRONOS — interacciones mínimas
   Sin dependencias, sin build
   ============================================ */

(function () {
  'use strict';

  // --- Resaltado de navegación según sección visible ---
  const links = document.querySelectorAll('.nav__links a');
  const sections = [...links].map(l => document.querySelector(l.getAttribute('href')));

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(l => l.style.color = '');
          const active = document.querySelector(`.nav__links a[href="#${entry.target.id}"]`);
          if (active) active.style.color = 'var(--accent)';
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach(s => s && observer.observe(s));

  // --- Aparición progresiva de capas ---
  const layers = document.querySelectorAll('.layer');
  const layerObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
        }
      });
    },
    { threshold: 0.15 }
  );

  layers.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateX(-20px)';
    el.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s, background 0.3s`;
    layerObserver.observe(el);
  });

  // --- Aparición progresiva de tarjetas legales ---
  const legalCards = document.querySelectorAll('.legal-card, .glossary dt, .glossary dd');
  const cardObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    },
    { threshold: 0.1 }
  );

  legalCards.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(12px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.04}s, transform 0.5s ease ${i * 0.04}s`;
    cardObserver.observe(el);
  });

  // --- Año dinámico en el footer ---
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // --- Marca de tiempo en consola ---
  console.log(
    '%cCRONOS%c — Sistema de Interpretación Temporal y Simbólica\n' +
    'Arquitectura filosófica y tecnológica. No predice el futuro.',
    'color:#c9a44c;font-size:16px;letter-spacing:4px;font-weight:bold;',
    'color:#9a97ab;font-size:11px;'
  );
})();