import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BuildSkull — Premium Web Development Agency",
  description:
    "We build fast, premium, growth-focused websites for startups, local businesses, gyms, creators, and modern brands. Modern websites that actually grow businesses.",
  keywords: [
    "web development agency",
    "premium websites",
    "startup websites",
    "Next.js agency",
    "custom web design",
    "business websites",
    "BuildSkull",
  ],
  openGraph: {
    title: "BuildSkull — Modern Websites That Actually Grow Businesses",
    description:
      "Premium, fast, and growth-focused websites for businesses that deserve better online presence.",
    type: "website",
    locale: "en_US",
    siteName: "BuildSkull",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildSkull — Modern Websites That Actually Grow Businesses",
    description:
      "Premium, fast, and growth-focused websites for businesses that deserve better online presence.",
  },
  robots: { index: true, follow: true },
  authors: [{ name: "BuildSkull" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen bg-[#fcfcfc] text-black antialiased overflow-x-hidden font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
