/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    turbopack: false,
  },
  generateBuildId: async () => 'build',
  productionBrowserSourceMaps: false,
  compress: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "https://eduecosystem-backend-503001969959.us-central1.run.app",
  },
};

export default nextConfig;
