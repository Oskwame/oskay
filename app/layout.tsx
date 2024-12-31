
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Os Kwame",
  description: "Portfolio of Os Kwame showcasing skills and services.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
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
