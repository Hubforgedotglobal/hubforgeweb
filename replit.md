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

### October 20, 2025 - PDF Export & Resource Hub Enhancement
- **Added Professional PDF Export** - Download branded resource list for offline use
  - One-click PDF generation with HubForge branding (pink/purple gradient header)
  - Professional formatting with all 41 resources organized by category
  - Includes resource descriptions, URLs (clickable links), and cost/grassroots badges
  - Multi-page support with automatic pagination and page numbers
  - Footer includes hubforgeglobal.com and page count
  - Filename: `HubForge-ME-Resources-[date].pdf`
  - Uses jsPDF library for client-side generation (no server needed)

### October 20, 2025 - Resource Hub Pro Features & Final Expansion
- **Expanded M&E Resource Hub to 41 resources** with smart filtering and cost transparency
  - **New Features:**
    - Resource counts in category chips (e.g., "AI & Automation (7)")
    - Cost indicators: Free, Freemium, Paid badges on all resources
    - "✓ Grassroots Friendly" badge for accessible tools perfect for small organizations
  - **3 New Grassroots-Friendly Resources Added:**
    - CommCare - Mobile platform for community health workers
    - Orange Data Mining - Visual data analysis tool (no coding)
    - JASP - Free alternative to SPSS for statistical analysis
  - **Resource Breakdown by Cost:**
    - Free: 26 resources (65% of total)
    - Freemium: 11 resources (27.5%)
    - Paid: 3 resources (7.5%)
  - Complete category list: AI & Automation (7), Analytics & Dashboards (6), Collaboration & Planning (2), Data Collection (5), Evaluation Platforms (4), Learning Hubs (6), M&E Frameworks (2), Open Data (5), Qualitative Tools (3)

### October 20, 2025 - Resource Hub Expansion & UX Improvements
- **Expanded M&E Resource Hub to 38 resources** across 9 categories
  - **New Categories Added:**
    - Collaboration & Planning (Miro, Notion)
    - M&E Frameworks (Theory of Change Online, Logframe Lab)
  - **New Resources Added (10 total):**
    - Data Collection: Microsoft Forms
    - Evaluation Platforms: DevResults, ActivityInfo
    - Open Data: UN Data, USAID Development Experience Clearinghouse
    - Collaboration & Planning: Miro, Notion
    - M&E Frameworks: Theory of Change Online, Logframe Lab
    - Learning Hubs: Zotero
  - **UX Improvements:**
    - Changed button text from "Visit Tool" to "Visit Resource" for accuracy
    - Updated chip text from "All Tools" to "All Resources"

### October 20, 2025 - Resource Hub Launch + Mobile Menu Updates
- **Launched M&E Resource Hub** - New standalone page at `/resource-hub/`
  - 28 curated tools across 7 categories
  - Categories: Data Collection, Analytics & Dashboards, Evaluation Platforms, Qualitative Tools, AI & Automation, Open Data, Learning Hubs
  - Added AI tools: Claude, Gemini, Perplexity AI, NotebookLM (alongside ChatGPT, Colab, Hugging Face)
  - Merged Visualization into Analytics & Dashboards for better organization
  - Live search with debounced filtering (300ms)
  - Category filter chips with smooth interactions
  - Resource cards with logo display and automatic favicon fallbacks
  - Fully responsive grid layout (1-4 columns)
  - SpaceX-style dark design with HubForge branding
  - Footer matches main site (legal info, Darpan ID, SSL badge)
  - All vanilla JS - no build tools, easy to update
  - Data-driven: add resources by editing `resources.js`
- **Navigation Update:** Added "Resources" link to main menu

### October 20, 2025 - Mobile Menu, Button Improvements & Content Updates
- **Added fully functional hamburger menu** for mobile navigation (max-width: 768px)
  - Smooth 3-line to X animation with cubic-bezier easing
  - Slide-down menu with backdrop blur and shadow
  - Auto-closes on link click or ESC key
  - 44×44px touch targets for accessibility
- **Enhanced mobile responsiveness:**
  - Hamburger icon displays on screens ≤768px
  - Mobile menu stacks vertically with proper spacing
  - No horizontal scrolling on any device (360px-768px tested)
  - All touch targets meet WCAG 2.1 AA standards (48px min)
- **Added "Explore Our Services" button** in hero section
  - Matches "Explore Our Programs" button styling
  - Smooth scroll to Services section on click
- **Improved Contact section contrast:**
  - "Contact Us" button: changed to white background with dark text
  - Email address: changed to white with text shadow for better readability
- **Updated Mission section text:**
  - New message: "Every changemaker & Community deserves the knowledge, tools, and Network to lead with evidence and change the world on their own terms."
- **Files changed**: index.html (button and text updates), style.css (hamburger menu, button contrast improvements)