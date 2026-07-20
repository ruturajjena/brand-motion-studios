/* ============================================================
   Brand Motion Studios — script.js
   ============================================================ */
(function () {
  'use strict';

  /* ---- Sticky nav background on scroll ---- */
  var nav = document.getElementById('nav');
  function onScroll() {
    if (window.scrollY > 20) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile menu ---- */
  var toggle = document.getElementById('navToggle');
  var links = document.querySelector('.nav__links');
  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  /* ---- Reveal on scroll ---- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (entry.isIntersecting) {
          // small stagger for siblings
          var delay = entry.target.parentElement
            ? Array.prototype.indexOf.call(entry.target.parentElement.children, entry.target) % 4 * 80
            : 0;
          setTimeout(function () { entry.target.classList.add('in'); }, delay);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- Current year ---- */
  var yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---- Contact form -> opens WhatsApp with a pre-filled message ---- */
  var WHATSAPP_NUMBER = '918260170130'; // country code + number, digits only
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = (form.name.value || '').trim();
      var email = (form.email.value || '').trim();
      var service = form.service.value;
      var message = (form.message.value || '').trim();

      if (!name) {
        alert('Please add your name so we know who we’re chatting with.');
        return;
      }

      var text =
        'Hi Brand Motion Studios! 👋\n\n' +
        'Name: ' + name + '\n' +
        (email ? 'Email: ' + email + '\n' : '') +
        'Interested in: ' + service + '\n\n' +
        (message ? 'Project details: ' + message : 'I’d love to discuss a project.');

      var wa = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(text);
      window.open(wa, '_blank', 'noopener');
    });
  }
})();
