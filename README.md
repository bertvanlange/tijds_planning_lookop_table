# tijds_planning_lookop_table
A website to easily find your own time planning

## Features

- **Extract Google Drive Folder ID**: Simply paste your Google Drive folder URL, and the tool will automatically extract the folder ID
- **No Credentials Required**: Works entirely in the browser without requiring any Google account credentials or API keys
- **Easy Permission Setup**: Clear instructions on how to set your folder to "anyone with the link can edit"
- **Copy to Clipboard**: Quick copy buttons for folder ID and URLs

## Usage

1. Open `index.html` in your web browser
2. Paste your Google Drive folder URL into the input field
3. Click "Extract Folder ID" or press Enter
4. Copy the extracted folder ID or embed URL as needed
5. Follow the on-screen instructions to set folder permissions in Google Drive

## Supported URL Formats

The tool can extract folder IDs from various Google Drive URL formats:
- `https://drive.google.com/drive/folders/{folder_id}`
- `https://drive.google.com/drive/u/0/folders/{folder_id}`
- `https://drive.google.com/open?id={folder_id}`

## Setting Folder Permissions

To allow anyone with the link to edit your Google Drive folder:
1. Open your Google Drive folder
2. Click the **Share** button
3. Click **Change to anyone with the link**
4. Select **Editor** from the dropdown
5. Click **Done**

## Local Development

Simply open `index.html` in any modern web browser. No build process or dependencies required.

## License

MIT
