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

  // Waitlist Counter
  // UPDATE THIS NUMBER: Change the value below to update the live count
  const WAITLIST_COUNT = 0; // <-- EDIT THIS NUMBER
  
  // Update all waitlist counters on the page
  const updateWaitlistCount = (count) => {
    const evalatlasCounter = document.getElementById('waitlistCount');
    const homeCounter = document.getElementById('waitlistCountHome');
    
    if (evalatlasCounter) {
      evalatlasCounter.textContent = count;
    }
    
    if (homeCounter) {
      homeCounter.textContent = count;
    }
  };
  
  // Initialize counter on page load
  updateWaitlistCount(WAITLIST_COUNT);

})();
