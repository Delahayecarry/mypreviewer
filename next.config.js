/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imagebed.carrydelahaye.work",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
  output: 'standalone',
};

module.exports = nextConfig;
