# Data Archivist Guide

Quick Reference Guide for Data Archivists — documentation site built with [VitePress](https://vitepress.dev/).

## Development

```bash
npm install
npm run docs:dev
```

The dev server starts at `http://localhost:5173`.

## Build

```bash
npm run docs:build
npm run docs:preview
```

Built output is written to `docs/.vitepress/dist`.

## Project Structure

```
docs/
├── .vitepress/
│   └── config.ts       # Site configuration and navigation
├── public/
│   └── media/          # Images (symlinked from __sphinx/media)
├── index.md            # Home page
└── *.md                # Guide chapters
```