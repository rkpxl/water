"use client";

import Footer from "@/components/Footer";
import Head from 'next/head';
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <Head>
        <title>Revolutionize Your Research with  Knowledge Link | Streamline & Collaborate</title>
        <meta name="description" content="Discover how  Knowledge Link transforms research management with AI-driven insights, global collaboration, and customizable workflows. Start your free trial today." />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourwebsite.com/" />
        <meta property="og:title" content="Revolutionize Your Research with  Knowledge Link" />
        <meta property="og:description" content="Streamline your research process with our AI-driven platform, enhancing collaboration and productivity across global teams." />
        <meta property="og:image" content="https://www.yourwebsite.com/images/og-image.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.yourwebsite.com/" />
        <meta property="twitter:title" content="Revolutionize Your Research with  Knowledge Link" />
        <meta property="twitter:description" content="Unlock new levels of efficiency and collaboration in your research projects with  Knowledge Link. Start your journey today." />
        <meta property="twitter:image" content="https://www.yourwebsite.com/images/twitter-image.jpg" />
        
        <meta name="keywords" content="research management software, CRM for research, academic collaboration tools, project management for researchers, data analysis platform, productivity tools for academics, research data management, cloud-based research tools" />
      
        <link rel="canonical" href="https://www.yourwebsite.com/" />
      </Head>
      

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
