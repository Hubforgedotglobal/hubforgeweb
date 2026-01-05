# HubForge Global Impact Network

## Overview
HubForge Global Impact Network is a static website that aims to empower communities, youth, and grassroots changemakers by providing access to evidence, tools, and networks for social impact. It features a SpaceX-inspired minimal design with vibrant brand colors, optimized for fast and accessible deployment. The platform showcases initiatives like HubForge Impact Lab, EvalAtlas (an Ecosystem & Networking Platform), and Glocal Impact Awards, striving to be a credible, inclusive, and action-oriented platform for social good with global reach.

## User Preferences
**Communication Style**: Simple, everyday language
**Design Preference**: SpaceX-inspired minimal aesthetic - clean, modern, globally credible
**Tone**: Trustworthy, inclusive, action-oriented
**Performance**: Fast, lightweight, no heavy libraries
**Navigation Philosophy**: Keep to 5 items max (YC principles - reduce cognitive load)
**Hero Design**: Communicate value in 5 seconds, single CTA only

## Recent Changes (Jan 2026)
- **YC-Style Homepage Revamp**: Simplified hero headline to "Evidence tools for changemakers" (4 words)
- **Single CTA**: Reduced from 3 buttons to 1 "Explore Programs" button
- **Social Proof**: Removed from hero for cleaner design (kept on EvalAtlas page)
- **Streamlined Navigation**: Reduced from 8 to 5 items (About, Programs, Resources, EvalQR, Get Involved)
- **Removed from Nav**: Services, Values, Blog links moved off main nav for cleaner experience

## System Architecture

### Frontend
The website is built using pure HTML5, CSS3, and Vanilla JavaScript, ensuring high performance and maintainability without external frameworks. It follows a static site architecture with a mobile-first responsive design, emphasizing a minimal aesthetic, bold typography, and ample whitespace. CSS uses custom properties, mobile-first media queries, and BEM-like naming. JavaScript employs IIFE patterns, event delegation, and progressive enhancement. Accessibility adheres to WCAG 2.1 AA compliance with semantic HTML5 and ARIA labels. Performance optimizations include preconnect hints, font display swap, lazy loading, and debounced scroll events.

### Content Structure
The site includes sections such as Hero, Vision, Mission, "Why HubForge," Values, Programs (HubForge Impact Lab, EvalAtlas, Glocal Impact Awards), Contact, and Footer. Program pages feature a distinct SpaceX-style redesign with dark backgrounds and modular components. A dedicated M&E Resource Hub provides curated tools with filtering. An Impact Jobs Hub offers a crowdsourced job board for M&E, research, tech, and social impact opportunities with auto-publishing and expiration, leveraging a Google Sheets backend via Google Apps Script for live data. Navigation includes a link to EvalQR, a separate Replit-hosted QR analytics platform (https://evalqrapp.com/) built for NGOs and evaluators.

### Deployment
The platform utilizes GitHub Pages for static hosting, offering zero cost, automatic HTTPS, and a Git-based workflow. Deployment is automated from the `main` branch's `docs/` folder, supporting custom domains.

### SEO and Social Media
Comprehensive meta tags (Open Graph, Twitter Card), semantic HTML, `robots.txt`, `sitemap.xml`, and JSON-LD structured data (NGO, Service, WebApplication, Event schemas) are integrated to optimize search engine visibility and social sharing.

### UI/UX Decisions
The design consistently uses HubForge's brand colors and a SpaceX-inspired minimal aesthetic. Interactive elements like the mobile hamburger menu and resource hub filters are implemented with vanilla JavaScript. Buttons and interactive components are designed for accessibility, ensuring adequate touch targets and clear contrast.

## External Dependencies
- **Google Fonts**: "Inter" typeface (weights: 300, 400, 600, 700, 800) via CDN.
- **Static Assets**: `logo.png`, `banner.png`.
- **GitHub Pages**: For static site hosting and deployment.
- **Tally.so**: Integrated for waitlist forms (e.g., EvalAtlas) and job submission forms, connected to a Google Sheets backend via Google Apps Script for data management and live updates.
- **Substack**: Newsletter integration.
- **jsPDF library**: For client-side generation of PDF exports from the M&E Resource Hub.
- **EvalQR Platform**: External Replit-hosted QR code and link analytics platform (https://evalqrapp.com/) built for NGOs, evaluators, and social enterprises. Linked from all site navigation menus as a complementary tool in the HubForge ecosystem.