/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',            // required for static export
  images: {
    unoptimized: true          // disables _next/image for static hosting
  },
  basePath: '/pRewa_website',  // important for GitHub Pages
  assetPrefix: '/pRewa_website', // ensures correct URL resolution
};

module.exports = nextConfig;




