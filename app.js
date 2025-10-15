// Time Planning Lookup Application

// Global variables
let pdfFiles = [];
let pdfCache = new Map();

// PDF.js worker setup
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

// DOM elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const loadBtn = document.getElementById('loadBtn');
const status = document.getElementById('status');
const results = document.getElementById('results');
const pdfViewer = document.getElementById('pdfViewer');
const pdfFrame = document.getElementById('pdfFrame');
const closeViewer = document.getElementById('closeViewer');
const downloadBtn = document.getElementById('downloadBtn');

// Event listeners
loadBtn.addEventListener('click', loadPDFsFromDrive);
searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});
closeViewer.addEventListener('click', closePdfViewer);

// Initialize
window.addEventListener('load', () => {
    if (!CONFIG.API_KEY || CONFIG.API_KEY === 'YOUR_GOOGLE_DRIVE_API_KEY') {
        showStatus('Please configure your Google Drive API key in config.js', 'error');
    }
});

// Show status message
function showStatus(message, type = 'loading') {
    status.textContent = message;
    status.className = `status ${type}`;
    status.style.display = 'block';
}

// Hide status
function hideStatus() {
    status.style.display = 'none';
}

// Load PDFs from Google Drive
async function loadPDFsFromDrive() {
    if (!CONFIG.API_KEY || CONFIG.API_KEY === 'YOUR_GOOGLE_DRIVE_API_KEY') {
        showStatus('Please configure your Google Drive API key in config.js', 'error');
        return;
    }

    if (!CONFIG.FOLDER_ID || CONFIG.FOLDER_ID === 'YOUR_FOLDER_ID') {
        showStatus('Please configure your Google Drive folder ID in config.js', 'error');
        return;
    }

    loadBtn.disabled = true;
    showStatus('Loading PDFs from Google Drive...', 'loading');

    try {
        // Query Google Drive API for PDF files in the folder
        const query = `'${CONFIG.FOLDER_ID}' in parents and mimeType='application/pdf' and trashed=false`;
        const url = `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(query)}&key=${CONFIG.API_KEY}&fields=files(id,name,webViewLink,webContentLink)`;

        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Failed to load PDFs: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        
        if (!data.files || data.files.length === 0) {
            showStatus('No PDF files found in the specified folder', 'error');
            loadBtn.disabled = false;
            return;
        }

        pdfFiles = data.files;
        
        // Extract text from PDFs for searching
        showStatus(`Found ${pdfFiles.length} PDFs. Extracting content...`, 'loading');
        
        await extractPDFContent();
        
        showStatus(`Successfully loaded ${pdfFiles.length} PDFs. You can now search!`, 'success');
        searchInput.focus();
        
    } catch (error) {
        console.error('Error loading PDFs:', error);
        showStatus(`Error: ${error.message}`, 'error');
    } finally {
        loadBtn.disabled = false;
    }
}

// Extract content from PDFs
async function extractPDFContent() {
    const totalFiles = pdfFiles.length;
    
    for (let i = 0; i < pdfFiles.length; i++) {
        const file = pdfFiles[i];
        showStatus(`Processing PDF ${i + 1}/${totalFiles}: ${file.name}...`, 'loading');
        
        try {
            // Use CORS proxy or direct link depending on permissions
            const pdfUrl = `https://drive.google.com/uc?export=download&id=${file.id}`;
            
            // Load PDF
            const loadingTask = pdfjsLib.getDocument({
                url: pdfUrl,
                withCredentials: false,
            });
            
            const pdf = await loadingTask.promise;
            
            // Extract text from first few pages (where names typically appear)
            let fullText = '';
            const pagesToCheck = Math.min(3, pdf.numPages); // Check first 3 pages
            
            for (let pageNum = 1; pageNum <= pagesToCheck; pageNum++) {
                const page = await pdf.getPage(pageNum);
                const textContent = await page.getTextContent();
                const pageText = textContent.items.map(item => item.str).join(' ');
                fullText += pageText + '\n';
            }
            
            // Store the extracted text
            file.extractedText = fullText;
            file.title = extractTitle(fullText, file.name);
            
            // Cache the file
            pdfCache.set(file.id, file);
            
        } catch (error) {
            console.error(`Error processing ${file.name}:`, error);
            file.extractedText = '';
            file.title = file.name;
        }
    }
}

// Extract title from PDF content
function extractTitle(text, fallbackName) {
    // Look for common title patterns
    const lines = text.split('\n').filter(line => line.trim().length > 0);
    
    // First non-empty line is often the title
    if (lines.length > 0) {
        const firstLine = lines[0].trim();
        if (firstLine.length > 3 && firstLine.length < 100) {
            return firstLine;
        }
    }
    
    // Look for patterns like "Planning: Title" or "Schedule: Title"
    const titleMatch = text.match(/(planning|schedule|rooster|tijdsplanning)[:\s]+([^\n]+)/i);
    if (titleMatch && titleMatch[2]) {
        return titleMatch[2].trim();
    }
    
    // Fallback to filename
    return fallbackName.replace('.pdf', '');
}

// Perform search
function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (!searchTerm) {
        showStatus('Please enter a name to search', 'error');
        return;
    }

    if (pdfFiles.length === 0) {
        showStatus('Please load PDFs first by clicking "Load PDFs"', 'error');
        return;
    }

    hideStatus();
    results.innerHTML = '';

    // Search through PDFs
    const matches = pdfFiles.filter(file => {
        const textToSearch = (file.extractedText || '').toLowerCase();
        const titleToSearch = (file.title || '').toLowerCase();
        const nameToSearch = (file.name || '').toLowerCase();
        
        return textToSearch.includes(searchTerm) || 
               titleToSearch.includes(searchTerm) || 
               nameToSearch.includes(searchTerm);
    });

    if (matches.length === 0) {
        results.innerHTML = `
            <div class="no-results">
                <h3>No results found</h3>
                <p>No time planning found for "${searchInput.value}"</p>
                <p>Please try a different name or check the spelling</p>
            </div>
        `;
        return;
    }

    // Display results
    matches.forEach(file => {
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        resultItem.innerHTML = `
            <h3>${file.title}</h3>
            <p>File: ${file.name}</p>
        `;
        resultItem.addEventListener('click', () => openPDF(file));
        results.appendChild(resultItem);
    });

    showStatus(`Found ${matches.length} matching document(s)`, 'success');
}

// Open PDF
function openPDF(file) {
    // Use Google Drive viewer
    const viewerUrl = `https://drive.google.com/file/d/${file.id}/preview`;
    
    pdfFrame.src = viewerUrl;
    pdfViewer.classList.remove('hidden');
    
    // Set download link
    downloadBtn.href = `https://drive.google.com/uc?export=download&id=${file.id}`;
    downloadBtn.download = file.name;
    
    // Scroll to viewer
    pdfViewer.scrollIntoView({ behavior: 'smooth' });
}

// Close PDF viewer
function closePdfViewer() {
    pdfViewer.classList.add('hidden');
    pdfFrame.src = '';
}
