/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  productionBrowserSourceMaps: false,
  compress: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizeCss: false,
    workerThreads: false,
    cpus: 1,
    memoryBasedWorkersCount: true,
  },
  staticPageGenerationTimeout: 300,


  turbopack: {},
  webpack: (config, { dev, isServer }) => {
    // Force webpack to clear memory usage aggressively
    config.cache = false;
    
    if (!dev) {
      config.optimization.minimize = true;
    }
    return config;
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "https://a7z4kjysmp.us-east-1.awsapprunner.com",
  },
};

module.exports = nextConfig;

