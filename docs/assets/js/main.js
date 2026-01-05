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

  // Waitlist Counter - Auto-Update from Google Sheets
  const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxnq81-qln_Ec4-jTOaoZCI13v-DcDCua_NoFR2Ic3y4ueQIOLYnSOdl5VkLbJ3MDUq/exec';
  
  // Update all member counters on the page
  const updateWaitlistCount = (count) => {
    const counters = [
      'waitlistCount', 'waitlistCountHome', 'waitlistCountBottom', 'waitlistCountHero'
    ];
    counters.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = count;
    });
  };
  
  // Update all country counters on the page
  const updateCountriesCount = (count) => {
    const counters = [
      'countriesCount', 'countriesCountBottom', 'countriesCountHome', 'countriesCountHero'
    ];
    counters.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = count;
    });
  };
  
  // Update founding member spots remaining (10,000 - current count)
  const updateFoundingSpotsRemaining = (currentCount) => {
    const foundingSpotsElement = document.getElementById('foundingSpotsRemaining');
    
    if (foundingSpotsElement) {
      const FOUNDING_MEMBER_LIMIT = 10000;
      const spotsRemaining = Math.max(0, FOUNDING_MEMBER_LIMIT - currentCount);
      
      // Format number with commas
      const formattedSpots = spotsRemaining.toLocaleString();
      foundingSpotsElement.textContent = formattedSpots;
    }
  };
  
  // Fetch live counts from Google Sheets with better error handling
  fetch(GOOGLE_APPS_SCRIPT_URL, {
    method: 'GET',
    redirect: 'follow',
    mode: 'cors'
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.status);
      }
      return response.json();
    })
    .then(data => {
      if (data && typeof data.count === 'number') {
        updateWaitlistCount(data.count);
        updateFoundingSpotsRemaining(data.count);
        // Update countries count if available
        if (typeof data.countries === 'number') {
          updateCountriesCount(data.countries);
        } else {
          updateCountriesCount(0); // Fallback until Google Script is updated
        }
      } else {
        console.error('Invalid data format:', data);
        updateWaitlistCount(2); // Use last known count
        updateCountriesCount(0);
        updateFoundingSpotsRemaining(2);
      }
    })
    .catch(error => {
      console.error('Waitlist counter error:', error);
      updateWaitlistCount(2); // Use last known count as fallback
      updateCountriesCount(0);
      updateFoundingSpotsRemaining(2);
    });

  // Typing Effect for Hero Headline
  const typedTextElement = document.querySelector('.typed-text');
  const cursorElement = document.querySelector('.cursor');
  
  if (typedTextElement) {
    const textLines = ['Build evidence.', 'Drive change.'];
    let lineIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentText = '';
    const typingSpeed = 80;
    const deletingSpeed = 40;
    const pauseBetweenLines = 1500;
    const pauseAfterComplete = 3000;
    
    function type() {
      const currentLine = textLines[lineIndex];
      
      if (!isDeleting) {
        currentText = currentLine.substring(0, charIndex + 1);
        charIndex++;
        
        if (lineIndex === 0) {
          typedTextElement.innerHTML = currentText;
        } else {
          typedTextElement.innerHTML = textLines[0] + '<br>' + currentText;
        }
        
        if (charIndex === currentLine.length) {
          if (lineIndex < textLines.length - 1) {
            setTimeout(() => {
              lineIndex++;
              charIndex = 0;
              type();
            }, pauseBetweenLines);
          } else {
            cursorElement.style.animation = 'blink 1s infinite';
          }
          return;
        }
      }
      
      setTimeout(type, typingSpeed);
    }
    
    setTimeout(type, 500);
  }

})();
