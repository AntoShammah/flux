/** @type {import('next').NextConfig} */
const nextConfig = {
  // Acknowledges Turbopack to silence configuration conflicts
  turbopack: {},
  // Optional: If you are on an earlier Next.js 16 build, use:
  // experimental: { turbo: {} },
  
  // Forces module resolution for icons and CSS
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
};

module.exports = nextConfig;
