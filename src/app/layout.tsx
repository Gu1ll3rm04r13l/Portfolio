import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Self-hosted Inter (variable) — no Google Fonts fetch, works offline.
const inter = localFont({
  src: "./fonts/InterVariable.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Guillermo Ariel del Fresno | Full Stack Developer",
  description:
    "Full Stack Developer especializado en React, Next.js y Node.js. QA Automation con Java & Selenium. Certificado Tech Developer — Digital House.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "QA Automation",
    "Selenium",
    "TypeScript",
    "Guillermo del Fresno",
    "Portfolio",
    "Argentina",
  ],
  authors: [{ name: "Guillermo Ariel del Fresno" }],
  openGraph: {
    title: "Guillermo Ariel del Fresno | Full Stack Developer",
    description:
      "Full Stack Developer especializado en React, Next.js y Node.js. QA Automation con Java & Selenium.",
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guillermo Ariel del Fresno | Full Stack Developer",
    description: "Full Stack Developer — React · Next.js · Node.js · QA Automation",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.variable} font-sans bg-[#09090b] text-zinc-50`}>
        {children}
      </body>
    </html>
  );
}
