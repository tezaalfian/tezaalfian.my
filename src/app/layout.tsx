import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { baseUrl } from "./sitemap";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Teza Alfian - Software Engineer",
  description: "An online portfolio, blog, and showcase of my projects.",
  openGraph: {
    type: "website",
    url: baseUrl,
    description: "An online portfolio, blog, and showcase of my projects.",
    title: "Teza Alfian - Software Engineer",
    siteName: "Teza Alfian",
    locale: "en_US",
    images: [
      {
        url: `${baseUrl}/og_image.png`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <GoogleTagManager gtmId="GTM-TZ9NFQ9Q" /> */}
      <GoogleAnalytics gaId="G-C2NZ1PSX6Q" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background font-sans text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
