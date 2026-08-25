#!/usr/bin/env pwsh

# Build all outputs for Data Archivist Guide
# Generates: HTML, combined markdown, print HTML, and PDF

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Data Archivist Guide - Full Build" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$ErrorActionPreference = "Stop"

try {
    Write-Host "[1/4] Building HTML documentation..." -ForegroundColor Yellow
    npm run docs:build
    
    Write-Host ""
    Write-Host "[2/4] Combining markdown files..." -ForegroundColor Yellow
    npm run guide:combine
    
    Write-Host ""
    Write-Host "[3/4] Generating print HTML..." -ForegroundColor Yellow
    npm run guide:print
    
    Write-Host ""
    Write-Host "[4/4] Generating PDF..." -ForegroundColor Yellow
    npm run guide:pdf
    
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "  ✅ Build complete!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Generated files:" -ForegroundColor Green
    Write-Host "  • HTML: docs\.vitepress\dist\" -ForegroundColor Green
    Write-Host "  • PDF: docs\public\Guide-for-Data-Archivists.pdf" -ForegroundColor Green
    Write-Host "  • Markdown: docs\public\guide-combined.md" -ForegroundColor Green
    Write-Host ""
}
catch {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Red
    Write-Host "  ❌ Build failed!" -ForegroundColor Red
    Write-Host "========================================" -ForegroundColor Red
    Write-Host ""
    Write-Host $_.Exception.Message -ForegroundColor Red
    exit 1
}
