# HubForge Global Impact Network

## Overview

HubForge Global Impact Network is a static website designed to showcase an organization dedicated to empowering communities, youth, and grassroots changemakers. The site focuses on democratizing access to evidence, tools, and networks for social impact worldwide. It features a SpaceX-inspired minimal design with HubForge's vibrant brand colors and is built for fast, accessible deployment on GitHub Pages. Key programs highlighted include HubForge Impact Lab, EvalAtlas, and Glocal Impact Awards.

## User Preferences

**Communication Style**: Simple, everyday language
**Design Preference**: SpaceX-inspired minimal aesthetic - clean, modern, globally credible
**Tone**: Trustworthy, inclusive, action-oriented
**Performance**: Fast, lightweight, no heavy libraries

## System Architecture

### Frontend

The website is built using pure HTML5, CSS3, and Vanilla JavaScript, with no frameworks or build tools. This ensures maximum performance, zero hosting costs (via GitHub Pages), and easy maintenance. The design philosophy emphasizes a static site architecture, mobile-first responsive design, and a SpaceX-inspired minimal aesthetic with bold typography and ample whitespace. CSS uses custom properties, mobile-first media queries, and BEM-like naming. JavaScript is vanilla ES6+, employing IIFE patterns, event delegation, and progressive enhancement. Accessibility is a core focus, with semantic HTML5, ARIA labels, WCAG 2.1 AA compliance targets, and keyboard navigation. Performance optimizations include preconnect hints, font display swap, lazy loading, and debounced scroll events.

### Content Structure

The site includes a Hero Section, Vision, Mission, "Why HubForge," Values, Programs (HubForge Impact Lab, EvalAtlas, Glocal Impact Awards), Contact, and Footer sections. Program pages feature a SpaceX-style redesign with pure black backgrounds, large headlines, and modular, responsive components.

### Deployment

The platform is GitHub Pages, leveraging its static hosting capabilities. Deployment is automatic from the `main` branch's `docs/` folder, supporting custom domains via a CNAME file. This choice prioritizes zero cost, automatic HTTPS, and a simple Git-based workflow.

### SEO and Social Media

The project integrates comprehensive meta tags, including Open Graph and Twitter Card tags, for optimal social sharing. Semantic HTML, robots.txt, sitemap.xml, and JSON-LD structured data (NGO, Service, WebApplication, Event schemas) are used to enhance search engine visibility.

## External Dependencies

**Google Fonts**: Used for typography, specifically the "Inter" typeface (weights: 300, 400, 600, 700, 800), integrated via a CDN with preconnect hints.

**Static Assets**:
- `logo.png`: HubForge HF. logo.
- `banner.png`: Brand banner for social media sharing.

**GitHub Pages**: Utilized solely for static site hosting and deployment.

The project explicitly avoids external JavaScript frameworks, CSS frameworks, third-party APIs, databases, or authentication systems to maintain its dependency-light, high-performance nature.

## Recent Changes

### October 20, 2025 - Mobile-First Hamburger Menu & Explore Sections
- **Added fully functional hamburger menu** for mobile navigation (max-width: 768px)
  - Smooth 3-line to X animation with cubic-bezier easing
  - Slide-down menu with backdrop blur and shadow
  - Auto-closes on link click or ESC key
  - 44×44px touch targets for accessibility
- **Created "Explore Our Programs" section** - Visual showcase with 3 program cards:
  - Impact Lab, EvalAtlas, and GIA 2026
  - Gradient backgrounds, hover animations, numbered badges
  - Direct links to individual program pages
- **Created "Explore Our Services" section** - Visual showcase with 3 service cards:
  - M&E Consulting, Evaluations, and Capacity Building
  - Colorful gradient accents with SVG icons
  - Smooth hover effects and transitions
- **Enhanced mobile responsiveness:**
  - Hamburger icon displays on screens ≤768px
  - Mobile menu stacks vertically with proper spacing
  - No horizontal scrolling on any device (360px-768px tested)
  - All touch targets meet WCAG 2.1 AA standards (48px min)
- **Files changed**: index.html (added 2 new sections), style.css (added hamburger animations & explore card styles)