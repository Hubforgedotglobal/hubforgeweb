# HubForge Global Impact Network

## Overview
HubForge Global Impact Network is a static website showcasing an organization dedicated to empowering communities, youth, and grassroots changemakers by democratizing access to evidence, tools, and networks for social impact. The project aims for a global reach, featuring a SpaceX-inspired minimal design with vibrant brand colors, built for fast and accessible deployment. Key initiatives highlighted include HubForge Impact Lab, EvalAtlas (an Ecosystem & Networking Platform), and Glocal Impact Awards. The business vision is to provide a credible, inclusive, and action-oriented platform for social good.

## User Preferences
**Communication Style**: Simple, everyday language
**Design Preference**: SpaceX-inspired minimal aesthetic - clean, modern, globally credible
**Tone**: Trustworthy, inclusive, action-oriented
**Performance**: Fast, lightweight, no heavy libraries

## System Architecture

### Frontend
The website is built with pure HTML5, CSS3, and Vanilla JavaScript, ensuring maximum performance and easy maintenance without frameworks or build tools. It follows a static site architecture with a mobile-first responsive design, emphasizing a SpaceX-inspired minimal aesthetic, bold typography, and ample whitespace. CSS utilizes custom properties, mobile-first media queries, and BEM-like naming. JavaScript employs IIFE patterns, event delegation, and progressive enhancement. Accessibility is a core focus, adhering to WCAG 2.1 AA compliance targets with semantic HTML5 and ARIA labels. Performance optimizations include preconnect hints, font display swap, lazy loading, and debounced scroll events.

### Content Structure
The site includes sections such as Hero, Vision, Mission, "Why HubForge," Values, Programs (HubForge Impact Lab, EvalAtlas, Glocal Impact Awards), Contact, and Footer. Program pages feature a distinct SpaceX-style redesign with dark backgrounds and modular, responsive components. A dedicated M&E Resource Hub provides curated tools with filtering and cost transparency.

### Deployment
The platform leverages GitHub Pages for static hosting, enabling zero cost, automatic HTTPS, and a simple Git-based workflow. Deployment occurs automatically from the `main` branch's `docs/` folder, supporting custom domains via a CNAME file.

### SEO and Social Media
The project integrates comprehensive meta tags (Open Graph, Twitter Card), semantic HTML, `robots.txt`, `sitemap.xml`, and JSON-LD structured data (NGO, Service, WebApplication, Event schemas) to optimize search engine visibility and social sharing.

### UI/UX Decisions
The design consistently applies HubForge's brand colors and a minimal aesthetic inspired by SpaceX. Interactive elements like the mobile hamburger menu and resource hub filters are implemented with vanilla JavaScript for smooth user experience. Buttons and interactive components are designed with accessibility in mind, ensuring adequate touch targets and clear contrast.

## External Dependencies
- **Google Fonts**: "Inter" typeface (weights: 300, 400, 600, 700, 800) integrated via CDN.
- **Static Assets**: `logo.png` (HubForge HF logo), `banner.png` (brand banner).
- **GitHub Pages**: Used for static site hosting and deployment.
- **Tally.so**: Integrated for waitlist forms, particularly for EvalAtlas, connected to a Google Sheets backend via Google Apps Script for live counter updates.
- **Substack**: Newsletter integration for content distribution, embedded directly into the site.
- **jsPDF library**: Used for client-side generation of professional PDF exports of the M&E Resource Hub.

## Recent Changes

### November 3, 2025 - Founding Member Badge Integration
- **Added simple Founding Member Badge note** integrated with existing counters
  - **Placement**: Between counters and CTA button on both hero and bottom sections
  - **Text**: "★ First 10,000 members get a Founding Member Badge"
  - **Design**: Pink color, simple, minimal - consistent with SpaceX-inspired aesthetic
  - **Purpose**: Create exclusivity and urgency without overwhelming the page
  - **Files modified**: evalatlas.html, style.css

### November 3, 2025 - Content Refinement
- **Removed all em dashes ("—")** across the entire website, replacing with regular hyphens ("-")
  - **Files modified**: All HTML files (index.html, evalatlas.html, impact-lab.html, gia-mande.html)
  - **Rationale**: Cleaner, simpler typography per user preference
- **Revised EvalAtlas "How EvalAtlas Works" section** for inclusive stakeholder language
  - **Changed**: "If you're doing evaluation work" → "Whether you're an evaluator, NGO, tech vendor, youth professional, enumerator, or any social impact stakeholder"
  - **Updated card titles**: "Searchable Expertise, Instantly" → "Connect & Discover"
  - **Files modified**: evalatlas.html

### November 2, 2025 - EvalAtlas Positioning & Stakeholder Clarity
- **Repositioned EvalAtlas** from "directory" to **"Ecosystem & Networking Platform for Social Impact"**
  - **EvalAtlas Hero Subtitle**: "The global ecosystem & networking platform for social impact"
  - **Homepage EvalAtlas Description**: Updated to reflect ecosystem & networking platform positioning
  - **Rationale**: "Social impact" is more inclusive than "evaluation profession" given diverse stakeholders (NGOs, tech vendors, youth, enumerators, etc.)
- **Expanded stakeholder list** to explicitly include key groups
  - Added: **NGOs, tech vendors, youth, enumerators**
  - Complete list: evaluators, NGOs, tech vendors, youth, enumerators, field researchers, agencies, funders, educational institutions, VOPEs, emerging M&E professionals
  - **Purpose**: Ensure all critical stakeholders see themselves represented in EvalAtlas
- **Enhanced counter labels** for clarity across all placements
  - All counters now show: "Members Joined Waitlist" and "Countries Joined Waitlist"
  - Applied to: Homepage EvalAtlas section, EvalAtlas hero, EvalAtlas bottom CTA
  - **Files modified**: index.html, evalatlas.html

### November 2, 2025 - EvalAtlas Dual Counter Feature (Members + Countries)
- **Implemented dual waitlist counter** showing both member count and countries count side by side
  - **Backend**: Google Apps Script returns JSON with both `count` (members) and `countries` (unique country count from "Respondent's country" column)
  - **Responsive Design**: Desktop/tablet side-by-side, mobile stacks vertically
  - **Files modified**: evalatlas.html, main.js, style.css