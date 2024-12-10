import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    dynamicIO: true,
    reactCompiler: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'lipsum.app',
      },
    ],
  },
};

export default nextConfig;
