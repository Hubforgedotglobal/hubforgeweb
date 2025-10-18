# Mobile Responsive Testing Guide

## Quick Testing Checklist

Use this checklist to verify mobile responsiveness on the HubForge website.

---

## 1. Browser DevTools Testing

### Chrome/Edge DevTools Method

1. **Open DevTools**: Press `F12` or `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Option+I` (Mac)
2. **Toggle Device Toolbar**: Click the device icon or press `Ctrl+Shift+M` (Windows/Linux) or `Cmd+Shift+M` (Mac)
3. **Select Device Presets** OR **Enter Custom Dimensions**

### Recommended Test Breakpoints

| Device | Width | Height | Test Focus |
|--------|-------|--------|------------|
| iPhone SE | 375px | 667px | Small phone portrait |
| iPhone 12/13 mini | 375px | 812px | Small phone with notch |
| Pixel 5 | 393px | 851px | Android mid-size |
| Galaxy S20 | 412px | 915px | Large Android phone |
| iPad Mini | 768px | 1024px | Tablet portrait |
| Custom - Extra Small | 360px | 640px | Minimum supported width |
| Custom - Tiny | 320px | 568px | Edge case testing |

### How to Test Custom Widths

1. In DevTools Device Toolbar, select "Responsive"
2. Manually enter width (e.g., 360px)
3. Test both portrait and landscape orientations

---

## 2. Testing on Real Devices

### Best Practices

1. **Use Incognito/Private Mode** to avoid cached CSS
   - Chrome: `Ctrl+Shift+N` (Windows/Linux) or `Cmd+Shift+N` (Mac)
   - Safari: `Cmd+Shift+N`

2. **Hard Refresh** to clear cache:
   - Desktop: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
   - Mobile Safari: Clear Safari cache in Settings
   - Mobile Chrome: Clear cache in Settings → Privacy → Clear Browsing Data

3. **Test in Multiple Browsers**:
   - iOS: Safari (primary), Chrome
   - Android: Chrome (primary), Firefox, Samsung Internet

---

## 3. What to Check on Each Page

### ✅ Navigation (All Pages)

- [ ] Hamburger menu icon is visible and tappable (minimum 44×44px)
- [ ] Tapping hamburger opens/closes menu smoothly
- [ ] Menu items are large enough to tap (minimum 48px height)
- [ ] Menu doesn't overlap with content
- [ ] Logo and brand name fit on one line or wrap gracefully
- [ ] ESC key closes mobile menu (desktop/tablet testing)

### ✅ Hero Section

- [ ] Title text doesn't overflow or break awkwardly
- [ ] Text is readable (not too small)
- [ ] CTA buttons are visible without scrolling
- [ ] Buttons are full-width on small screens
- [ ] Background gradients/images display correctly
- [ ] No horizontal scrollbar appears

### ✅ Content Sections

- [ ] All grids collapse to single column on phones
- [ ] Cards have adequate spacing between them
- [ ] Text remains readable (not too small, not overflowing)
- [ ] Section padding looks balanced (not too cramped, not excessive)
- [ ] Icons/images scale properly

### ✅ Buttons & Links

- [ ] All buttons are easy to tap (minimum 48px height)
- [ ] Button text doesn't overflow
- [ ] Hover/active states work (or appropriate touch feedback)
- [ ] Links have adequate spacing for finger taps
- [ ] No buttons extend beyond screen edges

### ✅ Typography

- [ ] All text is readable at the device's default zoom
- [ ] Long words break properly (no horizontal overflow)
- [ ] Line heights provide comfortable reading
- [ ] Font sizes scale appropriately for screen size
- [ ] No text is cut off or hidden

### ✅ Layout & Spacing

- [ ] No horizontal scroll on any page
- [ ] Content fits comfortably within viewport
- [ ] Margins and padding look balanced
- [ ] White space enhances readability
- [ ] Elements don't overlap or stick together

### ✅ Images & Media

- [ ] Logo displays at appropriate size
- [ ] Images don't exceed viewport width
- [ ] Images maintain aspect ratio
- [ ] No broken image links

### ✅ Forms (if applicable)

- [ ] Input fields are full-width on mobile
- [ ] Touch targets are large enough (48px minimum)
- [ ] Labels are clearly visible
- [ ] Submit buttons are prominent and tappable
- [ ] Keyboard appears when tapping inputs

---

## 4. Page-Specific Checklist

### Homepage (`index.html`)

- [ ] Hero section displays properly
- [ ] Vision section (dark background) is readable
- [ ] Programs grid stacks into single column
- [ ] Values cards display correctly
- [ ] Contact section CTAs are accessible
- [ ] Footer links are tappable

### Impact Lab (`impact-lab.html`)

- [ ] Page hero with large title displays well
- [ ] "What We Do" cards stack properly
- [ ] "How It Works" process items are readable
- [ ] CTA section buttons are full-width on mobile

### EvalAtlas (`evalatlas.html`)

- [ ] Hero section fits on screen
- [ ] "The Problem" and "The Vision" sections are readable
- [ ] Features grid (4 items) collapses to single column
- [ ] "Who This Is For" grid (8 items) stacks properly
- [ ] "Coming Soon" CTA is prominent

### Glocal Impact Awards (`gia-mande.html`)

- [ ] 2026 branding displays clearly
- [ ] "Who We Celebrate" 4-card grid stacks
- [ ] "Why This Matters" 4-card grid stacks
- [ ] "Co-Create" 3-step process displays well
- [ ] "Partner With Us" button is accessible

---

## 5. Landscape Orientation Testing

### Test These Scenarios

1. **Small Phone Landscape** (e.g., iPhone SE rotated)
   - Width: 667px × Height: 375px
   - Check: Hero doesn't take up entire viewport
   - Check: Navigation is accessible

2. **Large Phone Landscape** (e.g., iPhone 12 rotated)
   - Width: 844px × Height: 390px
   - Check: Content adapts to wide, short viewport

---

## 6. Accessibility Testing on Mobile

### Keyboard Navigation (Bluetooth Keyboard on Mobile)

- [ ] Tab key cycles through links and buttons
- [ ] Enter key activates links and buttons
- [ ] ESC key closes mobile menu
- [ ] Focus indicators are visible (lime green outline)

### Screen Reader Testing

- [ ] VoiceOver (iOS) reads navigation correctly
- [ ] TalkBack (Android) announces buttons and links
- [ ] ARIA labels are announced properly

### Touch Targets

- [ ] All buttons ≥ 48×48px (WCAG 2.1 AA)
- [ ] Links have adequate spacing (no accidental taps)
- [ ] Hamburger menu ≥ 44×44px

---

## 7. Performance Testing on Mobile

### Check Page Load

- [ ] Page loads in < 3 seconds on 3G
- [ ] No layout shift during load
- [ ] Images load progressively (if lazy loading enabled)

### Check Smoothness

- [ ] Scrolling is smooth (60fps)
- [ ] Transitions don't lag
- [ ] Menu animations are fluid

---

## 8. Common Issues to Watch For

### ❌ Problems to Fix

- **Horizontal scroll**: Any element wider than viewport
- **Overlapping text**: Text colliding with other elements
- **Tiny text**: Font sizes below 14px on mobile
- **Small touch targets**: Buttons/links smaller than 44×44px
- **Cut-off content**: Text or images hidden outside viewport
- **Broken layout**: Grids not collapsing properly
- **Slow performance**: Lag or jank during scrolling/transitions

---

## 9. Quick Test Commands (Development)

### Test Locally

```bash
# Serve the site
python -m http.server 5000 --directory docs

# Open in browser
# Navigate to: http://localhost:5000
```

### Test with ngrok (Test on Real Device via URL)

```bash
# Install ngrok if needed, then:
ngrok http 5000

# Copy the HTTPS URL and open on mobile device
```

---

## 10. Automated Testing Tools (Optional)

### Lighthouse Mobile Audit

1. Open Chrome DevTools
2. Go to "Lighthouse" tab
3. Select "Mobile" device
4. Run audit
5. Check: Performance, Accessibility, Best Practices scores

### Responsive Design Checker Tools

- **Responsinator**: http://www.responsinator.com/
- **BrowserStack**: Live device testing
- **LambdaTest**: Cross-browser mobile testing

---

## Test Results Log

Use this template to log your test results:

```markdown
## Test Session: [Date]

**Tester**: [Your Name]
**Browser**: [Chrome 120 / Safari 17 / etc.]
**Device/Emulator**: [iPhone 12 / DevTools Responsive / etc.]

### Homepage
- [ ] ✅ Navigation works
- [ ] ✅ Hero displays correctly
- [ ] ✅ No horizontal scroll
- [ ] ❌ Issue: [Describe any problems found]

### Impact Lab
- [ ] ✅ All sections responsive
- [ ] ❌ Issue: [Describe any problems found]

[Repeat for other pages]

### Overall Status
- **Pass**: All critical tests passed
- **Minor Issues**: [List minor issues]
- **Blocking Issues**: [List blocking issues]
```

---

## Quick Reference: CSS Breakpoints Used

```css
/* Extra Small Phones */
@media screen and (max-width: 360px) { }

/* Small Phones */
@media screen and (min-width: 361px) and (max-width: 425px) { }

/* Large Phones / Small Tablets */
@media screen and (min-width: 426px) and (max-width: 768px) { }

/* Tablets and Up */
@media screen and (min-width: 769px) { }

/* Landscape Phones */
@media screen and (max-height: 500px) and (orientation: landscape) { }
```

---

## Support

If you find issues during testing:

1. Note the exact device/browser/width
2. Take a screenshot
3. Describe the expected vs. actual behavior
4. Check if it's a caching issue (hard refresh)
5. File an issue with details

---

**Last Updated**: October 18, 2025
