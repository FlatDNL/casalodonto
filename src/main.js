import { CLINIC_INFO, TREATMENTS, BEFORE_AFTER_CASES, TESTIMONIALS, INSTAGRAM_FEED } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderHeroStats();
  renderTreatments();
  renderBeforeAfterSliders();
  renderProfessionals();
  renderTestimonials();
  renderInstagramFeed();
  setupMobileMenu();
  setupScrollEffects();
  setupScrollReveal();
});

/* =========================================================================
   1. NAVBAR
   ========================================================================= */
function renderNavbar() {
  const header = document.getElementById('main-header');
  if (!header) return;

  header.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo / Brand -->
        <a href="#hero" class="flex flex-col group">
          <span class="text-xl sm:text-2xl font-sans font-medium tracking-wide text-white group-hover:text-[#C7A66A] transition-colors duration-300">
            Casal Odontolove
          </span>
          <span class="text-[10px] tracking-[0.25em] uppercase text-[#C7A66A] font-medium">
            Odontologia Estética
          </span>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8 text-sm tracking-wider text-[#F4EFE7]/80">
          <a href="#hero" class="hover:text-[#C7A66A] transition-colors duration-200">Início</a>
          <a href="#tratamentos" class="hover:text-[#C7A66A] transition-colors duration-200">Tratamentos</a>
          <a href="#transformacoes" class="hover:text-[#C7A66A] transition-colors duration-200">Transformações</a>
          <a href="#filosofia" class="hover:text-[#C7A66A] transition-colors duration-200">Filosofia</a>
          <a href="#profissionais" class="hover:text-[#C7A66A] transition-colors duration-200">O Casal</a>
          <a href="#depoimentos" class="hover:text-[#C7A66A] transition-colors duration-200">Depoimentos</a>
          <a href="#feed" class="hover:text-[#C7A66A] transition-colors duration-200">Instagram</a>
        </nav>

        <!-- CTA Header -->
        <div class="hidden sm:flex items-center space-x-4">
          <a href="${CLINIC_INFO.whatsapp.link}" target="_blank" rel="noopener noreferrer" 
             class="btn-gold-pulse inline-flex items-center px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-[#C7A66A] to-[#A88849] text-black shadow-lg shadow-black/40">
            <span>Agendar Avaliação</span>
            <svg class="w-3.5 h-3.5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </a>
        </div>

        <!-- Mobile Menu Toggle Button -->
        <button id="mobile-menu-btn" type="button" aria-label="Abrir Menu de Navegação" 
                class="md:hidden text-[#F4EFE7] hover:text-[#C7A66A] p-2 focus:outline-none">
          <svg id="menu-icon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <div id="mobile-drawer" class="hidden md:hidden bg-[#111111]/98 backdrop-blur-xl border-b border-[#C7A66A]/20 px-6 py-8 transition-all duration-300">
      <div class="flex flex-col space-y-5 text-base tracking-widest uppercase font-sans font-medium text-[#F4EFE7]">
        <a href="#hero" class="mobile-nav-link hover:text-[#C7A66A] py-1 border-b border-white/5">Início</a>
        <a href="#tratamentos" class="mobile-nav-link hover:text-[#C7A66A] py-1 border-b border-white/5">Tratamentos</a>
        <a href="#transformacoes" class="mobile-nav-link hover:text-[#C7A66A] py-1 border-b border-white/5">Transformações</a>
        <a href="#filosofia" class="mobile-nav-link hover:text-[#C7A66A] py-1 border-b border-white/5">Filosofia</a>
        <a href="#profissionais" class="mobile-nav-link hover:text-[#C7A66A] py-1 border-b border-white/5">O Casal</a>
        <a href="#depoimentos" class="mobile-nav-link hover:text-[#C7A66A] py-1 border-b border-white/5">Depoimentos</a>
        <a href="#feed" class="mobile-nav-link hover:text-[#C7A66A] py-1 border-b border-white/5">Instagram</a>
      </div>
      <div class="mt-8">
        <a href="${CLINIC_INFO.whatsapp.link}" target="_blank" rel="noopener noreferrer" 
           class="flex items-center justify-center w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-[#C7A66A] to-[#A88849] text-black">
          <span>Agendar pelo WhatsApp</span>
        </a>
      </div>
    </div>
  `;
}

function setupMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-drawer');
  if (!btn || !drawer) return;

  btn.addEventListener('click', () => {
    drawer.classList.toggle('hidden');
  });

  const links = drawer.querySelectorAll('.mobile-nav-link');
  links.forEach(l => {
    l.addEventListener('click', () => {
      drawer.classList.add('hidden');
    });
  });
}

function setupScrollEffects() {
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('bg-[#111111]/90', 'backdrop-blur-md', 'border-b', 'border-[#C7A66A]/20', 'shadow-2xl');
      header.classList.remove('bg-transparent');
    } else {
      header.classList.remove('bg-[#111111]/90', 'backdrop-blur-md', 'border-b', 'border-[#C7A66A]/20', 'shadow-2xl');
      header.classList.add('bg-transparent');
    }
  });
}

/* =========================================================================
   2. HERO & AUTHORITY STATS
   ========================================================================= */
function renderHeroStats() {
  const statsContainer = document.getElementById('authority-stats');
  if (!statsContainer) return;

  statsContainer.innerHTML = CLINIC_INFO.stats.map((stat, idx) => `
    <div class="reveal-fade-up delay-${(idx + 1) * 150} flex-1 text-center md:text-left py-4 px-4 ${idx < CLINIC_INFO.stats.length - 1 ? 'md:border-r border-[#C7A66A]/20' : ''}">
      <div class="text-3xl lg:text-4xl font-sans font-medium text-[#C7A66A] font-bold tracking-tight mb-1">
        ${stat.number}
      </div>
      <div class="text-xs uppercase tracking-widest text-[#F4EFE7] font-semibold mb-0.5">
        ${stat.label}
      </div>
      <div class="text-[11px] text-[#8C8C8C] leading-tight">
        ${stat.detail}
      </div>
    </div>
  `).join('');
}

/* =========================================================================
   3. TREATMENTS SECTION (EDITORIAL CARDS)
   ========================================================================= */
function renderTreatments() {
  const grid = document.getElementById('treatments-grid');
  if (!grid) return;

  grid.innerHTML = TREATMENTS.map((t, idx) => `
    <div class="reveal-fade-up delay-${(idx % 3 + 1) * 100} interactive-card group relative bg-[#181818] rounded-2xl overflow-hidden border border-[#C7A66A]/15 flex flex-col justify-between">
      <div class="relative aspect-[16/11] overflow-hidden bg-black/40">
        <img src="${t.image}" alt="${t.alt}" loading="lazy" 
             class="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100">
        <div class="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-black/20"></div>
        <span class="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-[#C7A66A] font-sans font-medium text-sm font-bold px-3 py-1 rounded-full border border-[#C7A66A]/30">
          ${t.number}
        </span>
      </div>

      <div class="p-6 sm:p-8 flex-1 flex flex-col justify-between">
        <div>
          <span class="text-[11px] uppercase tracking-widest text-[#C7A66A] font-semibold block mb-2">
            ${t.tag}
          </span>
          <h3 class="text-2xl font-sans font-medium text-[#F4EFE7] mb-3 group-hover:text-[#C7A66A] transition-colors duration-300">
            ${t.title}
          </h3>
          <p class="text-sm text-[#8C8C8C] leading-relaxed mb-4">
            ${t.description}
          </p>
        </div>

        <div class="pt-4 border-t border-white/5 flex items-center justify-between">
          <span class="text-xs text-[#F4EFE7]/60 italic font-sans font-medium">
            ${t.highlight}
          </span>
          <a href="${CLINIC_INFO.whatsapp.link}" target="_blank" rel="noopener noreferrer" 
             class="inline-flex items-center text-xs font-semibold text-[#C7A66A] hover:text-[#d8b87d] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
            <span>Avaliar</span>
            <svg class="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

/* =========================================================================
   4. BEFORE & AFTER COMPARISON SLIDERS
   ========================================================================= */
function renderBeforeAfterSliders() {
  const container = document.getElementById('before-after-container');
  if (!container) return;

  container.innerHTML = BEFORE_AFTER_CASES.map((item, idx) => `
    <div class="reveal-fade-up delay-${(idx + 1) * 150} interactive-card bg-[#181818] rounded-2xl p-6 sm:p-8 border border-[#C7A66A]/20 shadow-xl">
      <div class="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span class="text-xs uppercase tracking-widest text-[#C7A66A] font-semibold block mb-1">
            ${item.category}
          </span>
          <h3 class="text-2xl sm:text-3xl font-sans font-medium text-[#F4EFE7]">
            ${item.title}
          </h3>
        </div>
        <div class="text-xs text-[#8C8C8C] flex items-center gap-2">
          <svg class="w-4 h-4 text-[#C7A66A] animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"/>
          </svg>
          <span>Arraste o cursor para comparar</span>
        </div>
      </div>

      <!-- Comparison Slider Widget -->
      <div class="comparison-container rounded-xl aspect-[16/10] sm:aspect-[16/9] w-full" data-slider-id="${item.id}">
        <!-- Base image (AFTER / DEPOIS) -->
        <img src="${item.afterImage}" alt="${item.afterLabel}" class="w-full h-full object-cover object-center">
        <span class="absolute bottom-4 right-4 bg-black/75 backdrop-blur-md text-[#C7A66A] text-[11px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full border border-[#C7A66A]/30 z-10 pointer-events-none">
          ${item.afterLabel}
        </span>

        <!-- Overlay image (BEFORE / ANTES) -->
        <div class="comparison-overlay" style="width: 50%;">
          <div class="w-full h-full relative" style="width: 100%;">
            <img src="${item.beforeImage}" alt="${item.beforeLabel}" class="comparison-before-img h-full object-cover object-center max-w-none">
            <span class="absolute bottom-4 left-4 bg-black/75 backdrop-blur-md text-[#F4EFE7] text-[11px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full border border-white/20 z-10 pointer-events-none">
              ${item.beforeLabel}
            </span>
          </div>
        </div>

        <!-- Slider Bar Handle -->
        <div class="comparison-handle" style="left: 50%;">
          <div class="comparison-handle-btn">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8 7l-5 5 5 5m8-10l5 5-5 5"/>
            </svg>
          </div>
        </div>
      </div>

      <p class="text-xs text-[#8C8C8C] mt-4 leading-relaxed">
        ${item.description}
      </p>
      <p class="text-[10px] text-[#8C8C8C]/60 mt-2 italic">
        ${item.cfoDisclaimer}
      </p>
    </div>
  `).join('');

  initSliders();
}

function initSliders() {
  const sliders = document.querySelectorAll('.comparison-container');

  sliders.forEach(slider => {
    const overlay = slider.querySelector('.comparison-overlay');
    const handle = slider.querySelector('.comparison-handle');
    const beforeImg = slider.querySelector('.comparison-before-img');

    // Sync width of inner image to container width
    const syncImageWidth = () => {
      if (beforeImg) {
        beforeImg.style.width = `${slider.offsetWidth}px`;
      }
    };

    window.addEventListener('resize', syncImageWidth);
    // Initial sync
    setTimeout(syncImageWidth, 50);

    let isDragging = false;

    const setPosition = (clientX) => {
      const rect = slider.getBoundingClientRect();
      let offsetX = clientX - rect.left;
      if (offsetX < 0) offsetX = 0;
      if (offsetX > rect.width) offsetX = rect.width;
      const percentage = (offsetX / rect.width) * 100;
      overlay.style.width = `${percentage}%`;
      handle.style.left = `${percentage}%`;
    };

    const onPointerDown = (e) => {
      isDragging = true;
      setPosition(e.clientX || (e.touches && e.touches[0].clientX));
    };

    const onPointerMove = (e) => {
      if (!isDragging) return;
      setPosition(e.clientX || (e.touches && e.touches[0].clientX));
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    slider.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    slider.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);
  });
}

/* =========================================================================
   5. PROFESSIONALS SECTION (O CASAL)
   ========================================================================= */
function renderProfessionals() {
  const container = document.getElementById('professionals-grid');
  if (!container) return;

  container.innerHTML = CLINIC_INFO.professionals.map((p, idx) => `
    <div class="reveal-fade-up delay-${(idx + 1) * 200} interactive-card bg-[#181818] rounded-2xl overflow-hidden border border-[#C7A66A]/20 p-8 flex flex-col justify-between group">
      <div>
        <div class="flex items-center space-x-4 mb-6">
          <div class="w-14 h-14 rounded-full border border-[#C7A66A]/40 overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
            <img src="images/profile-avatar.jpg" alt="${p.name}" class="w-full h-full object-cover">
          </div>
          <div>
            <h3 class="text-2xl font-sans font-medium text-[#F4EFE7] group-hover:text-[#C7A66A] transition-colors">
              ${p.name}
            </h3>
            <span class="text-xs uppercase tracking-widest text-[#C7A66A] font-semibold block">
              ${p.cro}
            </span>
          </div>
        </div>

        <p class="text-sm text-[#8C8C8C] leading-relaxed mb-6">
          ${p.bio}
        </p>
      </div>

      <div class="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#F4EFE7]/60">
        <span>+20 anos de experiência clínica</span>
        <span class="text-[#C7A66A]">Atendimento individualizado</span>
      </div>
    </div>
  `).join('');
}

/* =========================================================================
   6. TESTIMONIALS
   ========================================================================= */
function renderTestimonials() {
  const container = document.getElementById('testimonials-grid');
  if (!container) return;

  container.innerHTML = TESTIMONIALS.map((t, idx) => `
    <div class="reveal-fade-up delay-${(idx + 1) * 150} interactive-card bg-[#181818] rounded-2xl p-6 sm:p-8 border border-[#C7A66A]/15 flex flex-col justify-between">
      <div>
        <div class="flex items-center space-x-3 mb-6">
          <div class="w-12 h-12 rounded-full overflow-hidden border border-[#C7A66A]/30">
            <img src="${t.image}" alt="${t.treatment}" class="w-full h-full object-cover">
          </div>
          <div>
            <span class="text-[11px] uppercase tracking-widest text-[#C7A66A] font-semibold block">
              ${t.tag}
            </span>
            <span class="text-xs text-[#8C8C8C]">
              ${t.treatment}
            </span>
          </div>
        </div>

        <blockquote class="text-base sm:text-lg font-sans font-medium italic text-[#F4EFE7] leading-relaxed mb-6">
          "${t.quote}"
        </blockquote>
      </div>

      <div class="pt-4 border-t border-white/5 text-xs text-[#8C8C8C]">
        ${t.author}
      </div>
    </div>
  `).join('');
}

/* =========================================================================
   7. INSTAGRAM FEED
   ========================================================================= */
function renderInstagramFeed() {
  const container = document.getElementById('instagram-gallery');
  if (!container) return;

  container.innerHTML = INSTAGRAM_FEED.map((post, idx) => `
    <a href="${post.url}" target="_blank" rel="noopener noreferrer" 
       class="reveal-scale-in delay-${(idx % 6 + 1) * 75} group relative aspect-square rounded-xl overflow-hidden bg-black/40 border border-[#C7A66A]/15 block">
      <img src="${post.image}" alt="${post.title}" loading="lazy" 
           class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100">
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <span class="text-[10px] uppercase tracking-widest text-[#C7A66A] font-semibold">
          ${post.type}
        </span>
        <p class="text-xs text-white line-clamp-2 mt-1">
          ${post.caption}
        </p>
      </div>
    </a>
  `).join('');
}

/* =========================================================================
   8. SCROLL REVEAL OBSERVER (INTERSECTION OBSERVER)
   ========================================================================= */
function setupScrollReveal() {
  // Respect prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal-fade-up, .reveal-fade-in, .reveal-slide-left, .reveal-slide-right, .reveal-scale-in').forEach(el => {
      el.classList.add('is-revealed');
    });
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.12
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target); // Reveal once smoothly
      }
    });
  }, observerOptions);

  // Small delay to ensure all dynamically generated items are in the DOM
  setTimeout(() => {
    const targets = document.querySelectorAll('.reveal-fade-up, .reveal-fade-in, .reveal-slide-left, .reveal-slide-right, .reveal-scale-in');
    targets.forEach(target => observer.observe(target));
  }, 100);
}
