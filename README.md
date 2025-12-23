# Saikiran Reddy Jakka - Portfolio

A modern, responsive portfolio website showcasing my work in distributed systems, machine learning, and backend engineering. Built with Next.js, TypeScript, and Tailwind CSS featuring beautiful liquid glass effects.

## 🚀 Quick Deploy to GitHub Pages

### Option 1: Automated Script (Easiest)

```bash
./deploy.sh
```

This script will:
- Initialize Git repository
- Ask for your GitHub username
- Set up remote repository
- Commit and push all files
- Deploy to GitHub Pages

### Option 2: Manual Deployment

1. **Create GitHub Repository**
   - Go to GitHub and create a new repository named: `your-username.github.io`
   - Make it public

2. **Deploy Your Code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio deployment"
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
   git branch -M main
   git push -u origin main
   ```

3. **Configure GitHub Pages**
   - Go to repository Settings → Pages
   - Under "Build and deployment", select "GitHub Actions"
   - Wait 2-3 minutes for deployment

4. **Access Your Site**
   - Your portfolio will be live at: `https://your-username.github.io`

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📁 Project Structure

```
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   │   ├── sections/     # Page sections (Hero, About, Skills, etc.)
│   │   └── ui/           # Reusable UI components
│   ├── lib/              # Utility functions
│   └── hooks/            # Custom React hooks
├── public/               # Static assets
├── .github/workflows/    # GitHub Actions for deployment
└── DEPLOYMENT_GUIDE.md   # Detailed deployment instructions
```

## ✨ Features

- **Modern Design**: Clean, professional UI with liquid glass effects
- **Responsive**: Fully responsive across all devices
- **Fast**: Optimized for performance with Next.js
- **SEO Friendly**: Built-in SEO optimization
- **Dark Theme**: Beautiful dark theme design
- **Smooth Animations**: Framer Motion animations
- **Type Safe**: Built with TypeScript

## 🎨 Sections

- **Hero**: Introduction with key expertise areas
- **About**: Background and certifications
- **Skills**: Technical skills and expertise
- **Experience**: Work experience and education
- **Projects**: Major research and development projects
- **Contact**: Contact information and form

## 🔧 Technologies Used

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Radix UI
- **Deployment**: GitHub Pages / Vercel / Netlify

## 📝 Customization

To customize the portfolio with your information:

1. Update personal details in `src/components/sections/hero.tsx`
2. Modify about section in `src/components/sections/about.tsx`
3. Update skills in `src/components/sections/skills.tsx`
4. Add your experience in `src/components/sections/experience.tsx`
5. Showcase your projects in `src/components/sections/projects.tsx`
6. Update contact info in `src/components/sections/contact.tsx`

## 🌐 Alternative Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

### Netlify
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `out`

## 📄 License

This project is open source and available under the MIT License.

## 👤 Contact

- **Email**: saikiranreddy2710@gmail.com
- **Phone**: +1 (631) 820 1876
- **Location**: New York, NY

---

Built with ❤️ by Saikiran Reddy Jakka
