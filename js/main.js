/* ESTÂNCIA DA ESTAÇÃO — JavaScript vanilla, sem dependências */
(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const header = $('#siteHeader');
  const menuToggle = $('#menuToggle');
  const nav = $('#siteNav');
  const progress = $('#readingProgress');
  const mobileBreakpoint = window.matchMedia('(max-width: 999px)');
  const mobileRoute = $('#mobileRoute');
  const heroSection = $('.hero');
  const footerSection = $('.footer');

  // Cabeçalho, indicador de leitura e links ativos.
  const updateScroll = () => {
    const y = window.scrollY;
    header?.classList.toggle('is-scrolled', y > 20);
    const heroOutOfView = heroSection && heroSection.getBoundingClientRect().bottom < window.innerHeight * .35;
    const footerInView = footerSection && footerSection.getBoundingClientRect().top < window.innerHeight - 90;
    mobileRoute?.classList.toggle('is-visible', !!heroOutOfView && !footerInView && window.innerWidth < 1000);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (progress) progress.style.width = `${max > 0 ? Math.min(100, y / max * 100) : 0}%`;
  };
  window.addEventListener('scroll', updateScroll, { passive: true });
  window.addEventListener('resize', updateScroll, { passive: true });
  updateScroll();

  // Menu com suporte a ESC e sem travar a navegação desktop.
  function closeMenu(restoreFocus = false) {
    nav?.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Abrir menu');
    document.body.classList.remove('is-locked');
    if (restoreFocus) menuToggle?.focus();
  }
  function openMenu() {
    nav?.classList.add('is-open');
    menuToggle?.setAttribute('aria-expanded', 'true');
    menuToggle?.setAttribute('aria-label', 'Fechar menu');
    document.body.classList.add('is-locked');
    $('.nav-link', nav)?.focus();
  }
  menuToggle?.addEventListener('click', () => {
    nav.classList.contains('is-open') ? closeMenu(true) : openMenu();
  });
  $$('a[href^="#"]', nav).forEach(link => link.addEventListener('click', () => closeMenu()));
  document.addEventListener('click', event => {
    if (mobileBreakpoint.matches && nav?.classList.contains('is-open') &&
      !nav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
  });
  mobileBreakpoint.addEventListener?.('change', event => { if (!event.matches) closeMenu(); });

  const navigationLinks = $$('.nav-link');
  const sections = ['inicio', 'essencia', 'sabores', 'galeria', 'visite']
    .map(id => document.getElementById(id)).filter(Boolean);
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navigationLinks.forEach(link => {
          const active = link.getAttribute('href') === `#${entry.target.id}`;
          link.classList.toggle('is-current', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-25% 0px -55% 0px', threshold: 0 });
    sections.forEach(section => sectionObserver.observe(section));
  }

  // Revelação progressiva. Respeita preferência de movimento reduzido.
  const reveals = $$('.reveal');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reducedMotion) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -30px 0px', threshold: .07 });
    reveals.forEach(item => revealObserver.observe(item));
  } else reveals.forEach(item => item.classList.add('is-visible'));

  // Imagens autorais ilustrativas de emergência se o CDN de fotos estiver offline.
  const illustrationAssets = [
    'ilustracao-fogo.svg', 'ilustracao-ambiente.svg', 'ilustracao-burger.svg',
    'ilustracao-encontro.svg', 'ilustracao-bbq.svg', 'ilustracao-country.svg'
  ];
  $$('.gallery-item img').forEach((img, index) => {
    const showFallback = () => {
      if (img.dataset.usingFallback) return;
      img.dataset.usingFallback = 'true';
      img.src = `assets/${illustrationAssets[index] || illustrationAssets[0]}`;
    };
    img.addEventListener('error', showFallback);
    if (img.complete && img.naturalWidth === 0) showFallback();
  });

  // Galeria: filtrar somente o conteúdo presente, sem carregar API externa.
  const galleryItems = $$('.gallery-item');
  const galleryFilters = $$('.gallery-filter');
  const lightbox = $('#lightbox');
  const lightboxImg = $('#lightboxImage');
  const lightboxCaption = $('#lightboxCaption');
  const lightboxCounter = $('#lightboxCounter');
  let visibleGalleryItems = galleryItems;
  let currentIndex = 0;
  let previousFocus = null;
  let startX = null;

  galleryFilters.forEach(filter => filter.addEventListener('click', () => {
    const selected = filter.dataset.filter;
    galleryFilters.forEach(button => {
      const active = button === filter;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    galleryItems.forEach(item => {
      item.hidden = selected !== 'todos' && item.dataset.category !== selected;
    });
    visibleGalleryItems = galleryItems.filter(item => !item.hidden);
  }));

  function showImage(index) {
    if (!visibleGalleryItems.length) return;
    currentIndex = (index + visibleGalleryItems.length) % visibleGalleryItems.length;
    const item = visibleGalleryItems[currentIndex];
    const image = $('img', item);
    lightboxImg.src = image.dataset.full || image.currentSrc || image.src;
    lightboxImg.alt = image.alt;
    lightboxCaption.textContent = $('.gallery-caption strong', item)?.textContent || image.alt;
    lightboxCounter.textContent = `${String(currentIndex + 1).padStart(2, '0')} / ${String(visibleGalleryItems.length).padStart(2, '0')}`;
  }
  function openLightbox(item) {
    previousFocus = document.activeElement;
    const index = visibleGalleryItems.indexOf(item);
    if (index < 0) return;
    showImage(index);
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-locked');
    $('#lightboxClose').focus();
  }
  function closeLightbox() {
    if (!lightbox.classList.contains('is-open')) return;
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.removeAttribute('src');
    document.body.classList.remove('is-locked');
    previousFocus?.focus?.();
  }
  galleryItems.forEach(item => item.addEventListener('click', () => openLightbox(item)));
  $('#lightboxClose')?.addEventListener('click', closeLightbox);
  $('#lightboxPrev')?.addEventListener('click', () => showImage(currentIndex - 1));
  $('#lightboxNext')?.addEventListener('click', () => showImage(currentIndex + 1));
  lightbox?.addEventListener('click', event => { if (event.target === lightbox) closeLightbox(); });
  lightbox?.addEventListener('touchstart', event => { startX = event.changedTouches[0]?.screenX ?? null; }, { passive: true });
  lightbox?.addEventListener('touchend', event => {
    const endX = event.changedTouches[0]?.screenX;
    if (startX !== null && endX !== undefined && Math.abs(endX - startX) > 55) {
      showImage(currentIndex + (endX < startX ? 1 : -1));
    }
    startX = null;
  }, { passive: true });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      if (lightbox?.classList.contains('is-open')) closeLightbox();
      else if (nav?.classList.contains('is-open')) closeMenu(true);
    }
    if (lightbox?.classList.contains('is-open')) {
      if (event.key === 'ArrowLeft') showImage(currentIndex - 1);
      if (event.key === 'ArrowRight') showImage(currentIndex + 1);
      if (event.key === 'Tab') {
        const controls = $$('.lightbox-close, .lightbox-prev, .lightbox-next', lightbox);
        const position = controls.indexOf(document.activeElement);
        if (event.shiftKey && position <= 0) { event.preventDefault(); controls.at(-1)?.focus(); }
        else if (!event.shiftKey && position === controls.length - 1) { event.preventDefault(); controls[0]?.focus(); }
      }
    }
    if (nav?.classList.contains('is-open') && event.key === 'Tab' && mobileBreakpoint.matches) {
      const focusables = $$('a', nav).concat(menuToggle);
      const current = focusables.indexOf(document.activeElement);
      if (event.shiftKey && current === 0) { event.preventDefault(); menuToggle.focus(); }
      else if (!event.shiftKey && current === focusables.length - 1) { event.preventDefault(); focusables[0].focus(); }
    }
  });

  // FAQs: abrir apenas uma pergunta por vez.
  const faqs = $$('.faq-list details');
  faqs.forEach(detail => detail.addEventListener('toggle', () => {
    if (detail.open) faqs.forEach(other => { if (other !== detail) other.open = false; });
  }));

  // Copiar localização com alternativa para contextos sem clipboard seguro.
  const toast = $('#toast');
  let toastTimeout;
  function notify(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove('show'), 2800);
  }
  $('#copyAddress')?.addEventListener('click', async () => {
    const address = 'Estância da Estação — Rodovia Waldomiro Corrêa de Camargo, km 58, Itu/SP';
    try {
      if (!navigator.clipboard?.writeText) throw new Error('clipboard-indisponivel');
      await navigator.clipboard.writeText(address);
      notify('Endereço copiado!');
    } catch {
      // Seleção simples, inclusive em visualização por arquivo local.
      const temp = document.createElement('textarea');
      temp.value = address; temp.style.cssText = 'position:fixed;opacity:0;left:-9999px';
      document.body.appendChild(temp); temp.select();
      let copied = false;
      try { copied = document.execCommand('copy'); } catch { /* bloqueado */ }
      temp.remove();
      notify(copied ? 'Endereço copiado!' : 'Copie: Rodovia Waldomiro Corrêa de Camargo, km 58 — Itu/SP');
    }
  });

  const year = $('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
