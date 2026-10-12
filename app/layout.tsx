import CursorGlow from "@/components/ui/CursorGlow";
import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
  title: "Fotsing Ndigue Devy | DevOps Engineer",
  description:
    "Portfolio de Fotsing Ndigue Devy — Ingénieur DevOps en formation. Projets, compétences et expériences.",
  authors: [{ name: "Fotsing Ndigue Devy" }],
  keywords: ["DevOps", "Next.js", "TypeScript", "Cloud", "Kubernetes"],
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
