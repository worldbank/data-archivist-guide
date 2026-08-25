#!/usr/bin/env node

import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '../docs/public');
const pdfPath = path.join(publicDir, 'Guide-for-Data-Archivists.pdf');
const combinedMdPath = path.join(publicDir, 'guide-combined.md');

console.log('=== PDF Generation Started ===');
console.log('Time:', new Date().toLocaleString());
console.log('PDF path:', pdfPath);

// Convert markdown to HTML with styling
function markdownToHtml(md) {
  // Store tables and images separately to process later
  const images = [];
  let imageIndex = 0;
  
  // Replace images with placeholders first (BEFORE any other processing)
  md = md.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, src) => {
    images.push({ alt, src });
    return `[IMAGE_${imageIndex++}]`;
  });

  // PROCESS TABLES BEFORE HTML ESCAPING (so <br> tags in cells work properly)
  md = md.replace(/(\|.+\n)+/g, (match) => {
    const lines = match.split('\n').filter(line => line.trim());
    if (lines.length < 2) return match;
    
    // Check if second line is separator (contains dashes and pipes)
    const isSeparatorRow = lines[1] && /^\|[\s|:-]+\|$/.test(lines[1]);
    const headerIdx = 0;
    const dataStart = isSeparatorRow ? 2 : 1;
    
    if (lines.length < dataStart) return match;
    
    // Parse table
    let tableHtml = '<table style="width:100%; border-collapse:collapse; margin:10px 0; page-break-inside: avoid; font-family: Arial, sans-serif; font-size: 10pt; color: #000;"><tbody>';
    
    lines.forEach((line, idx) => {
      // Skip separator row
      if (isSeparatorRow && idx === 1) return;
      
      const isHeader = (idx === 0);
      const cells = line.split('|').slice(1, -1); // Remove empty strings from start/end pipes
      
      if (cells.length === 0) return;
      
      const cellTag = isHeader ? 'th' : 'td';
      const headerStyle = isHeader ? 'background:#d0d0d0; font-weight:bold; text-align:left;' : 'text-align:left;';
      
      tableHtml += '<tr>';
      cells.forEach(cellContent => {
        // Keep <br> tags in cells for readability, escape other HTML
        const safeCellContent = cellContent
          .trim()
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/&lt;br&gt;/g, '<br>');
        
        tableHtml += `<${cellTag} style="border:1px solid #666; padding:8px; ${headerStyle} vertical-align: top; font-family: Arial, sans-serif; font-size: 10pt;">${safeCellContent}</${cellTag}>`;
      });
      tableHtml += '</tr>';
    });
    
    tableHtml += '</tbody></table>';
    return tableHtml;
  });

  // Now HTML-escape the remaining markdown
  let html = md
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Handle VitePress containers (tip, info, warning, danger)
  html = html.replace(/::: (tip|info|warning|danger)\n([\s\S]*?)\n:::/g, (match, type, content) => {
    const bgColor = type === 'tip' ? '#e7f3ff' : type === 'info' ? '#f0f8ff' : type === 'warning' ? '#fff8e6' : '#ffe6e6';
    const borderColor = type === 'tip' ? '#0066cc' : type === 'info' ? '#0066cc' : type === 'warning' ? '#ff9800' : '#ff0000';
    const cleanContent = content.split('\n').map(line => line.trim()).filter(l => l).join('</p><p>');
    return `<div style="background:${bgColor}; border-left:4px solid ${borderColor}; padding:12px; margin:10px 0; font-family: Arial, sans-serif; font-size: 11pt; color: #000; page-break-inside: avoid;">
<p style="font-family: Arial, sans-serif; font-size: 11pt; color: #000; margin: 0;">${cleanContent}</p>
</div>`;
  });

  // Headings
  html = html.replace(/^### (.*?)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.*?)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.*?)$/gm, '<h1>$1</h1>');

  // Bold and italic
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/__(.+?)__/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  html = html.replace(/_(.+?)_/g, '<em>$1</em>');

  // Links
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" style="color: #000; text-decoration: underline;">$1</a>');

  // Code blocks
  html = html.replace(/```(.*?)\n([\s\S]*?)```/g, '<pre style="background:#f0f0f0; padding:12px; margin:10px 0; font-family: Courier, monospace; font-size: 9pt; page-break-inside: avoid;"><code>$2</code></pre>');
  html = html.replace(/`([^`]+)`/g, '<code style="background:#f0f0f0; padding:2px 4px; font-family: Courier, monospace; font-size: 10pt;">$1</code>');

  // Images
  html = html.replace(/\[IMAGE_(\d+)\]/g, (match, idx) => {
    if (images[idx]) {
      const img = images[idx];
      const publicDir = path.join(__dirname, '../docs/public');
      const imgPath = path.resolve(publicDir, img.src.replace(/^\//, ''));
      return `<img src="file:///${imgPath.replace(/\\/g, '/')}" alt="${img.alt}" style="max-width:100%; height:auto; margin:10px 0; page-break-inside: avoid;" />`;
    }
    return match;
  });

  // Handle blockquotes
  html = html.replace(/^&gt; (.*?)$/gm, '<blockquote style="border-left:3px solid #000; padding-left:15px; margin:10px 0; font-family: Arial, sans-serif; font-size: 11pt; color: #333;"><p>$1</p></blockquote>');

  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr style="border:none; border-top:1px solid #000; margin:15px 0; page-break-after:always;">');
  html = html.replace(/^\*\*\*$/gm, '<hr style="border:none; border-top:1px solid #000; margin:15px 0; page-break-after:always;">');

  // Lists - improved
  const lines = html.split('\n');
  let inList = false;
  let listType = null;
  let result = [];

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    
    // Skip lines that are already HTML
    if (line.includes('<table') || line.includes('<div') || line.includes('<pre') || line.includes('<blockquote') || line.includes('<img')) {
      result.push(line);
      continue;
    }
    
    const unorderedMatch = line.match(/^(\s*)[\-\*] (.+)$/);
    const orderedMatch = line.match(/^(\s*)(\d+)\. (.+)$/);

    if (unorderedMatch) {
      if (!inList || listType !== 'ul') {
        if (inList) result.push(listType === 'ul' ? '</ul>' : '</ol>');
        result.push('<ul style="margin: 10px 0 10px 30px;">');
        inList = true;
        listType = 'ul';
      }
      result.push(`<li style="font-family: Arial, sans-serif; font-size: 11pt; color: #000;">${unorderedMatch[2]}</li>`);
    } else if (orderedMatch) {
      if (!inList || listType !== 'ol') {
        if (inList) result.push(listType === 'ul' ? '</ul>' : '</ol>');
        result.push('<ol style="margin: 10px 0 10px 30px;">');
        inList = true;
        listType = 'ol';
      }
      result.push(`<li style="font-family: Arial, sans-serif; font-size: 11pt; color: #000;">${orderedMatch[3]}</li>`);
    } else {
      if (inList) {
        result.push(listType === 'ul' ? '</ul>' : '</ol>');
        inList = false;
        listType = null;
      }
      if (line.trim()) {
        result.push(`<p style="font-family: Arial, sans-serif; font-size: 11pt; color: #000; margin: 0 0 10px 0;">${line}</p>`);
      }
    }
  }
  if (inList) result.push(listType === 'ul' ? '</ul>' : '</ol>');

  html = result.join('\n');
  html = html.replace(/<p><\/p>/g, '');

  return html;
}

(async () => {
  let browser;
  try {
    console.log('🚀 Starting PDF generation with Puppeteer...');
    console.log('📖 Reading combined guide...');
    
    // Read the combined markdown file
    if (!fs.existsSync(combinedMdPath)) {
      throw new Error(`guide-combined.md not found at ${combinedMdPath}. Run 'npm run guide:combine' first.`);
    }
    
    const markdownContent = fs.readFileSync(combinedMdPath, 'utf-8');
    console.log(`✓ Combined guide loaded (${Math.round(markdownContent.length / 1024)}KB)`);
    
    console.log('🔄 Converting markdown to HTML...');
    const htmlContent = markdownToHtml(markdownContent);
    
    const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quick Reference Guide for Microdata Archivists</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: Arial, Helvetica, sans-serif;
      line-height: 1.6;
      color: #000;
      background: white;
      padding: 40px;
      font-size: 11pt;
    }
    h1 {
      font-size: 24pt;
      margin-top: 20px;
      margin-bottom: 10px;
      border-bottom: 2px solid #000;
      padding-bottom: 10px;
      page-break-after: avoid;
      break-after: avoid;
    }
    h2 {
      font-size: 16pt;
      margin-top: 15px;
      margin-bottom: 10px;
      page-break-after: avoid;
      break-after: avoid;
    }
    h3 {
      font-size: 13pt;
      margin-top: 12px;
      margin-bottom: 8px;
      page-break-after: avoid;
      break-after: avoid;
    }
    h4, h5, h6 {
      font-size: 11pt;
      margin-top: 10px;
      margin-bottom: 6px;
      page-break-after: avoid;
      break-after: avoid;
    }
    p {
      margin-bottom: 10px;
      text-align: left;
    }
    ul, ol {
      margin-left: 30px;
      margin-bottom: 10px;
    }
    li { margin-bottom: 5px; }
    code {
      background: #f0f0f0;
      padding: 2px 4px;
      font-family: Courier, monospace;
      font-size: 10pt;
    }
    pre {
      background: #f0f0f0;
      padding: 12px;
      margin-bottom: 10px;
      page-break-inside: avoid;
      break-inside: avoid;
      font-family: Courier, monospace;
      font-size: 9pt;
      overflow: hidden;
    }
    pre code { background: none; padding: 0; }
    blockquote {
      border-left: 3px solid #000;
      padding-left: 15px;
      margin-left: 0;
      margin-bottom: 10px;
      color: #333;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 10px;
      page-break-inside: avoid;
      break-inside: avoid;
      font-size: 10pt;
    }
    th, td {
      border: 1px solid #000;
      padding: 8px;
      text-align: left;
    }
    th { background: #e0e0e0; }
    hr {
      border: none;
      border-top: 1px solid #000;
      margin: 15px 0;
      page-break-after: always;
      break-after: page;
    }
    a { color: #000; text-decoration: underline; }
    strong { font-weight: bold; }
    em { font-style: italic; }
  </style>
</head>
<body>
  ${htmlContent}
</body>
</html>`;
    
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 1000 });
    
    console.log('🎨 Rendering to PDF...');
    
    // Load the HTML directly
    await page.setContent(fullHtml, { waitUntil: 'networkidle0' });
    
    console.log('📄 Writing PDF...');
    
    // Generate PDF
    const pdfResult = await page.pdf({
      path: pdfPath,
      format: 'A4',
      margin: {
        top: '0.4in',
        right: '0.4in',
        bottom: '0.4in',
        left: '0.4in'
      },
      displayHeaderFooter: false,
      printBackground: false,
      scale: 1
    });
    
    console.log('📄 PDF written to disk');

    await browser.close();
    
    // Get file size
    const stats = fs.statSync(pdfPath);
    const fileSizeMB = (stats.size / 1024 / 1024).toFixed(2);
    
    console.log(`\n✅ PDF generated successfully!`);
    console.log(`📍 Location: ${pdfPath}`);
    console.log(`📊 File size: ${fileSizeMB} MB`);
    console.log(`📅 Created at: ${stats.mtime.toLocaleString()}`);
    console.log(`📄 Complete guide with all chapters included.`);
    console.log(`=== PDF Generation Completed ===\n`);
    
  } catch (error) {
    console.error('❌ Error generating PDF:', error.message);
    if (browser) await browser.close();
    process.exit(1);
  }
})();
