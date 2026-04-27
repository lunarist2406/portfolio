import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's.wordpress.com',
        port: '',
        pathname: '/mshots/v1/**',
      },
    ],
  },
};

export default nextConfig;