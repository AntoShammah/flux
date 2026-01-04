/** @type {import('next').NextConfig} */
const nextConfig = {
  // This forces Webpack to be more stable during the build
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
};

module.exports = nextConfig;
