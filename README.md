# Quick Reference Guide for Microdata Archivists

The **Quick Reference Guide for Microdata Archivists** is a practical resource designed to support the documentation, preservation, discovery, access, and reuse of microdata and related research data assets. The guide reflects internationally recognized good practices in data curation, metadata management, and digital preservation.

Intended for microdata archivists, data curators, metadata specialists, repository administrators, and data stewards, the guide provides concise, standards-based guidance for managing data and metadata throughout the data lifecycle.

## Objectives

The guide aims to:

- Provide practical guidance for common archiving and curation activities.
- Promote the consistent application of metadata standards, including the Data Documentation Initiative (DDI).
- Support data quality, discoverability, interoperability, preservation, and responsible data sharing.
- Document recommended workflows, procedures, and best practices for managing microdata collections.
- Serve as a reference resource for institutions responsible for preserving and disseminating research data.

## About This Repository

This repository contains the source code and documentation content used to build and publish the Quick Reference Guide for Microdata Archivists.

The documentation site is built with [VitePress](https://vitepress.dev/) and serves as the authoritative source for maintaining, reviewing, and publishing guide content.

Repository contents include:

- Markdown source files for guide content.
- VitePress configuration and site assets.
- Templates, examples, and reference materials.
- Build and deployment scripts.
- Version-controlled documentation used to generate published outputs.

## Getting Started

### Install Dependencies

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

## Contact
microdata[at]worldbank.org

## License

This project is licensed under the MIT License together with the [World Bank IGO Rider](WB-IGO-RIDER.md). The Rider is purely procedural: it reserves all privileges and immunities enjoyed by the World Bank, without adding restrictions to the MIT permissions. Please review both files before using, distributing or contributing.