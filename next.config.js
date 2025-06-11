/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',            // required for static export
  images: {
    unoptimized: true          // disables _next/image for static hosting
  },

};

module.exports = nextConfig;




