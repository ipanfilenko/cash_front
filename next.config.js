/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'e3.365dm.com',
      },
    ],
    unoptimized: true
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
