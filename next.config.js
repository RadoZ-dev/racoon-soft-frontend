/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wp-headless.ddev.site',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig