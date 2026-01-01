/**
 * Generate favicon and apple-touch-icon from SVG
 * Run: node scripts/generate-icons.mjs
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

// SVG template for the SN monogram icon
const createIconSvg = (size) => {
  const fontSize = Math.round(size * 0.28);
  const y1 = Math.round(size * 0.42);
  const y2 = Math.round(size * 0.72);
  const rx = Math.round(size * 0.22);
  
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1a1f2e"/>
      <stop offset="100%" style="stop-color:#12161f"/>
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" rx="${rx}" fill="url(#bg)"/>
  <text x="${size/2}" y="${y1}" font-family="Arial, sans-serif" font-size="${fontSize}" font-weight="800" fill="#d4956a" text-anchor="middle" dominant-baseline="middle">S</text>
  <text x="${size/2}" y="${y2}" font-family="Arial, sans-serif" font-size="${fontSize}" font-weight="800" fill="#efe9e0" text-anchor="middle" dominant-baseline="middle">N</text>
</svg>`;
};

async function generateIcons() {
  console.log('🎨 Generating icon files...\n');

  // Generate apple-touch-icon.png (180x180)
  const appleTouchSvg = Buffer.from(createIconSvg(180));
  await sharp(appleTouchSvg)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('✅ apple-touch-icon.png (180x180)');

  // Generate favicon-32x32.png
  const favicon32Svg = Buffer.from(createIconSvg(32));
  await sharp(favicon32Svg)
    .png()
    .toFile(path.join(publicDir, 'favicon-32x32.png'));
  console.log('✅ favicon-32x32.png');

  // Generate favicon-16x16.png
  const favicon16Svg = Buffer.from(createIconSvg(16));
  await sharp(favicon16Svg)
    .png()
    .toFile(path.join(publicDir, 'favicon-16x16.png'));
  console.log('✅ favicon-16x16.png');

  // Generate favicon.ico (multi-resolution ICO)
  // For ICO, we'll create a 32x32 version and use it as favicon.ico
  // Sharp doesn't support ICO directly, so we'll create a PNG that browsers can use
  await sharp(favicon32Svg)
    .png()
    .toFile(path.join(publicDir, 'favicon.png'));
  console.log('✅ favicon.png (32x32)');

  // Generate android-chrome icons for manifest
  const chrome192Svg = Buffer.from(createIconSvg(192));
  await sharp(chrome192Svg)
    .png()
    .toFile(path.join(publicDir, 'android-chrome-192x192.png'));
  console.log('✅ android-chrome-192x192.png');

  const chrome512Svg = Buffer.from(createIconSvg(512));
  await sharp(chrome512Svg)
    .png()
    .toFile(path.join(publicDir, 'android-chrome-512x512.png'));
  console.log('✅ android-chrome-512x512.png');

  console.log('\n✨ All icons generated successfully!');
}

generateIcons().catch(console.error);
