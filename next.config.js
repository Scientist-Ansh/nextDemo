/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  images: {
    domains: ['media.graphcms.com', 'media.graphassets.com'],
  },
};

module.exports = nextConfig;
