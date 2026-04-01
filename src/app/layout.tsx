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

export const metadata: Metadata = {
  title: "Plan Tu Primera Importación Rentable",
  description:
    "Descubre el método YUAN para construir un negocio rentable importando directamente desde China.",
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
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/hero-bg.webp"
          fetchPriority="high"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#010610] text-white font-[family-name:var(--font-montserrat)]">
        {children}
      </body>
    </html>
  );
}
