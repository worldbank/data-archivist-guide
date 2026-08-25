@echo off
REM Build all outputs for Data Archivist Guide
REM Generates: HTML, combined markdown, print HTML, and PDF

echo.
echo ========================================
echo  Data Archivist Guide - Full Build
echo ========================================
echo.

cd /d "%~dp0"

echo [1/4] Building HTML documentation...
npm.cmd run docs:build
if errorlevel 1 goto error

echo.
echo [2/4] Combining markdown files...
npm.cmd run guide:combine
if errorlevel 1 goto error

echo.
echo [3/4] Generating print HTML...
npm.cmd run guide:print
if errorlevel 1 goto error

echo.
echo [4/4] Generating PDF...
npm.cmd run guide:pdf
if errorlevel 1 goto error

echo.
echo ========================================
echo  ✅ Build complete!
echo ========================================
echo.
echo Generated files:
echo   • HTML: docs\.vitepress\dist\
echo   • PDF: docs\public\Guide-for-Data-Archivists.pdf
echo   • Markdown: docs\public\guide-combined.md
echo.
pause
exit /b 0

:error
echo.
echo ========================================
echo  ❌ Build failed!
echo ========================================
echo.
pause
exit /b 1
