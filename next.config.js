/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // Essential for static export
  basePath: isProd ? '/pRewa_website' : '', // Adjust based on your repo name
  assetPrefix: isProd ? '/pRewa_website/' : '', // Adjust based on your repo name
  images: {
    unoptimized: true, // <-- This is key for GitHub Pages
  },
};

module.exports = nextConfig;
