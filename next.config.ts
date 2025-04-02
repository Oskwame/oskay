import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dnrygejqn/**', // ' your actual Cloudinary cloud name
      },
    ],
  },
  experimental: {
    //    appDir: true, // Enable the `app` directory
  },
  reactStrictMode: true, // Enable React strict mode
};

export default nextConfig;
