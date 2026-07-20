import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brandmotion.in"),
  title: {
    default: "Brand Motion Studios — Prompts, Design & Source Code",
    template: "%s — Brand Motion Studios",
  },
  description:
    "Premium AI prompt packs, design systems and production-ready source code for websites that move. From the studio behind brandmotion.in.",
  openGraph: {
    title: "Brand Motion Studios",
    description:
      "Premium AI prompt packs, design systems and production-ready source code.",
    url: "https://brandmotion.in",
    siteName: "Brand Motion Studios",
    images: ["/assets/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <div className="bg-grid fixed inset-0 -z-10 pointer-events-none" />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
