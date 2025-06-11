const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/pRewa_website' : '',
  assetPrefix: isProd ? '/pRewa_website/' : '',
};

module.exports = nextConfig;

