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

### November 11, 2025 - "Who This Is For" Section Improvements
- **Enhanced tabular design with branded colors**
  - Pink → Purple gradient borders on all feature boxes
  - Pink → Lime gradient borders on hover
  - Light gray background (#fafafa) with rounded corners
  - Hover effects: lift animation, white background, pink glow shadow
- **Improved text formatting and content**
  - Titles now use pink/purple gradient color
  - Added bold action phrases at start of each description ("Showcase your expertise", "Build your presence", etc.)
  - Shortened and clarified content for better scannability
  - Improved line height and spacing for readability
- **Purpose**: Create structured, table-like appearance with HubForge branding
- **Files modified**: evalatlas.html, assets/css/style.css

### November 11, 2025 - EvalAtlas Visual Enhancements
- **Added subtle counter animations** to enhance visual appeal
  - **Count-up animation**: Numbers fade in and slide up smoothly when page loads
  - **Subtle box glow**: Entire counter card has gentle "breathing" glow animation
  - **Improved spacing**: Added more breathing room (2.5rem top padding, 1rem gap between number and label)
  - **Design**: Minimal, SpaceX-inspired - doesn't distract from content
- **Distinguished hero and problem sections** on EvalAtlas page
  - **Hero section**: Pure black background (#000000)
  - **Problem section**: Slightly lighter background (#0a0a0a) with subtle top border
  - **Purpose**: Visual separation between sections that previously blended together
  - **Files modified**: assets/css/style.css

### November 7, 2025 - Resource Hub Visitor Counter
- **Added live visitor counter** to M&E Resource Hub page
  - **Display**: Shows "X+ visitors explored this hub" with 👥 icon above the page title
  - **Design**: Minimal pill badge with pink number, SpaceX-inspired
  - **Tracking**: Built-in localStorage counter (starts at 1,250) that increments on unique visits (24hr window)
  - **Upgradeable**: Ready to connect to Google Apps Script for real cross-device tracking
  - **Purpose**: Show social proof and engagement on the resource hub
  - **Files modified**: resource-hub/index.html

### November 7, 2025 - Resource Hub Filter Compacting
- **Made category filter chips more compact** in M&E Resource Hub
  - **Reduced padding**: 0.75rem 1.5rem → 0.4rem 0.85rem (smaller chips)
  - **Reduced gaps**: 0.75rem → 0.4rem (tighter spacing between chips)
  - **Smaller font**: 0.875rem → 0.75rem (more compact text)
  - **Reduced height**: 44px → 32px min-height (less vertical space)
  - **Reduced margin**: 3rem → 1.5rem bottom margin (less spacing below filters)
  - **Added max-width**: 900px to contain chips better
  - **Purpose**: Reduce vertical space taken by filter chips, improve page efficiency
  - **Files modified**: resource-hub/index.html

### November 7, 2025 - Not for Profit Organization Footer Mentions
- **Added subtle "Not for Profit" mentions** in homepage footer only
  - **Footer About Section**: Changed "mission-driven organization" to "not-for-profit organization"
  - **Footer Legal Section**: Added "Not for Profit organization" before "(Section 8 Company)"
  - **Purpose**: Let visitors know HubForge is a not-for-profit without heavy focus
  - **Placement**: Only in footer - subtle and credible positioning
  - **Files modified**: index.html

### November 3, 2025 - Founding Member Badge Integration
- **Added simple Founding Member Badge note** integrated with existing counters
  - **Placement**: Between counters and map on both hero and bottom sections
  - **Text**: "★ First 10,000 members get a Founding Member Badge"
  - **Design**: Pink color, simple, minimal - consistent with SpaceX-inspired aesthetic
  - **Purpose**: Create exclusivity and urgency without overwhelming the page
  - **Files modified**: evalatlas.html, style.css, main.js

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