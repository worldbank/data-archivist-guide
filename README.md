# The Quick Reference Guide for Microdata Archivists 
This repository hosts the source code and documentation content for the Quick Reference Guide for Microdata Archivists, a documentation site built with [VitePress](https://vitepress.dev/). It serves as the authoritative source for creating, updating, and publishing the guide.

## Development

```bash
npm install
npm run docs:dev
```

The dev server starts at `http://localhost:5173`.

## Build

### Full Build (HTML + PDF + Markdown)

**Windows:**
```bash
build-all.bat
```

Or from command line:
```bash
npm run build:all
```

This generates:
- **HTML Documentation** → `docs/.vitepress/dist/`
- **PDF Guide** → `docs/public/Guide-for-Data-Archivists.pdf`
- **Combined Markdown** → `docs/public/guide-combined.md`

### Individual Build Steps

If you need to run specific tasks:

```bash
npm run docs:build      # Build HTML only
npm run guide:pdf       # Generate PDF only
npm run guide:combine   # Create combined markdown only
npm run guide:print     # Create print-friendly HTML only
```

### Preview Built Site

```bash
npm run docs:preview
```

Starts a preview server at `http://localhost:4173`.

## Project Structure

```
docs/
├── .vitepress/
│   └── config.ts       # Site configuration and navigation
├── public/
│   └── media/          # Guide images
├── index.md            # Home page
└── *.md                # Guide chapters
```
