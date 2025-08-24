import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/layout/Navigation";
import { Crimson_Pro } from 'next/font/google'
import ScrollSmootherWrapper from "@/app/components/gsap/ScrollSmootherWrapper";
import Hero from "./components/Hero";

const crimsonPro = Crimson_Pro({
    subsets: ['latin'],
    variable: '--font-crimson',
    weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
  title: "Imazine - Leading Software Company in Bangladesh",
  description: "Imazine is a top software company in Bangladesh, delivering innovative solutions across multiple sectors. From legacy systems to trending technologies, we empower businesses with expert software development and digital transformation.",
  keywords: [
    "Software Company Bangladesh",
    "Custom Software Development",
    "Digital Transformation",
    "Legacy System Modernization",
    "Trending Technologies",
    "IT Solutions Bangladesh",
    "Imazine"
  ],
  authors: [{ name: "Imazine" }],
  openGraph: {
    title: "Imazine - Leading Software Company in Bangladesh",
    description: "Expert software development and digital solutions for businesses in Bangladesh and beyond.",
    url: "https://imazine.com",
    siteName: "Imazine",
    locale: "en_US",
    type: "website",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${crimsonPro.variable} font-sans antialiased bg-white text-foreground`}
      >
        <Hero/>
        <ScrollSmootherWrapper>
            <Navigation />
        <main className="min-h-screen relative pt-24">{children}</main>
        </ScrollSmootherWrapper>
      </body>
    </html>
  );
}
