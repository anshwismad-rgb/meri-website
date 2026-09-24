import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import MotionRuntime from "./components/MotionRuntime";
import { Backdrop, FloatingActions, ScrollProgress } from "./components/Chrome";
import { site } from "@/lib/site";

const jakarta = localFont({
  src: "./fonts/PlusJakartaSans-latin.woff2",
  weight: "200 800",
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "WISMAD — Website Development & Digital Marketing Agency in Lucknow",
    template: "%s | WISMAD",
  },
  description:
    "WISMAD builds websites, e-commerce stores and mobile apps, and runs SEO, Google Ads and social media marketing for businesses in India, the UK, USA, Canada and Australia.",
  openGraph: { siteName: "WISMAD", type: "website", locale: "en_IN" },
};

export const viewport: Viewport = { themeColor: "#1a5fdb" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={jakarta.variable} suppressHydrationWarning>
      <head>
        {/* Marks the document as JS-capable before first paint so scroll-reveal
            styles apply without a flash; no-JS visitors see everything. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <ScrollProgress />
        <Backdrop />
        <div className="relative">
          <Nav />
          <main id="main">{children}</main>
        </div>
        <Footer />
        <FloatingActions />
        <MotionRuntime />
      </body>
    </html>
  );
}
