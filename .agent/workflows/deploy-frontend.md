---
description: How to deploy frontend updates to Vercel
---

# Frontend Deployment Workflow

## Pre-Deployment Checklist
// turbo-all

1. Verify correct git remote (must use PAT-authenticated URL):
```bash
cd d:\Graphology\Master Software\Eduecosystem\frontend
git remote -v
```
- Must contain PAT token in URL for automated pushes
- If missing, run: `git remote set-url origin https://<PAT>@github.com/Ktej255/eduecosystem-frontend.git`

2. Safety check — ensure no large/junk files are staged:
```bash
git status
```
- Verify NO `.pdf`, `.py`, `raw_mcqs/`, or temp `.txt` files are staged
- The `.gitignore` should block these automatically

3. Test locally before pushing:
```bash
npm run build
```
- Must complete without errors

4. Commit and push:
```bash
git add .
git commit -m "Description of changes"
git push origin main
```

5. Verify Vercel deployment:
- Go to https://vercel.com/dashboard
- Find `eduecosystem-frontend` project
- Check build status (should show commit message)
- If build fails, check "Build Logs" for errors

## Common Issues

### git push hangs or times out
- **Cause**: Windows Git Credential Manager opening invisible popup
- **Fix**: Use PAT-authenticated remote URL (see step 1)

### git push fails with HTTP 500
- **Cause**: Accidentally committed large files (PDFs, raw data, temp outputs)
- **Fix**: Reset commit, check `.gitignore`, re-add only source files
- **Prevention**: `.gitignore` now blocks `*.pdf`, `*.py`, `**/raw_mcqs/`, temp files

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
