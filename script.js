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

  /* ---- Contact form -> opens email client (no backend needed) ---- */
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = (form.name.value || '').trim();
      var email = (form.email.value || '').trim();
      var service = form.service.value;
      var message = (form.message.value || '').trim();

      if (!name || !email) {
        alert('Please add your name and email so we can reply.');
        return;
      }

      var subject = 'New project enquiry — ' + service;
      var body =
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n' +
        'Service: ' + service + '\n\n' +
        'Details:\n' + (message || '(none provided)');

      var mailto = 'mailto:studiosbrandmotion@gmail.com'
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent(body);

      window.location.href = mailto;
    });
  }
})();
