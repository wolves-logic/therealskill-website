#!/usr/bin/env node
/**
 * Favicon generator for TheRealSkill.com
 * Reads public/favicon.svg → produces all PNG sizes + favicon.ico
 * Run: node scripts/generate-favicons.mjs
 */

import sharp from 'sharp'
import { writeFileSync, readFileSync, copyFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PUBLIC = join(__dirname, '..', 'public')

const SVG = readFileSync(join(PUBLIC, 'favicon.svg'))

async function toPng(size) {
  return sharp(SVG).resize(size, size).png({ compressionLevel: 9 }).toBuffer()
}

/** Encode multiple PNG buffers into a single .ico file. */
function buildIco(images) {
  const count = images.length
  const HEADER = 6
  const ENTRY  = 16
  let offset = HEADER + ENTRY * count

  const header = Buffer.alloc(HEADER)
  header.writeUInt16LE(0, 0)      // reserved
  header.writeUInt16LE(1, 2)      // type: 1 = ICO
  header.writeUInt16LE(count, 4)  // image count

  const entries = images.map(({ w, h, buf }) => {
    const e = Buffer.alloc(ENTRY)
    e.writeUInt8(w >= 256 ? 0 : w, 0)   // width  (0 means 256)
    e.writeUInt8(h >= 256 ? 0 : h, 1)   // height
    e.writeUInt8(0, 2)                   // colour count
    e.writeUInt8(0, 3)                   // reserved
    e.writeUInt16LE(1,  4)               // colour planes
    e.writeUInt16LE(32, 6)               // bits per pixel
    e.writeUInt32LE(buf.length, 8)       // size of image data
    e.writeUInt32LE(offset, 12)          // offset of image data
    offset += buf.length
    return e
  })

  return Buffer.concat([header, ...entries, ...images.map(i => i.buf)])
}

async function main() {
  console.log('🎨  Generating favicons for TheRealSkill.com…\n')

  const specs = [
    { size: 16,  name: 'favicon-16x16.png' },
    { size: 32,  name: 'favicon-32x32.png' },
    { size: 180, name: 'apple-touch-icon.png' },
    { size: 192, name: 'android-chrome-192x192.png' },
    { size: 512, name: 'android-chrome-512x512.png' },
  ]

  for (const { size, name } of specs) {
    const buf = await toPng(size)
    writeFileSync(join(PUBLIC, name), buf)
    console.log(`  ✓  ${name}  (${size}×${size})`)
  }

  // favicon.ico  — contains 32×32 + 16×16 embedded as PNG
  const [buf32, buf16] = await Promise.all([toPng(32), toPng(16)])
  const ico = buildIco([
    { w: 32, h: 32, buf: buf32 },
    { w: 16, h: 16, buf: buf16 },
  ])
  writeFileSync(join(PUBLIC, 'favicon.ico'), ico)
  console.log('  ✓  favicon.ico  (32×32 + 16×16)')

  // Mirror critical files into /app for Next.js App Router auto-detection
  const APP_DIR = join(__dirname, '..', 'app')
  copyFileSync(join(PUBLIC, 'favicon-32x32.png'), join(APP_DIR, 'icon.png'))
  copyFileSync(join(PUBLIC, 'apple-touch-icon.png'), join(APP_DIR, 'apple-icon.png'))
  console.log('  ✓  app/icon.png  (Next.js auto-detect)')
  console.log('  ✓  app/apple-icon.png  (Next.js auto-detect)')

  console.log('\n✅  All favicons written to /public + /app')
}

main().catch(err => { console.error(err); process.exit(1) })
