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
  - [ ] Folder link copied

- [ ] Configuration complete
  - [ ] `config.js` edited with real API key
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
  - [ ] Folder link input field is visible at the top
  - [ ] Paste a Google Drive folder link in the input
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
   - API key not configured: Edit config.js with your API key
   - No folder link pasted: Paste a Google Drive folder link in the input field
   - Folder not accessible: Check sharing settings ("Anyone with the link can view")
   - API not enabled: Enable Google Drive API in Google Cloud Console
   - Invalid folder link: Make sure you copied the complete folder URL

## Security Reminders

- [ ] API key restricted to Google Drive API only
- [ ] API key restricted to your domain (optional)
- [ ] Folder permissions set to read-only ("Anyone with link can view")
- [ ] No sensitive information in PDFs you don't want public

## Maintenance

- [ ] Bookmark your GitHub Pages URL
- [ ] Share URL with users
- [ ] Users can easily switch between folders by pasting different folder links
- [ ] Update PDFs in Google Drive folder as needed (no redeployment needed!)
- [ ] Monitor API usage in Google Cloud Console

## Success Criteria

✅ Website loads without errors
✅ Users can paste a Google Drive folder link
✅ Users can click "Load PDFs" and see their PDFs
✅ Search functionality returns correct results
✅ PDFs open and display correctly
✅ Download functionality works
✅ Folder link is remembered for future visits

---

**Congratulations!** Your Time Planning Lookup website is live! 🎉
