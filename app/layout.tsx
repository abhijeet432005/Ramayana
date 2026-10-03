import type { Metadata, Viewport } from "next";
import { Tiro_Devanagari_Hindi, Hind, Rozha_One } from "next/font/google";
import "./globals.css";
const display = Tiro_Devanagari_Hindi({ subsets: ["devanagari", "latin"], weight: "400", style: ["normal", "italic"], variable: "--display" });
const display2 = Rozha_One({ subsets: ["devanagari", "latin"], weight: "400", variable: "--display2" });
const body = Hind({ subsets: ["devanagari", "latin"], weight: ["300", "400", "500"], variable: "--body" });
export const metadata: Metadata = { title: "रामायण — an immersive retelling", description: "A horizontally scrolling WebGL retelling of the Ramayana with an immersive Indian soundscape.", openGraph: { title: "रामायण — an immersive retelling", description: "Shri Rama's full journey, from birth to Diwali.", type: "website", images: ["/img/hero.webp"] }, icons: { icon: "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 100 100%27%3E%3Ctext y=%27.9em%27 font-size=%2790%27%3E🪔%3C/text%3E%3C/svg%3E" } };
export const viewport: Viewport = { themeColor: "#f1e0c6", width: "device-width", initialScale: 1 };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="hi" suppressHydrationWarning className={`${display.variable} ${display2.variable} ${body.variable}`}><body>{children}</body></html>;
}
