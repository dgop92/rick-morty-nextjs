/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["rickandmortyapi.com"],
    // formats: ["image/jpg"],
  },
};

module.exports = nextConfig;
