import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dnrygejqn/**', // Replace 'dnrygejqn' with your actual Cloudinary cloud name
      },
    ],
  },
};

export default nextConfig;
  