# CH Archive Manager

CH Archive Manager is a simple, user-friendly tool for archiving and restoring files and folders using the `.ch` format (a compressed zip file with extra features). It is designed for easy backup, sharing, and restoration of files and folders, with a focus on reliability and Windows compatibility.

## Features
- Drag-and-drop files and folders to import
- Export and restore files/folders with 1:1 structure
- Handles large archives (up to 1TB+)
- Preserves empty folders
- Prevents overwriting by auto-renaming files/folders on export
- Stats tab with countdown to monthly reset
- Shows total uncompressed size after import/export
- Accurate progress and ETA display
- Zip bomb protection
- Modern, tabbed UI with theme toggle

## Usage
1. **Add Files/Folders:**
   - Drag and drop files or folders into the app, or use the "Add Files"/"Add Folder" buttons.
2. **Import to .ch:**
   - Click "Import → .ch" to create a .ch archive in the same folder as your first selected item.
   - The archive will include all files and folders, preserving structure.
3. **Export from .ch:**
   - Click "Export ← .ch" to extract the most recent .ch file in the current folder.
   - Files and folders will be restored exactly as they were, with auto-renaming if needed.
4. **Stats Tab:**
   - View import/export history, countdown to monthly reset, and total uncompressed size.
5. **Theme Toggle:**
   - Switch between light and dark mode at any time.

## Requirements
- Python 3.7+
- tkinter, tkinterdnd2

## Notes
- The .ch format is a standard zip file with a different extension.
- Large files and folders are supported (up to 1TB+ with ZIP64).
- Zip bomb protection is built-in: extraction is refused if the uncompressed size is suspiciously large.
- All permissions are set for extracted files/folders on Windows.

## Troubleshooting
- If you do not see your files after export, check for renamed folders (e.g., `folder (1)`).
- If you see a permission error, make sure you have write access to the destination folder.
- For best results, run the app from a folder you own (like your Desktop or Documents).

