# Build Scripts for Data Archivist Guide

Quick and easy build scripts to regenerate all outputs: HTML, PDF, and Markdown.

## Available Scripts

### Windows - Command Prompt (Easiest) 
**File:** `build-all.bat`

Simply **double-click** the file or run:
```bash
build-all.bat
```

### Windows - PowerShell
**File:** `build-all.ps1`

Run in PowerShell:
```powershell
.\build-all.ps1
```

### Mac/Linux
**File:** `build-all.sh`

Run in terminal:
```bash
bash build-all.sh
```

## What Gets Built

The scripts automatically generate:

1. **📖 HTML Documentation**
   - Location: `docs/.vitepress/dist/`
   - Interactive browsable guide with all styling

2. **📄 PDF Guide**
   - Location: `docs/public/Guide-for-Data-Archivists.pdf`
   - Single combined PDF with all chapters and formatting

3. **📝 Markdown File**
   - Location: `docs/public/guide-combined.md`
   - All chapters combined in one markdown file for editing

## Workflow

### During Development
Use the dev server for live updates:
```bash
npm run docs:dev
```

Then access at `http://localhost:5173`

### When Ready to Deploy
Run one of the build scripts:
```bash
build-all.bat          # Windows
.\build-all.ps1        # PowerShell
bash build-all.sh      # Mac/Linux
```

All outputs will be ready in:
- `docs/.vitepress/dist/` (for serving HTML)
- `docs/public/` (for serving PDF, markdown, and media)

## Individual Commands

If you need to run specific tasks:

```bash
npm run docs:build      # Build HTML only
npm run guide:pdf       # Generate PDF only
npm run guide:combine   # Create combined markdown only
npm run guide:print     # Create print-friendly HTML only
```

## Troubleshooting

If the script fails:
1. Make sure you're in the project root directory
2. Check that Node.js and npm are installed
3. Run `npm install` to ensure dependencies are available
4. Try running individual commands to identify the issue

For PowerShell execution policy issues:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
