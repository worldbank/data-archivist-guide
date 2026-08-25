#!/bin/bash

# Build all outputs for Data Archivist Guide
# Generates: HTML, combined markdown, print HTML, and PDF

echo ""
echo "========================================"
echo "  Data Archivist Guide - Full Build"
echo "========================================"
echo ""

set -e  # Exit on error

echo "[1/4] Building HTML documentation..."
npm run docs:build

echo ""
echo "[2/4] Combining markdown files..."
npm run guide:combine

echo ""
echo "[3/4] Generating print HTML..."
npm run guide:print

echo ""
echo "[4/4] Generating PDF..."
npm run guide:pdf

echo ""
echo "========================================"
echo "  ✅ Build complete!"
echo "========================================"
echo ""
echo "Generated files:"
echo "  • HTML: docs/.vitepress/dist/"
echo "  • PDF: docs/public/Guide-for-Data-Archivists.pdf"
echo "  • Markdown: docs/public/guide-combined.md"
echo ""
