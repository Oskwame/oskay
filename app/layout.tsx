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
    default: "Os Kwame",
    template: "%s / Os Kwame",
  },
  keywords:
    "Os Kwame, portfolio, web development, javascript, software engineer, front-end developer, programmer, build website, full-stack developer",
  other: {
    "": "",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head>

        {/* <meta name="google-site-verification" content={metadata.other["google-site-verification"]} /> */}
        <meta name="description" content={metadata.openGraph.description} />
        <meta name="keywords" content={metadata.keywords} />
        <title>{metadata.title.default}</title>
      </head>
      <body className={`${inter.className}`}>
        <main className="container mx-auto px-5 md:px-7 lg:px-10 mt-8">
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
