/**
 * Generate favicon.ico from PNG
 * Run: node scripts/generate-ico.mjs
 */

import pngToIco from 'png-to-ico';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');

async function generateIco() {
  console.log('🎨 Generating favicon.ico...\n');

  const pngFiles = [
    path.join(publicDir, 'favicon-16x16.png'),
    path.join(publicDir, 'favicon-32x32.png')
  ];

  const ico = await pngToIco(pngFiles);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), ico);
  
  console.log('✅ favicon.ico created with 16x16 and 32x32 sizes');
}

generateIco().catch(console.error);

