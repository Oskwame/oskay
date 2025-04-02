import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oskwame.vercel.app";
  
    const robotsTxt = `User-agent: *
  Allow: /
  disallow: {}
  
  Sitemap: ${baseUrl}/sitemap.xml`;
  
    res.setHeader("Content-Type", "text/plain");
    res.status(200).send(robotsTxt);
  }
  