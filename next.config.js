/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true          // disables _next/image for static hosting
  },
  basePath: isGithubPages ? '/pRewa_website' : '',
  assetPrefix: isGithubPages ? '/pRewa_website/' : '',
};

module.exports = nextConfig;




