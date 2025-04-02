
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://oskwame.vercel.app"),
  openGraph: {
    description: "Portfolio of Os Kwame showcasing skills and service.",
  },
  title: {
    default:"Os Kwame",
    template: "%s / os kwame-"
  },
  keywords: "Os Kwame, portfolio, web development, javascript, software engineer, front-end developer,programmer,build website, full-stack developer"
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title.default}</title>
        <meta name="description" content={metadata.openGraph.description} />
      </head>
      <body className={`${inter.className}`}>
        {/* Main Content */}
        <main className="container mx-auto px-5 md:px-7 lg:px-10 mt-8">
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
