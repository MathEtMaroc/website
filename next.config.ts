import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable strict mode to catch more issues
  reactStrictMode: true,
  
  experimental: {
    viewTransition: true,
    reactCompiler: true,
    // Enable strict head checks
    strictNextHead: true,
  },
  
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  
  // Disable minification for better stack traces (REMOVE AFTER DEBUGGING)
  swcMinify: false,
  
  // Show full error details in browser (REMOVE AFTER DEBUGGING)
  devIndicators: {
    buildActivityPosition: 'bottom-right',
  },
  
  // Optional: Add custom webpack config for source maps
  webpack: (config, { dev, isServer }) => {
    if (!isServer) {
      config.devtool = 'source-map'; // Full source maps
    }
    return config;
  },
};

export default nextConfig;