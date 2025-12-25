---
description: How to deploy frontend updates to Vercel
---

# Frontend Deployment Workflow

## Pre-Deployment Checklist
// turbo-all

1. Verify correct git remote:
```bash
cd d:\Graphology\Master Software\Eduecosystem\frontend
git remote -v
```
- Should show: `https://github.com/Ktej255/eduecosystem-frontend.git`
- If it shows `edueco-frontend-only`, run:
```bash
git remote set-url origin https://github.com/Ktej255/eduecosystem-frontend.git
```

2. Test locally before pushing:
```bash
npm run build
```
- Must complete without errors

3. Commit and push:
```bash
git add .
git commit -m "Description of changes"
git push origin main
```

4. Verify Vercel deployment:
- Go to https://vercel.com/dashboard
- Find `eduecosystem-frontend` project
- Check build status (should show commit message)
- If build fails, check "Build Logs" for errors

## Common Issues

### "Root Directory does not exist"
- Go to Vercel Project → Settings → General → Root Directory
- Set to empty (blank) for this project
- Redeploy

### Features not appearing after successful build
- Hard refresh browser (Ctrl+Shift+R)
- Check if logged in with correct account
- Clear browser cache

## Repository Reference
| Purpose | Repository |
|---------|------------|
| Vercel Production | `Ktej255/eduecosystem-frontend` |
| Backend (AWS) | `Ktej255/eduecosystem-backend` |
