/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "imagepicker.s3.ir-thr-at1.arvanstorage.com",
      "images.unsplash.com",
      "www.w3schools.com",
    ],
  },
};

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "_variables.scss";`,
  },
};

module.exports = nextConfig;
