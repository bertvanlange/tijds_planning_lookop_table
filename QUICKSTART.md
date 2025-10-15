# Quick Start Guide

Follow these steps to get your Time Planning Lookup website running:

## Step 1: Google Cloud Setup (5 minutes)

1. Go to https://console.cloud.google.com/
2. Create a new project (or select existing)
3. Enable Google Drive API:
   - Click "APIs & Services" → "Library"
   - Search for "Google Drive API"
   - Click "Enable"
4. Create API Key:
   - Click "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "API Key"
   - Copy your API key
   - (Optional but recommended) Click "Restrict Key":
     - Under "API restrictions", select "Google Drive API"
     - Under "Website restrictions", add your GitHub Pages URL

## Step 2: Google Drive Setup (2 minutes)

1. Create a folder in Google Drive
2. Upload all your PDF time planning files to this folder
3. Right-click the folder → "Get link"
4. Set to "Anyone with the link can view"
5. Copy the complete folder link
   - Example: `https://drive.google.com/drive/folders/1AbCdEfGhIjKlMnOpQrStUvWxYz`

## Step 3: Configure the Website (1 minute)

1. Open `config.js` in a text editor
2. Replace `YOUR_GOOGLE_DRIVE_API_KEY` with your API key from Step 1
3. Save the file

Example:
```javascript
const CONFIG = {
    API_KEY: 'AIzaSyD1234567890abcdefghijklmnopqrstuv',
    FOLDER_LINK: '', // Optional: set a default folder link
};
```

## Step 4: Deploy to GitHub Pages (2 minutes)

1. Commit and push all files to your GitHub repository
2. Go to repository Settings → Pages
3. Under "Source", select your branch (e.g., `main`)
4. Click "Save"
5. Wait a minute for deployment
6. Visit your site at: `https://[username].github.io/[repository-name]/`

## Step 5: Use the Website

1. Open your GitHub Pages URL
2. **Paste your Google Drive folder link** in the input field at the top
3. Click "Load PDFs" button
4. Wait for PDFs to load (first time may take a minute)
5. Enter a name in the search box
6. Click "Search" or press Enter
7. Click on any result to view the PDF

**Tip:** The application remembers your folder link, so you only need to paste it once!

## Troubleshooting

**"Please configure your Google Drive API key"**
- You haven't edited config.js yet, or the API key is still the default

**"Please paste a Google Drive folder link"**
- You need to paste your folder link in the input field at the top of the page

**"Invalid Google Drive folder link"**
- Make sure you copied the complete folder link from Google Drive
- The link should look like: `https://drive.google.com/drive/folders/...`

**"Failed to load PDFs"**
- Check that your folder is shared publicly ("Anyone with the link can view")
- Verify your API key is correct
- Make sure Google Drive API is enabled

**"No PDF files found"**
- Check that PDFs are in the folder (not in subfolders)
- Ensure PDFs aren't in trash

## Tips

- Set up the API key once, then use any folder by pasting its link
- The folder link is saved in your browser for convenience
- You can switch between different folders anytime
- PDF processing happens in the browser, so first load may take time
- Search works on PDF content, not just filenames
- You can download PDFs directly from the viewer
- The site works entirely client-side - no server needed!

## Need Help?

Check the main README.md for detailed documentation and additional troubleshooting steps.
