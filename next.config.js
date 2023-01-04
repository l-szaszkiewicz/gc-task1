/** @type {import('next').NextConfig} */
const nextConfig = {  
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'sklepdemo.gocreate.pl',
        port: ''
      },
    ],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
