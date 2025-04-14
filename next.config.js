/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['image.lexica.art', 'api.remove.bg'],
    unoptimized: true,
  },
  experimental: {
    optimizeFonts: true,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
}

module.exports = nextConfig; 