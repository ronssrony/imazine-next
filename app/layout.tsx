import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/layout/Navigation";
import { Crimson_Pro } from 'next/font/google'

const crimsonPro = Crimson_Pro({
    subsets: ['latin'],
    variable: '--font-crimson',
    weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
  title: "Imazine",
  description: "REACT + NEXT + TAILWIND CSS + TYPESCRIPT + SHADCN UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={crimsonPro.variable}>
      <body
        className={``}
      >
        <Navigation />
        <main className="min-h-screen pt-24">{children}</main>
      </body>
    </html>
  );
}
