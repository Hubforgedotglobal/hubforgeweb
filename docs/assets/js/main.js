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
    const evalatlasCounter = document.getElementById('waitlistCount');
    const homeCounter = document.getElementById('waitlistCountHome');
    const bottomCounter = document.getElementById('waitlistCountBottom');
    
    if (evalatlasCounter) {
      evalatlasCounter.textContent = count;
    }
    
    if (homeCounter) {
      homeCounter.textContent = count;
    }
    
    if (bottomCounter) {
      bottomCounter.textContent = count;
    }
  };
  
  // Update all country counters on the page
  const updateCountriesCount = (count) => {
    const evalatlasCountriesCounter = document.getElementById('countriesCount');
    const bottomCountriesCounter = document.getElementById('countriesCountBottom');
    const homeCountriesCounter = document.getElementById('countriesCountHome');
    
    if (evalatlasCountriesCounter) {
      evalatlasCountriesCounter.textContent = count;
    }
    
    if (bottomCountriesCounter) {
      bottomCountriesCounter.textContent = count;
    }
    
    if (homeCountriesCounter) {
      homeCountriesCounter.textContent = count;
    }
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
  
  // Update global map with countries that have joined
  const updateGlobalMap = (countryList) => {
    if (!countryList || countryList.length === 0) return;
    
    // Country name to ISO code mapping
    const countryMapping = {
      'United States': 'US',
      'United Kingdom': 'GB',
      'Canada': 'CA',
      'Australia': 'AU',
      'India': 'IN',
      'Germany': 'DE',
      'France': 'FR',
      'Brazil': 'BR',
      'Mexico': 'MX',
      'Spain': 'ES',
      'Italy': 'IT',
      'Netherlands': 'NL',
      'Sweden': 'SE',
      'Poland': 'PL',
      'South Africa': 'ZA',
      'Kenya': 'KE',
      'Nigeria': 'NG',
      'Egypt': 'EG',
      'Ethiopia': 'ET',
      'Tanzania': 'TZ',
      'Uganda': 'UG',
      'China': 'CN',
      'Japan': 'JP',
      'Indonesia': 'ID',
      'Pakistan': 'PK',
      'Bangladesh': 'BD',
      'Philippines': 'PH',
      'Vietnam': 'VN',
      'Thailand': 'TH',
      'Malaysia': 'MY',
      'Saudi Arabia': 'SA',
      'United Arab Emirates': 'AE',
      'Israel': 'IL',
      'Argentina': 'AR',
      'Colombia': 'CO',
      'Chile': 'CL',
      'Peru': 'PE',
      'New Zealand': 'NZ'
    };
    
    // Color each country that has joined
    countryList.forEach(countryName => {
      const isoCode = countryMapping[countryName];
      if (isoCode) {
        const countryElement = document.getElementById(isoCode);
        if (countryElement) {
          countryElement.classList.add('joined');
        }
      }
    });
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
        // Update global map if country list is available
        if (data.countryList && Array.isArray(data.countryList)) {
          updateGlobalMap(data.countryList);
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

})();
