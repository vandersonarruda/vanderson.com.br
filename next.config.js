/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['s3.us-east-2.amazonaws.com'],
    // loader: 'custom',
  },
}

module.exports = nextConfig
