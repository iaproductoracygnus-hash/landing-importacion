import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";
import sharp from "sharp";

export const alt = "Plan Tu Primera Importación Rentable";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // Satori (used by ImageResponse) does not support WebP — convert to JPEG
  const heroBg = await sharp(
    await readFile(path.join(process.cwd(), "public/images/hero-bg.webp"))
  )
    .jpeg({ quality: 85 })
    .toBuffer();

  const logo = await sharp(
    await readFile(path.join(process.cwd(), "public/images/logo-plan.webp"))
  )
    .png()
    .toBuffer();

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          position: "relative",
        }}
      >
        {/* Hero background — use JPEG (Satori doesn't support WebP) */}
        <img
          src={`data:image/jpeg;base64,${heroBg.toString("base64")}`}
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "1200px",
            height: "630px",
          }}
        />
        {/* Logo bottom-left */}
        <img
          src={`data:image/png;base64,${logo.toString("base64")}`}
          style={{
            position: "absolute",
            bottom: "48px",
            left: "52px",
            width: "260px",
            height: "96px",
          }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
