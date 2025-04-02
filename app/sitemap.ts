import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://oskwame.vercel.app";
  
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>${baseUrl}</loc>
          <changefreq>monthly</changefreq>
          <priority>1.0</priority>
        </url>
      </urlset>`;
  
    res.setHeader("Content-Type", "text/xml");
    res.status(200).send(sitemap);
  }
  