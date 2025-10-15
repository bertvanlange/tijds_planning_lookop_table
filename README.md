# tijds_planning_lookop_table
A website to easily find your own time planning

## Features

- 🔍 Search for your name to find your time planning
- 📄 Automatically extracts content from PDFs in a Google Drive folder
- 👁️ Preview PDFs directly in the browser
- ⬇️ Download PDFs when needed
- 🌐 Fully hostable on GitHub Pages

## Setup Instructions

### 1. One-time API Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Drive API:
   - Navigate to "APIs & Services" > "Library"
   - Search for "Google Drive API"
   - Click "Enable"
4. Create credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy the API key
5. Open `config.js` and replace `YOUR_GOOGLE_DRIVE_API_KEY` with your API key

### 2. Using the Application

1. Create a folder in Google Drive with your PDF files
2. Right-click the folder and select "Get link"
3. Set permissions to "Anyone with the link can view"
4. Copy the folder link
5. Open the application website
6. Paste your folder link in the input field at the top
7. Click "Load PDFs"
8. Search for names in your documents

**Note:** You only need to set up the API key once. After that, you can use any folder by simply pasting its link in the application!

### 3. Deploy to GitHub Pages (Optional)

1. Fork or clone this repository
2. Edit `config.js` with your API key
3. Commit the changes
4. Go to your repository settings on GitHub
5. Navigate to "Pages" section
6. Under "Source", select the branch you want to deploy (e.g., `main`)
7. Click "Save"
8. Your site will be available at `https://[username].github.io/[repository-name]/`

## Usage

1. Open the website
2. Paste your Google Drive folder link in the folder input field at the top
3. Click "Load PDFs" to fetch all PDFs from your Google Drive folder
4. Enter a name in the search box
5. Click "Search" or press Enter
6. Click on any result to view the PDF
7. Use the "Download PDF" button to download the file

**Tip:** The application remembers your last folder link, so you only need to paste it once!

## How It Works

1. **One-time Setup**: Configure your Google Drive API key once in `config.js`
2. **Folder Link**: Paste any Google Drive folder link directly in the application
3. **Loading PDFs**: The application uses the Google Drive API to fetch PDF files from the specified folder
4. **Content Extraction**: Using PDF.js, the application reads the first few pages of each PDF to extract text content
5. **Search**: When you search for a name, it looks through the extracted text, titles, and filenames
6. **Display**: Matching PDFs are displayed with their titles, and you can click to view them
7. **Persistence**: Your folder link is saved in browser storage for convenience

## Troubleshooting

### "Please configure your Google Drive API key"
- Make sure you've edited `config.js` with your actual API key
- Follow the setup instructions to get an API key from Google Cloud Console

### "Please paste a Google Drive folder link"
- Paste a complete Google Drive folder link in the input field at the top
- The link should look like: `https://drive.google.com/drive/folders/...`

### "Invalid Google Drive folder link"
- Verify that you've copied the complete folder link from Google Drive
- Make sure it's a folder link, not a file link

### "Failed to load PDFs"
- Check that your Google Drive folder is shared with "Anyone with the link can view"
- Verify your API key is correct and has the Google Drive API enabled
- Check browser console for detailed error messages

### "No PDF files found"
- Ensure there are PDF files in your Google Drive folder
- Verify the folder ID is correct
- Check that the PDFs are not in the trash

### PDFs won't open
- Some PDFs may have download restrictions set in Google Drive
- Try downloading the PDF instead of previewing it

## Security Notes

- Your API key needs to be configured once in `config.js`
- For production use, restrict the API key to your domain in Google Cloud Console
- Folder links can be changed anytime in the UI without modifying code
- Your folder link is stored in your browser's localStorage for convenience
- Make sure only non-sensitive PDFs are in publicly shared folders
- Do not commit sensitive data to your repository

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- JavaScript must be enabled
- Requires internet connection to access Google Drive

## License

MIT License - Feel free to use and modify as needed
