// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    minimumCacheTTL: 60,
  },
  experimental: {
    optimizeCss: true, // Enable CSS optimization
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Custom webpack configuration for optimization
  webpack: (config, { dev, isServer }) => {
    // Optimize SVG imports
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Production optimizations
    if (!dev && !isServer) {
      // Enable tree shaking
      config.optimization.usedExports = true;
    }

    return config;
  },
}

export default nextConfig;