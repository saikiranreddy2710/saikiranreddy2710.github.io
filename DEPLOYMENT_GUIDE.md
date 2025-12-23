# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages.

## Option 1: Deploy to GitHub Pages (Recommended - Free)

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name it: `your-username.github.io` (replace `your-username` with your actual GitHub username)
   - Example: If your username is `saikiranreddy`, name it `saikiranreddy.github.io`
4. Make it **Public**
5. **Do NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

### Step 2: Initialize Git and Push to GitHub

Open a new terminal (keep the dev server running in the other terminal) and run these commands:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial commit: Portfolio with real information"

# Add your GitHub repository as remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Set Up GitHub Actions for Automatic Deployment

The `.github/workflows/deploy.yml` file has been created for you. This will automatically deploy your site whenever you push changes.

### Step 4: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Build and deployment":
   - Source: Select "GitHub Actions"
5. Wait 2-3 minutes for the deployment to complete

### Step 5: Access Your Live Site

Your portfolio will be live at: `https://your-username.github.io`

---

## Option 2: Deploy to Vercel (Alternative - Also Free)

### Quick Deployment:

1. Go to [Vercel](https://vercel.com)
2. Sign up with your GitHub account
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"
6. Your site will be live at: `your-project.vercel.app`

---

## Option 3: Deploy to Netlify (Alternative - Also Free)

### Quick Deployment:

1. Go to [Netlify](https://netlify.com)
2. Sign up with your GitHub account
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
6. Click "Deploy"
7. Your site will be live at: `your-project.netlify.app`

---

## Updating Your Portfolio

After making changes to your portfolio:

```bash
# Add the changes
git add .

# Commit with a message
git commit -m "Update portfolio content"

# Push to GitHub
git push
```

The site will automatically rebuild and deploy (if using GitHub Actions, Vercel, or Netlify).

---

## Custom Domain (Optional)

If you want to use your own domain (e.g., `saikiranreddy.com`):

### For GitHub Pages:
1. Buy a domain from a registrar (Namecheap, GoDaddy, etc.)
2. Add a `CNAME` file to your repository with your domain name
3. Configure DNS settings in your domain registrar
4. In GitHub Settings → Pages, add your custom domain

### For Vercel/Netlify:
1. Go to your project settings
2. Add your custom domain
3. Follow the DNS configuration instructions

---

## Troubleshooting

### Images not loading:
- Make sure all image URLs are absolute paths
- Check that external images are accessible

### Site not updating:
- Check the Actions tab on GitHub for deployment status
- Clear your browser cache
- Wait a few minutes for DNS propagation

### Build errors:
- Check the build logs in GitHub Actions
- Ensure all dependencies are in package.json
- Test the build locally: `npm run build`

---

## Need Help?

- GitHub Pages Documentation: https://docs.github.com/en/pages
- Vercel Documentation: https://vercel.com/docs
- Netlify Documentation: https://docs.netlify.com
