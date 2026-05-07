import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import { Metadata } from "next";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
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
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased overflow-x-hidden" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
