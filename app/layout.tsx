import type { Metadata } from "next";
import { Inter, Inter_Tight, Space_Grotesk } from "next/font/google";
import "./globals.css";
import FX from "@/components/FX";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/experience/SmoothScroll";
import AmbientFX from "@/components/experience/AmbientFX";
import LoadingScreen from "@/components/experience/LoadingScreen";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-tight",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brandmotion.in"),
  title: {
    default: "Brand Motion Studios — A Design Archive in Motion",
    template: "%s — Brand Motion Studios",
  },
  description:
    "A premium archive of cinematic, scroll-driven websites — with the exact prompt and complete source code behind each one. From the studio behind brandmotion.in.",
  openGraph: {
    title: "Brand Motion Studios",
    description:
      "A premium archive of cinematic websites — prompts, design systems and production-ready source code.",
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
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} ${grotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important;filter:none!important}`}</style>
        </noscript>
        <LoadingScreen />
        <SmoothScroll />
        <AmbientFX />
        <FX />
        <div className="bg-grid fixed inset-0 -z-10 pointer-events-none" />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
