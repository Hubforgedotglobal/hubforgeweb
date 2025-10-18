# HubForge Global Impact Network

**Where social insights shape a better tomorrow**

A modern, responsive static website for HubForge Global Impact Network - reimagining how the world builds and shares evidence for change.

## 🌟 Features

- **Modern Design**: Clean aesthetic with gradients, smooth animations, and hover effects
- **Vibrant Brand Colors**: Dynamic color palette with coral, pink, lime, yellow, and purple
- **Fully Responsive**: Mobile-first design that works beautifully on all devices
- **Accessibility-First**: WCAG 2.1 AA compliant with semantic HTML and ARIA labels
- **Performance Optimized**: Fast loading times with minimal dependencies
- **SEO Ready**: Comprehensive meta tags for search engines and social media
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
1. **Hero**: Vision statement - "Reimagining how the world builds and shares evidence for change"
2. **Vision**: Our aspirations for a just and thriving world
3. **Mission**: How we nurture globally connected ecosystems
4. **Why HubForge**: Our purpose and commitment
5. **Values**: Five core principles that guide our work
6. **Programs**: Three flagship programs with detailed pages
7. **Services**: M&E Consulting, Evaluations, and Capacity Building
8. **Contact**: Get involved and connect with us
9. **About**: Organizational information with registration details

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

The site is **fully mobile-first** and optimized for devices from 320px to desktop:

### Responsive Features
- **Comprehensive breakpoints**: 360px, 375px, 412px, 425px, 768px, 1024px+
- **Hamburger navigation menu** with 44×44px touch targets
- **Touch-friendly buttons** (minimum 48px height - WCAG 2.1 AA)
- **Responsive images** that scale to viewport
- **Optimized typography** that scales appropriately for each screen size
- **Fast loading times** with minimal dependencies
- **No horizontal scroll** on any device
- **Landscape mode support** for phones

### Mobile Testing

For comprehensive mobile testing instructions, see **[TESTING.md](docs/TESTING.md)**

#### Quick Test Checklist

Test the site on these common breakpoints:

```bash
# Start local server
python -m http.server 5000 --directory docs
```

Then in Chrome DevTools (F12 → Toggle Device Toolbar):
- ✅ 360px (Galaxy S series)
- ✅ 375px (iPhone X/11/12 mini)
- ✅ 412px (Pixel 5)
- ✅ 768px (iPad portrait)

**Important**: Use **Incognito mode** and **hard refresh** (Ctrl+Shift+R) to see latest changes.

#### What to Verify
- [ ] No horizontal scrollbar on any page
- [ ] All navigation links are tappable (48px min height)
- [ ] Text is readable (no overflow or tiny fonts)
- [ ] Buttons are full-width on small screens
- [ ] Cards and grids collapse to single column
- [ ] Images don't exceed viewport width

## ♿ Accessibility

Built with accessibility in mind:
- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Alt text for images
- High contrast ratios

## 🔍 SEO & SSL Verification

### SEO Optimization

The website is fully optimized for search engines with:

#### Meta Tags & Structured Data
- ✅ **Canonical URLs** on all pages
- ✅ **Robots meta tags** (`index, follow`)
- ✅ **Open Graph tags** for Facebook/LinkedIn sharing
- ✅ **Twitter Card tags** for Twitter sharing
- ✅ **JSON-LD structured data** (Schema.org NGO markup)
- ✅ **Comprehensive descriptions** and keywords

#### SEO Files
- ✅ **robots.txt** - Allows all search engines, references sitemap
- ✅ **sitemap.xml** - Lists all pages for search engine crawling

#### Example Meta Block (Reusable for New Pages)

```html
<!-- SEO Meta Tags -->
<meta name="description" content="Your page description here (150-160 characters)">
<meta name="keywords" content="keyword1, keyword2, keyword3">
<meta name="author" content="HubForge Global Impact Network">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://www.hubforgeglobal.com/your-page.html">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://www.hubforgeglobal.com/your-page.html">
<meta property="og:title" content="Your Page Title — HubForge">
<meta property="og:description" content="Your page description">
<meta property="og:image" content="https://www.hubforgeglobal.com/assets/images/banner.png">
<meta property="og:site_name" content="HubForge Global Impact Network">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="https://www.hubforgeglobal.com/your-page.html">
<meta name="twitter:title" content="Your Page Title — HubForge">
<meta name="twitter:description" content="Your page description">
<meta name="twitter:image" content="https://www.hubforgeglobal.com/assets/images/banner.png">
```

### SSL/HTTPS Security

✅ **GitHub Pages automatically provides SSL/HTTPS** for all custom domains
✅ **All assets use relative paths** - compatible with HTTPS
✅ **SSL badge displayed** in footer: "🔒 Secured by GitHub Pages (SSL Certified)"
✅ **No mixed content warnings** - all resources load securely

### Search Engine Verification

#### Add Your Site to Google Search Console

1. **Go to**: [Google Search Console](https://search.google.com/search-console)
2. **Add Property**: Enter `https://www.hubforgeglobal.com`
3. **Verify Domain Ownership** via one of these methods:

   **Option A: DNS TXT Record** (Recommended for custom domains)
   ```
   1. Google will provide a TXT record like: google-site-verification=ABC123...
   2. Add this TXT record to your DNS settings at your domain registrar
   3. Wait 15-30 minutes for DNS propagation
   4. Click "Verify" in Google Search Console
   ```

   **Option B: HTML File Upload**
   ```
   1. Download the verification HTML file from Google
   2. Upload to docs/ folder in your repo
   3. Push to GitHub
   4. Click "Verify" in Google Search Console
   ```

4. **Submit Sitemap**:
   - In Google Search Console, go to **Sitemaps**
   - Enter: `https://www.hubforgeglobal.com/sitemap.xml`
   - Click **Submit**

#### Add Your Site to Bing Webmaster Tools

1. **Go to**: [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. **Add Your Site**: Enter `https://www.hubforgeglobal.com`
3. **Verify Domain** via one of these methods:

   **Option A: Import from Google Search Console** (Easiest)
   ```
   - Click "Import from Google Search Console"
   - Sign in with your Google account
   - Bing will automatically verify
   ```

   **Option B: DNS TXT Record**
   ```
   - Add the TXT record Bing provides to your DNS settings
   - Wait for DNS propagation
   - Click "Verify"
   ```

4. **Submit Sitemap**:
   - Go to **Sitemaps** section
   - Enter: `https://www.hubforgeglobal.com/sitemap.xml`
   - Click **Submit**

#### Verify SSL Certificate

To confirm your site is properly secured:

1. **Visit**: https://www.hubforgeglobal.com
2. **Check for padlock icon** 🔒 in browser address bar
3. **Click the padlock** → View certificate details
4. **Verify**: Certificate is issued by "Let's Encrypt" or GitHub

**Or use SSL testing tools**:
- [SSL Labs](https://www.ssllabs.com/ssltest/) - Enter your domain for detailed analysis
- [Why No Padlock](https://www.whynopadlock.com/) - Check for mixed content issues

### Reindexing After Updates

When you make significant content changes:

1. **Google Search Console**:
   - Go to **URL Inspection**
   - Enter the updated URL
   - Click **Request Indexing**

2. **Bing Webmaster Tools**:
   - Go to **URL Submission**
   - Enter updated URLs (up to 10,000/day)
   - Click **Submit**

3. **Resubmit Sitemap** (if pages added/removed):
   - Update `lastmod` date in sitemap.xml
   - Resubmit sitemap in both consoles

### SEO Best Practices

- ✅ Update meta descriptions to be unique for each page
- ✅ Use descriptive, keyword-rich page titles
- ✅ Keep URLs short and descriptive
- ✅ Add alt text to all images
- ✅ Use semantic HTML (h1, h2, nav, etc.)
- ✅ Ensure fast page load times (<3 seconds)
- ✅ Make sure all internal links work
- ✅ Create quality content that answers user questions

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
