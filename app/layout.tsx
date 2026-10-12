import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CursorGlow from "@/components/ui/CursorGlow";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-fotsingndiguedevy-dev.vercel.app"),
  title: {
    default: "Fotsing Ndigue Devy | DevOps Engineer",
    template: "%s | Fotsing Ndigue Devy",
  },
  description:
    "Portfolio de Fotsing Ndigue Devy — Ingénieur DevOps en formation. Découvrez mes projets, compétences et mon parcours vers le cloud et Kubernetes.",
  authors: [{ name: "Fotsing Ndigue Devy" }],
  creator: "Fotsing Ndigue Devy",
  keywords: [
    "DevOps",
    "Engineer",
    "Next.js",
    "TypeScript",
    "Cloud",
    "Kubernetes",
    "Docker",
    "Terraform",
    "AWS",
    "Fotsing Ndigue Devy",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://portfolio-fotsingndiguedevy-dev.vercel.app",
    siteName: "Devy.dev",
    title: "Fotsing Ndigue Devy | DevOps Engineer",
    description:
      "Portfolio d'un futur ingénieur DevOps — projets, compétences et parcours.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fotsing Ndigue Devy | DevOps Engineer",
    description:
      "Portfolio d'un futur ingénieur DevOps — projets, compétences et parcours.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${jetbrainsMono.variable} ${inter.variable}`}>
      <body className="bg-bg text-text font-mono antialiased min-h-screen flex flex-col">
        <CursorGlow />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
