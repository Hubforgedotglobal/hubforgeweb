// HubForge Global Impact Network - Main JavaScript
// Mobile menu and smooth scroll functionality

(function() {
  'use strict';

  // Mobile Navigation
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      
      const isExpanded = navToggle.classList.contains('active');
      navToggle.setAttribute('aria-expanded', isExpanded);
    });

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

    // ESC key closes mobile menu
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // Smooth scrolling for anchor links
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
        
        const navHeight = navbar ? navbar.offsetHeight : 0;
        const targetPosition = targetElement.offsetTop - navHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Waitlist Counter - Auto-Update from Google Sheets with localStorage caching
  const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxnq81-qln_Ec4-jTOaoZCI13v-DcDCua_NoFR2Ic3y4ueQIOLYnSOdl5VkLbJ3MDUq/exec';
  const CACHE_KEY = 'hubforge_waitlist_cache';
  
  // Get cached values from localStorage
  const getCachedCounts = () => {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        return JSON.parse(cached);
      }
    } catch (e) {}
    return { count: 0, countries: 0 };
  };
  
  // Save values to localStorage
  const saveCachedCounts = (count, countries) => {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({ count, countries }));
    } catch (e) {}
  };
  
  // Update all member counters on the page (instant, no animation)
  const updateWaitlistCount = (count) => {
    const counters = [
      'waitlistCount', 'waitlistCountHome', 'waitlistCountBottom', 'waitlistCountHero'
    ];
    counters.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = count;
    });
  };
  
  // Update all country counters on the page (instant, no animation)
  const updateCountriesCount = (count) => {
    const counters = [
      'countriesCount', 'countriesCountBottom', 'countriesCountHome', 'countriesCountHero'
    ];
    counters.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = count;
    });
  };
  
  // Animate counter from current value to new value
  const animateCounter = (elementIds, startVal, endVal, duration = 800) => {
    if (startVal === endVal) return;
    const startTime = performance.now();
    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(startVal + (endVal - startVal) * eased);
      elementIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = currentVal;
      });
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  };
  
  // Update founding member spots remaining (10,000 - current count)
  const updateFoundingSpotsRemaining = (currentCount) => {
    const foundingSpotsElement = document.getElementById('foundingSpotsRemaining');
    if (foundingSpotsElement) {
      const FOUNDING_MEMBER_LIMIT = 10000;
      const spotsRemaining = Math.max(0, FOUNDING_MEMBER_LIMIT - currentCount);
      foundingSpotsElement.textContent = spotsRemaining.toLocaleString();
    }
  };
  
  // Load cached values instantly on page load
  const cached = getCachedCounts();
  if (cached.count > 0) {
    updateWaitlistCount(cached.count);
    updateCountriesCount(cached.countries);
    updateFoundingSpotsRemaining(cached.count);
  }
  
  // Fetch live counts from Google Sheets
  fetch(GOOGLE_APPS_SCRIPT_URL, {
    method: 'GET',
    redirect: 'follow',
    mode: 'cors'
  })
    .then(response => {
      if (!response.ok) throw new Error('Network error: ' + response.status);
      return response.json();
    })
    .then(data => {
      if (data && typeof data.count === 'number') {
        const newCount = data.count;
        const newCountries = typeof data.countries === 'number' ? data.countries : 0;
        
        // Only animate if values changed from cache
        if (newCount !== cached.count) {
          animateCounter(
            ['waitlistCount', 'waitlistCountHome', 'waitlistCountBottom', 'waitlistCountHero'],
            cached.count, newCount
          );
        }
        if (newCountries !== cached.countries) {
          animateCounter(
            ['countriesCount', 'countriesCountBottom', 'countriesCountHome', 'countriesCountHero'],
            cached.countries, newCountries
          );
        }
        
        updateFoundingSpotsRemaining(newCount);
        saveCachedCounts(newCount, newCountries);
      }
    })
    .catch(error => {
      console.error('Waitlist counter error:', error);
      // Keep showing cached values, no fallback needed
    });

})();

