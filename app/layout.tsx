import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Grupo RAIA',
  description: 'Levando o Brasil ao protagonismo em Inteligência Artificial',
  icons: {
    icon: '/icon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative flex flex-col min-h-screen">
          {/* This is for not break the <footer> */}
          <div className="grow bg-gradient-to-t from-secondary via-40% via-background pb-24 sm:pb-32">
          {/* <div className="grow bg-primary-foreground bg-[radial-gradient(#e5e7eb_2px,transparent_1px)] [background-size:16px_16px]"> */}
            <Navbar />
            {children}
            <Analytics />
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
