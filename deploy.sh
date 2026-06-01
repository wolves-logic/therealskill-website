#!/bin/bash
echo "🚀 Deploying TheRealSkill.com..."
git add .
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
git commit -m "update: auto-deploy $TIMESTAMP"
git push origin main
echo "✅ Pushed to GitHub! Vercel will auto-deploy in ~60 seconds."
echo "🌐 Live at: https://therealskill.com"
