# GitHub Pages Deployment Guide

## Quick Deploy (5 minutes)

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Launch HubForge Global Impact Network website"

# Add your GitHub repository
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to main branch
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll to **Pages** (left sidebar)
4. Under **Source**:
   - Branch: Select **main**
   - Folder: Select **/docs**
5. Click **Save**

### Step 3: Wait for Deployment

- GitHub will build your site (takes 1-2 minutes)
- You'll see a green checkmark when ready
- Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

## Custom Domain (Optional)

### If you have a custom domain (e.g., hubforge.org):

1. **Update CNAME file**:
   - Edit `docs/CNAME`
   - Replace the content with just your domain:
     ```
     hubforge.org
     ```

2. **Configure DNS** with your domain provider:
   - Add a CNAME record pointing to: `YOUR-USERNAME.github.io`
   - Or use A records pointing to GitHub's IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

3. **Enable HTTPS**:
   - In GitHub Pages settings
   - Check "Enforce HTTPS"
   - Wait 24 hours for SSL certificate

## Alternative: Netlify or Vercel

### Deploy to Netlify:

1. Connect your GitHub repository
2. Set build settings:
   - Base directory: `docs`
   - Build command: (leave empty)
   - Publish directory: `docs`
3. Click Deploy

### Deploy to Vercel:

1. Import your GitHub repository
2. Override settings:
   - Output directory: `docs`
3. Click Deploy

## Troubleshooting

### Site not loading:
- Check that `/docs` folder is selected in GitHub Pages settings
- Verify all files are in the `docs/` directory
- Wait 2-5 minutes after enabling Pages

### CSS not loading:
- Check that paths in HTML use relative URLs (`./assets/css/style.css`)
- Verify `.nojekyll` file exists in docs folder

### Images not showing:
- Confirm images are in `docs/assets/images/`
- Check file names match exactly (case-sensitive)

### Custom domain issues:
- Verify CNAME file has only your domain (no http://)
- Check DNS propagation: use `dig yourdomain.com`
- Wait up to 48 hours for DNS to update

## Need Help?

Contact: hubforgeglobal@gmail.com

---

**Your site is now ready to inspire changemakers worldwide! 🚀**
