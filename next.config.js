/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["e3.365dm.com"],
    unoptimized: true,
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  experimental: {
    scrollRestoration: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
