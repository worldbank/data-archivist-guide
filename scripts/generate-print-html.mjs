#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '../docs/public');

// Read the combined markdown file
const combinedMdPath = path.join(publicDir, 'guide-combined.md');
const content = fs.readFileSync(combinedMdPath, 'utf-8');

// Convert markdown to simple HTML suitable for PDF printing
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quick Reference Guide for Microdata Archivists</title>
  <style>
    * {
      margin: 0;
      padding: 0;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 900px;
      margin: 0 auto;
      padding: 40px 20px;
      background: white;
    }
    
    h1 {
      font-size: 2.5em;
      margin-bottom: 0.5em;
      margin-top: 1.5em;
      page-break-after: avoid;
      border-bottom: 3px solid #0066cc;
      padding-bottom: 10px;
    }
    
    h2 {
      font-size: 1.8em;
      margin-top: 1.5em;
      margin-bottom: 0.5em;
      page-break-after: avoid;
      color: #0066cc;
    }
    
    h3 {
      font-size: 1.3em;
      margin-top: 1.2em;
      margin-bottom: 0.4em;
      page-break-after: avoid;
    }
    
    h4, h5, h6 {
      margin-top: 1em;
      margin-bottom: 0.3em;
      page-break-after: avoid;
    }
    
    p {
      margin-bottom: 1em;
    }
    
    ul, ol {
      margin-left: 2em;
      margin-bottom: 1em;
    }
    
    li {
      margin-bottom: 0.5em;
    }
    
    code {
      background: #f4f4f4;
      padding: 2px 6px;
      border-radius: 3px;
      font-family: "Courier New", monospace;
      font-size: 0.9em;
    }
    
    pre {
      background: #f4f4f4;
      padding: 15px;
      border-radius: 5px;
      overflow-x: auto;
      margin-bottom: 1em;
      page-break-inside: avoid;
    }
    
    pre code {
      background: none;
      padding: 0;
      border-radius: 0;
    }
    
    blockquote {
      border-left: 4px solid #0066cc;
      padding-left: 1em;
      margin-left: 0;
      margin-bottom: 1em;
      color: #666;
    }
    
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 1em;
      page-break-inside: avoid;
    }
    
    th, td {
      border: 1px solid #ddd;
      padding: 10px;
      text-align: left;
    }
    
    th {
      background: #f8f8f8;
      font-weight: bold;
    }
    
    hr {
      border: none;
      border-top: 2px solid #ddd;
      margin: 2em 0;
      page-break-after: always;
    }
    
    a {
      color: #0066cc;
      text-decoration: none;
    }
    
    a:hover {
      text-decoration: underline;
    }
    
    .toc {
      margin: 2em 0;
      padding: 20px;
      background: #f9f9f9;
      border-radius: 5px;
      page-break-inside: avoid;
    }
    
    @media print {
      body {
        padding: 0;
      }
      a {
        color: inherit;
      }
      h1, h2, h3, h4, h5, h6 {
        page-break-after: avoid;
      }
      ul, ol, pre, table {
        page-break-inside: avoid;
      }
    }
  </style>
</head>
<body>
  ${markdownToHtml(content)}
</body>
</html>`;

fs.writeFileSync(path.join(publicDir, 'guide-print.html'), htmlContent, 'utf-8');
console.log('✓ PDF-optimized HTML guide created: docs/public/guide-print.html');
console.log('\n📄 How to convert to PDF:');
console.log('1. Serve the site: npm run docs:preview');
console.log('2. Open in browser: http://localhost:5173/guide-print.html');
console.log('3. Press Ctrl+P and select "Save as PDF"');
console.log('\nOr use an online converter:');
console.log('- https://markdowntopdf.com/');
console.log('- https://www.vertopal.com/');

// Simple markdown to HTML converter
function markdownToHtml(md) {
  let html = md
    // Escape HTML
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    // Headings
    .replace(/^### (.*?)$/gm, '<h3>$1</h3>')
    .replace(/^## (.*?)$/gm, '<h2>$1</h2>')
    .replace(/^# (.*?)$/gm, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/__(.+?)__/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/_(.+?)_/g, '<em>$1</em>')
    // Links
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
    // Code blocks (with language)
    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    // Horizontal rules
    .replace(/^---$/gm, '<hr>')
    .replace(/^\*\*\*$/gm, '<hr>')
    // Blockquotes
    .replace(/^> (.*?)$/gm, '<blockquote><p>$1</p></blockquote>')
    // Unordered lists
    .replace(/^\* (.*?)$/gm, '<li>$1</li>')
    .replace(/^- (.*?)$/gm, '<li>$1</li>')
    .replace(/^(\s*<li>.*<\/li>)/gm, '<ul>$1</ul>')
    // Line breaks
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(.+)$/gm, '<p>$1</p>')
    .replace(/<p><\/p>/g, '');
  
  return html;
}
