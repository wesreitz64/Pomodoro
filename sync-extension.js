const fs = require('fs-extra');
const path = require('path');

// Set the path to your VS Code extension folder and Chrome unpacked extension folder
const sourceDir = path.join(__dirname, 'src'); // Replace 'src' with your extension's folder
const targetDir = 'C:\Users\wesre\Downloads\chrome-extensions-samples-main'; // Update this path

// Copy files from source to target
function syncFiles() {
    fs.copy(sourceDir, targetDir, { overwrite: true }, (err) => {
        if (err) {
            console.error('Error copying files:', err);
        } else {
            console.log('Extension files synchronized successfully!');
        }
    });
}

// Watch for changes in your VS Code extension folder
fs.watch(sourceDir, { recursive: true }, (eventType, filename) => {
    console.log(`${filename} file changed, syncing files...`);
    syncFiles();
});

// Initial sync when the script starts
syncFiles();
