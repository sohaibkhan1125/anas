/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['image.lexica.art'],
    unoptimized: true,
  },
  experimental: {
    optimizeFonts: true,
  },
}

module.exports = nextConfig 