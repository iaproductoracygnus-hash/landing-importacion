import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Plan Tu Primera Importación Rentable",
  description:
    "Descubre el método YUAN para construir un negocio rentable importando directamente desde China.",
  icons: {
    icon: "/images/logo-plan.webp",
    apple: "/images/logo-plan.webp",
  },
  openGraph: {
    title: "Plan Tu Primera Importación Rentable",
    description:
      "Descubre el método YUAN para construir un negocio rentable importando directamente desde China.",
    type: "website",
    locale: "es_ES",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plan Tu Primera Importación Rentable",
    description:
      "Descubre el método YUAN para construir un negocio rentable importando directamente desde China.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${roboto.variable} h-full antialiased`}
    >
      <head />
      <body className="min-h-full flex flex-col bg-[#010610] text-white font-[family-name:var(--font-montserrat)]">
        {children}
      </body>
    </html>
  );
}
