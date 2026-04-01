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
    images: [
      {
        url: "/images/hero-bg.webp",
        width: 1919,
        height: 723,
        alt: "Plan Tu Primera Importación Rentable",
      },
    ],
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plan Tu Primera Importación Rentable",
    description:
      "Descubre el método YUAN para construir un negocio rentable importando directamente desde China.",
    images: ["/images/hero-bg.webp"],
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
