"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Outfit, Oswald } from "next/font/google";
import { ReactLenis } from "lenis/react";
import "../styles/index.css";

const outfit = Outfit({ subsets: ["latin"] });
const oswald = Oswald({ 
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald"
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${outfit.className} ${oswald.variable}`} suppressHydrationWarning>
        <ReactLenis root>
          <Providers>
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </Providers>
        </ReactLenis>
      </body>
    </html>
  );
}

import { Providers } from "./providers";

