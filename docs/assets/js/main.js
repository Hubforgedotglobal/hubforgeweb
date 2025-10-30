// HubForge Global Impact Network - Main JavaScript
// Mobile menu, smooth scroll, animations, and interactive features

(function() {
  'use strict';

  // ========================================
  // SCROLL PROGRESS BAR
  // ========================================
  const createProgressBar = () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress-bar';
    document.body.appendChild(progressBar);
    
    const updateProgressBar = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.pageYOffset / windowHeight) * 100;
      progressBar.style.width = scrolled + '%';
    };
    
    window.addEventListener('scroll', updateProgressBar, { passive: true });
    updateProgressBar();
  };

  // ========================================
  // BACK TO TOP BUTTON
  // ========================================
  const createBackToTop = () => {
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>';
    backToTop.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTop);
    
    const toggleBackToTop = () => {
      if (window.pageYOffset > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    };
    
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    window.addEventListener('scroll', toggleBackToTop, { passive: true });
    toggleBackToTop();
  };

  // ========================================
  // PAGE LOAD ANIMATIONS
  // ========================================
  const initPageLoadAnimations = () => {
    document.body.classList.add('page-loaded');
    
    // Stagger animation for hero elements
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-description, .hero-buttons');
    heroElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animate-in');
      }, index * 100);
    });
  };

  // ========================================
  // PARALLAX EFFECT
  // ========================================
  const initParallax = () => {
    const parallaxElements = document.querySelectorAll('.hero, .page-hero, .hero-background');
    
    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      
      parallaxElements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight && el.getBoundingClientRect().bottom > 0) {
          const speed = 0.5;
          el.style.transform = `translateY(${scrolled * speed}px)`;
        }
      });
    };
    
    window.addEventListener('scroll', () => {
      requestAnimationFrame(handleParallax);
    }, { passive: true });
  };

  // ========================================
  // MOBILE NAVIGATION
  // ========================================
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle) {
    navToggle.addEventListener('click', function() {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      
      const isExpanded = navToggle.classList.contains('active');
      navToggle.setAttribute('aria-expanded', isExpanded);
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (navToggle.classList.contains('active')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  document.addEventListener('click', function(event) {
    const isClickInsideNav = navMenu.contains(event.target) || navToggle.contains(event.target);
    if (!isClickInsideNav && navMenu.classList.contains('active')) {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // ========================================
  // NAVBAR SCROLL EFFECT
  // ========================================
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  }, { passive: true });

  // ========================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') {
        e.preventDefault();
        return;
      }
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        e.preventDefault();
        
        const navHeight = navbar.offsetHeight;
        const targetPosition = targetElement.offsetTop - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ========================================
  // ENHANCED SCROLL ANIMATIONS
  // ========================================
  const initScrollAnimations = () => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements that should animate on scroll
    const animateElements = document.querySelectorAll(
      '.section, .value-card, .program-card, .stat-card, .service-card, ' +
      '.feature-card, .card-modern, .grid-2 > *, .grid-3 > *, ' +
      '.section-header, .why-content, .mission-grid, .benefits-grid, ' +
      '.resource-card, .newsletter-content, .cta-content'
    );
    
    animateElements.forEach((el, index) => {
      el.classList.add('fade-in-element');
      el.style.setProperty('--animation-order', index);
      observer.observe(el);
    });
  };

  // Add keyboard navigation support
  document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Lazy load images (if any are added with data-src attribute)
  const lazyImages = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => imageObserver.observe(img));

  // Add active state to current section in navigation
  const sections = document.querySelectorAll('section[id]');
  
  window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.pageYOffset >= sectionTop - navbar.offsetHeight - 100) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });

  // ========================================
  // PERFORMANCE UTILITIES
  // ========================================
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // ========================================
  // INITIALIZE ALL FEATURES
  // ========================================
  const init = () => {
    // Create UI elements
    createProgressBar();
    createBackToTop();
    
    // Initialize animations
    initScrollAnimations();
    
    // Initialize parallax (only if not on mobile for performance)
    if (window.innerWidth > 768) {
      initParallax();
    }
    
    // Page load animation
    window.addEventListener('load', () => {
      initPageLoadAnimations();
      
      // Log performance
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      console.log('✨ HubForge loaded in ' + pageLoadTime + 'ms');
    });
  };

  // Start everything when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
