/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'peru-flamingo-759905.hostingersite.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig