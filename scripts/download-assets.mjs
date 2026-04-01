import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';

const BASE = 'https://pages.greatpages.com.br/importaciones.imporfactory.com-plan-tpir-fb-ads-mar2026-v3l1/1774626906/imagens/desktop/';

const assets = [
  { url: '3529898_1_177274618969a9f5cd7684f.webp', name: 'hero-bg.webp' },
  { url: '3529898_1_177274618969a9f5cd76a44059822338.webp', name: 'logo-plan.webp' },
  { url: '3529898_1_177274618969a9f5cd79b3c356079497.webp', name: 'clase1-thumb.webp' },
  { url: '3529898_1_177274618969a9f5cd79b76724451827.svg', name: 'clase1-badge.svg' },
  { url: '3529898_1_177274618969a9f5cd79c1f797077787.webp', name: 'clase2-thumb.webp' },
  { url: '3529898_1_177274618969a9f5cd79c61753426411.svg', name: 'clase2-badge.svg' },
  { url: '3529898_1_177274618969a9f5cd79d09024685248.webp', name: 'clase3-thumb.webp' },
  { url: '3529898_1_177274618969a9f5cd79d43577190670.svg', name: 'clase3-badge.svg' },
  { url: '3529898_1_177274618969a9f5cd7687b.webp', name: 'daniel-about.webp' },
  { url: '3529898_1_177274618969a9f5cd79ece007863928.svg', name: 'info-icon.svg' },
  { url: '3529898_1_177274618969a9f5cd7a0d4138759478.webp', name: 'footer-logo.webp' },
];

async function download(url, dest) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
    const buffer = Buffer.from(await res.arrayBuffer());
    await writeFile(dest, buffer);
    console.log(`OK: ${dest} (${buffer.length} bytes)`);
  } catch (e) {
    console.error(`FAIL: ${dest} - ${e.message}`);
  }
}

async function main() {
  const dir = 'public/images';
  if (!existsSync(dir)) await mkdir(dir, { recursive: true });

  // Download 4 at a time
  for (let i = 0; i < assets.length; i += 4) {
    const batch = assets.slice(i, i + 4);
    await Promise.all(batch.map(a => download(BASE + a.url, `${dir}/${a.name}`)));
  }
  console.log('\nDone! All assets downloaded.');
}

main();
