#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const docsDir = path.join(__dirname, '../docs');
const publicDir = path.join(__dirname, '../docs/public');

// Create public dir if it doesn't exist
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// List of markdown files in order (from config.ts sidebar)
const mdFiles = [
  'acknowledgements.md',
  'introduction.md',
  'organizing-files.md',
  'preparing-data.md',
  'preparing-documentation.md',
  'creating-structured-metadata.md',
  'creating-variable-groups.md',
  'documenting-resources.md',
  'quality-review-checklist.md',
  'generating-output.md',
  'pushing-to-nada.md',
  'validation.md',
  'conclusion.md',
];

// Read all markdown files and combine them
let combinedContent = `# Quick Reference Guide for Microdata Archivists

Quick Reference Guide for Data Archivists — World Bank Group Chief Statistician's Office (DECDG)

---

`;

mdFiles.forEach((file) => {
  const filePath = path.join(docsDir, file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    // Remove frontmatter if present
    const cleanedContent = content.replace(/^---[\s\S]*?---\n/, '');
    combinedContent += cleanedContent + '\n\n---\n\n';
  } else {
    console.warn(`Warning: File not found: ${file}`);
  }
});

// Write combined markdown file
const outputPath = path.join(publicDir, 'guide-combined.md');
fs.writeFileSync(outputPath, combinedContent, 'utf-8');
console.log(`✓ Combined guide created: ${outputPath}`);
console.log('\n📝 Next steps to create PDF:');
console.log('1. Open the guide in your browser: https://your-site.com/');
console.log('2. Press Ctrl+P (or Cmd+P on Mac) and select "Save as PDF"');
console.log('3. Or install Puppeteer when network is available to automate this.');
console.log('\n Alternative: Use an online MD-to-PDF converter with the generated file.');
