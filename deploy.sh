#!/bin/bash

echo "🚀 Portfolio Deployment Script"
echo "================================"
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing Git repository..."
    git init
    echo "✅ Git initialized"
else
    echo "✅ Git repository already exists"
fi

echo ""
echo "📝 Please enter your GitHub username:"
read github_username

echo ""
echo "🔗 Setting up remote repository..."
git remote remove origin 2>/dev/null
git remote add origin https://github.com/$github_username/$github_username.github.io.git

echo ""
echo "📦 Adding files to Git..."
git add .

echo ""
echo "💾 Committing changes..."
git commit -m "Deploy portfolio to GitHub Pages"

echo ""
echo "🚀 Pushing to GitHub..."
git branch -M main
git push -u origin main --force

echo ""
echo "✅ Deployment complete!"
echo ""
echo "🌐 Your portfolio will be live at:"
echo "   https://$github_username.github.io"
echo ""
echo "⏳ Please wait 2-3 minutes for GitHub Pages to build and deploy your site."
echo ""
echo "📋 Next steps:"
echo "   1. Go to https://github.com/$github_username/$github_username.github.io"
echo "   2. Click on 'Settings' → 'Pages'"
echo "   3. Under 'Build and deployment', select 'GitHub Actions'"
echo "   4. Wait for the deployment to complete"
echo ""
