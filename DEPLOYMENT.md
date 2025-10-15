# Deployment Checklist

Use this checklist to ensure successful deployment to GitHub Pages.

## Pre-Deployment

- [ ] Google Cloud Console setup complete
  - [ ] Project created
  - [ ] Google Drive API enabled
  - [ ] API key created and copied
  - [ ] API key restricted (optional but recommended)

- [ ] Google Drive setup complete
  - [ ] Folder created with PDFs
  - [ ] Folder shared publicly ("Anyone with the link can view")
  - [ ] Folder ID copied from URL

- [ ] Configuration complete
  - [ ] `config.js` edited with real API key
  - [ ] `config.js` edited with real folder ID
  - [ ] Configuration tested locally (optional)

## Deployment

- [ ] All files committed to repository
  - [ ] index.html
  - [ ] styles.css
  - [ ] app.js
  - [ ] config.js
  - [ ] README.md
  - [ ] QUICKSTART.md (optional)
  - [ ] .gitignore

- [ ] Pushed to GitHub
  - [ ] Changes pushed to main branch (or preferred branch)

- [ ] GitHub Pages enabled
  - [ ] Repository Settings → Pages
  - [ ] Source set to branch (e.g., "main")
  - [ ] Saved

## Post-Deployment

- [ ] Wait for deployment (usually 1-2 minutes)
- [ ] Visit GitHub Pages URL: `https://[username].github.io/[repo-name]/`
- [ ] Test functionality:
  - [ ] Page loads correctly
  - [ ] "Load PDFs" button works
  - [ ] PDFs are loaded from Google Drive
  - [ ] Search functionality works
  - [ ] PDFs open in viewer
  - [ ] Download button works

## Troubleshooting

If something doesn't work:

1. **Open browser developer console** (F12)
2. **Look for error messages**
3. **Common issues:**
   - API key not configured: Edit config.js
   - Folder not accessible: Check sharing settings
   - API not enabled: Enable Google Drive API in Google Cloud Console
   - CORS errors: Ensure folder is publicly shared

## Security Reminders

- [ ] API key restricted to Google Drive API only
- [ ] API key restricted to your domain (optional)
- [ ] Folder permissions set to read-only ("Anyone with link can view")
- [ ] No sensitive information in PDFs you don't want public

## Maintenance

- [ ] Bookmark your GitHub Pages URL
- [ ] Share URL with users
- [ ] Update PDFs in Google Drive folder as needed (no redeployment needed!)
- [ ] Monitor API usage in Google Cloud Console

## Success Criteria

✅ Website loads without errors
✅ Users can click "Load PDFs" and see their PDFs
✅ Search functionality returns correct results
✅ PDFs open and display correctly
✅ Download functionality works

---

**Congratulations!** Your Time Planning Lookup website is live! 🎉
