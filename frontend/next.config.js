/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "imagepicker.s3.ir-thr-at1.arvanstorage.com",
      "images.unsplash.com",
      "www.w3schools.com",
    ],
  },
  swcMinify: true,
  experimental: {
    concurrentFeatures: true,
    serverComponents: true,
  },
};

module.exports = nextConfig;
