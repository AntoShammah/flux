/** @type {import('next').NextConfig} */
const nextConfig = {
  // Turbopack specific configuration for Next.js 16
  experimental: {
    turbo: {
      resolveAlias: {
        // This stops Turbopack from trying to find Node modules in the browser
        fs: 'empty',
        path: 'empty',
        os: 'empty',
        crypto: 'empty',
        perf_hooks: 'empty',
        module: 'empty',
      },
    },
  },
  // Webpack fallback for standard builds
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
        crypto: false,
        perf_hooks: false,
        module: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
