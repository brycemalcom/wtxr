import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.west-texas.com"),
  title: {
    default: "West Texas Resources, Inc. (WTXR) — Legacy Fields. Modern Recovery.",
    template: "%s · West Texas Resources",
  },
  description:
    "West Texas Resources, Inc. (WTXR) acquires, remediates, and redevelops mature oil and gas fields using modern recovery technology, disciplined field operations, and decades of technical experience.",
  keywords: [
    "West Texas Resources",
    "WTXR",
    "energy",
    "oil and gas",
    "legacy fields",
    "enhanced oil recovery",
    "field redevelopment",
    "investors",
  ],
  openGraph: {
    title: "West Texas Resources, Inc. (WTXR)",
    description: "Legacy Fields. Modern Recovery.",
    type: "website",
    url: "https://www.west-texas.com",
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
      className={`${inter.variable} ${sora.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-text-primary">
        <SmoothScrollProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
