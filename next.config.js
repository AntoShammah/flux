/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disables the experimental Turbopack to use the stable Webpack engine
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
};

module.exports = nextConfig;
