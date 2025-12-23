# 🚀 Quick Start - Deploy Your Portfolio

## Fastest Way (2 Minutes)

### Step 1: Run the Deploy Script
```bash
./deploy.sh
```

### Step 2: Enter Your GitHub Username
When prompted, enter your GitHub username (e.g., `saikiranreddy`)

### Step 3: Configure GitHub Pages
1. Go to: `https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io`
2. Click **Settings** → **Pages**
3. Under "Build and deployment", select **GitHub Actions**

### Step 4: Wait & Access
⏳ Wait 2-3 minutes for deployment
🌐 Visit: `https://YOUR-USERNAME.github.io`

---

## Manual Method (If Script Doesn't Work)

```bash
# 1. Initialize Git
git init

# 2. Add all files
git add .

# 3. Commit
git commit -m "Deploy portfolio"

# 4. Add remote (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git

# 5. Push to GitHub
git branch -M main
git push -u origin main
```

Then follow Step 3 and 4 above.

---

## Alternative: Deploy to Vercel (Even Easier!)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Click "Deploy"
6. Done! Your site is live at `your-project.vercel.app`

---

## Need Help?

- 📖 Read full guide: `DEPLOYMENT_GUIDE.md`
- 📧 Email: saikiranreddy2710@gmail.com

---

## Troubleshooting

**"fatal: not a git repository"**
→ Run: `git init` first

**"Permission denied"**
→ Make script executable: `chmod +x deploy.sh`

**"Repository not found"**
→ Create the repository on GitHub first: `YOUR-USERNAME.github.io`

**Site not updating**
→ Check GitHub Actions tab for build status
→ Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
