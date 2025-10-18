# HubForge Global Impact Network

**Where social insights shape a better tomorrow**

A modern, responsive static website for HubForge Global Impact Network - reimagining how the world builds and shares evidence for change.

## 🌟 Features

- **Modern SpaceX-inspired Design**: Clean, minimal aesthetic with bold typography and smooth animations
- **Fully Responsive**: Mobile-first design that works beautifully on all devices
- **Accessibility-First**: WCAG 2.1 AA compliant with semantic HTML and ARIA labels
- **Performance Optimized**: Fast loading times with minimal dependencies
- **SEO Ready**: Comprehensive meta tags for search engines and social sharing
- **GitHub Pages Ready**: Zero-configuration deployment

## 🚀 Quick Start

### View Locally

1. Clone this repository
2. Open `docs/index.html` in your browser

Or use a local server (recommended):

```bash
# Using Python 3
python -m http.server 5000 --directory docs

# Using Node.js (with http-server)
npx http-server docs -p 5000

# Using PHP
php -S localhost:5000 -t docs
```

Then visit: `http://localhost:5000`

## 📦 Deployment to GitHub Pages

### Method 1: Using the docs/ folder (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit: HubForge Global Impact Network website"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** > **Pages**
   - Under "Source", select **Deploy from a branch**
   - Under "Branch", select **main** and **/docs** folder
   - Click **Save**

3. **Your site will be live** at:
   ```
   https://[your-username].github.io/[repository-name]/
   ```

### Method 2: Using gh-pages branch

1. **Install gh-pages** (if using Node.js):
   ```bash
   npm install -g gh-pages
   ```

2. **Deploy**:
   ```bash
   gh-pages -d docs
   ```

3. **Enable GitHub Pages**:
   - Go to Settings > Pages
   - Select **gh-pages** branch
   - Click Save

## 📁 Project Structure

```
hubforge-website/
├── docs/                      # GitHub Pages source folder
│   ├── index.html            # Main HTML file
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css     # Custom styles with brand colors
│   │   ├── js/
│   │   │   └── main.js       # Interactive features
│   │   └── images/
│   │       ├── logo.png      # HubForge logo
│   │       └── banner.png    # Brand banner
└── README.md                  # This file
```

## 🎨 Brand Colors

The site uses HubForge's vibrant brand palette:

- **Coral Red**: `#FF6B6B`
- **Pink/Magenta**: `#E94BC4`
- **Lime Green**: `#A8E86D`
- **Yellow**: `#FFD93D`
- **Purple**: `#7B68EE`
- **Dark**: `#1a1a1a`

## ✨ Sections

### Homepage:
1. **Hero**: Vision statement with Section 8 Non-Profit badge
2. **Vision**: Our aspirations for a just and thriving world
3. **Mission**: How we nurture globally connected ecosystems
4. **Services**: M&E Consulting, Evaluations, Trainings & Workshops
5. **Why HubForge**: Our purpose and commitment
6. **Values**: Five core principles that guide our work
7. **Programs**: Three flagship programs with detailed pages
8. **Contact**: Get involved and connect with us

### Program Pages:
Each program has its own dedicated page with detailed information:
- **Impact Lab** (impact-lab.html): Volunteer-driven MERL support
- **EvalAtlas** (evalatlas.html): Global evaluation directory
- **GIA-M&E Awards** (gia-mande.html): Recognition for grassroots champions

## 🛠️ Customization

### Update Content

Edit `docs/index.html` to modify:
- Text content
- Program descriptions
- Contact information

### Modify Styles

Edit `docs/assets/css/style.css` to change:
- Colors (see CSS variables at the top)
- Fonts and typography
- Layout and spacing
- Animations

### Add Features

Edit `docs/assets/js/main.js` to add:
- Interactive elements
- Form validation
- Analytics tracking
- Custom animations

## 📱 Mobile Optimization

The site is optimized for mobile devices with:
- Hamburger navigation menu
- Touch-friendly buttons and links
- Responsive images
- Optimized font sizes
- Fast loading times

## ♿ Accessibility

Built with accessibility in mind:
- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Alt text for images
- High contrast ratios

## 🔍 SEO & Social Sharing

Includes comprehensive meta tags:
- Description and keywords
- Open Graph tags (Facebook)
- Twitter Card tags
- Favicon support

## 📊 Performance

Optimized for speed:
- No heavy frameworks (vanilla JS)
- Minimal CSS/JS footprint
- Lazy loading support
- Optimized images
- Fast initial load (<50KB)

## 📧 Contact

**Email**: hubforgeglobal@gmail.com

## 📄 License

© 2025 HubForge Global Impact Network. All rights reserved.

---

**Built with ❤️ for changemakers worldwide**

*Reimagining how the world builds and shares evidence for change.*
