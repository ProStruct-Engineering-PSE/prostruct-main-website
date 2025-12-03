import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'prostructengineering.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'prostructengineering.com',
        port: '',
        pathname: '/wp-content/themes/**',
      },
    ],
  },
};

export default nextConfig;
