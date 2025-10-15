# tijds_planning_lookop_table
A website to easily find your own time planning

## Features

- 🔍 Search for your name to find your time planning
- 📄 Automatically extracts content from PDFs in a Google Drive folder
- 👁️ Preview PDFs directly in the browser
- ⬇️ Download PDFs when needed
- 🌐 Fully hostable on GitHub Pages

## Setup Instructions

### 1. Enable Google Drive API

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Drive API:
   - Navigate to "APIs & Services" > "Library"
   - Search for "Google Drive API"
   - Click "Enable"
4. Create credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy the API key (you'll need this later)
   - (Recommended) Restrict the API key to only Google Drive API and your domain

### 2. Prepare Your Google Drive Folder

1. Create a folder in Google Drive containing all your PDF time plannings
2. Right-click the folder and select "Get link"
3. Set permissions to "Anyone with the link can view"
4. Copy the folder ID from the URL (the part after `/folders/`)
   - Example: `https://drive.google.com/drive/folders/1AbCdEfGhIjKlMnOpQrStUvWxYz`
   - Folder ID: `1AbCdEfGhIjKlMnOpQrStUvWxYz`

### 3. Configure the Application

1. Open `config.js` in a text editor
2. Replace `YOUR_GOOGLE_DRIVE_API_KEY` with your actual API key
3. Replace `YOUR_FOLDER_ID` with your Google Drive folder ID
4. Save the file

Example `config.js`:
```javascript
const CONFIG = {
    API_KEY: 'AIzaSyD1234567890abcdefghijklmnop',
    FOLDER_ID: '1AbCdEfGhIjKlMnOpQrStUvWxYz',
};
```

### 4. Deploy to GitHub Pages

1. Commit all files to your repository
2. Go to your repository settings on GitHub
3. Navigate to "Pages" section
4. Under "Source", select the branch you want to deploy (e.g., `main`)
5. Click "Save"
6. Your site will be available at `https://[username].github.io/[repository-name]/`

## Usage

1. Open the website
2. Click "Load PDFs" to fetch all PDFs from your Google Drive folder
3. Enter a name in the search box
4. Click "Search" or press Enter
5. Click on any result to view the PDF
6. Use the "Download PDF" button to download the file

## How It Works

1. **Loading PDFs**: The application queries the Google Drive API to get a list of all PDF files in the specified folder
2. **Content Extraction**: Using PDF.js, the application reads the first few pages of each PDF to extract text content
3. **Search**: When you search for a name, it looks through the extracted text, titles, and filenames
4. **Display**: Matching PDFs are displayed with their titles, and you can click to view them

## Troubleshooting

### "Please configure your Google Drive API key"
- Make sure you've edited `config.js` with your actual API key and folder ID

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

- Your API key is visible in the client-side code. For production use, consider:
  - Restricting the API key to your domain in Google Cloud Console
  - Using API key restrictions to limit usage
  - Implementing a backend server to hide the API key
- Do not commit sensitive data to your repository

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- JavaScript must be enabled
- Requires internet connection to access Google Drive

## License

MIT License - Feel free to use and modify as needed
