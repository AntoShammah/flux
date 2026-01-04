/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable Turbopack for this specific build to use the Webpack fix below
  experimental: {
    turbo: {
      rules: {
        // Ensures CSS is handled correctly in the new engine
        '*.css': ['postcss-loader'],
      },
    },
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // This stops the "Can't resolve 'module'" and 'fs' errors in the browser
      config.resolve.fallback = {
        ...config.resolve.fallback,
        module: false,
        fs: false,
        path: false,
        os: false,
        crypto: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
