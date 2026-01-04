/** @type {import('next').NextConfig} */
const nextConfig = {
  // This satisfies the Next.js 16 requirement to acknowledge Turbopack
  experimental: {
    turbo: {},
  },
  // This handles the module resolution for your icons and styles
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
};

module.exports = nextConfig;
