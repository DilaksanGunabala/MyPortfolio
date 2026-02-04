import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Dilaksan | Full-Stack Developer & Data Science Enthusiast",
  description:
    "Portfolio of Gunabala Dilaksan — Computer Engineering undergraduate, Full-Stack Developer, and Data Science & AI Enthusiast based in Jaffna, Sri Lanka.",
  keywords: [
    "Gunabala Dilaksan",
    "Dilaksan",
    "Full-Stack Developer",
    "Computer Engineering",
    "Data Science",
    "AI",
    "Machine Learning",
    "React",
    "Next.js",
    "Portfolio",
    "University of Jaffna",
    "Sri Lanka",
  ],
  authors: [{ name: "Gunabala Dilaksan" }],
  creator: "Gunabala Dilaksan",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Dilaksan | Full-Stack Developer & Data Science Enthusiast",
    description:
      "Portfolio of Gunabala Dilaksan — Computer Engineering undergraduate specializing in full-stack development, AI, and data-driven solutions.",
    siteName: "Dilaksan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dilaksan | Full-Stack Developer & Data Science Enthusiast",
    description:
      "Portfolio of Gunabala Dilaksan — Computer Engineering undergraduate specializing in full-stack development, AI, and data-driven solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
