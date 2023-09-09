/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APP_URL: 'http://localhost:3000',
    API_BASE_URL: 'http://localhost:3000/api'
  },
  images: {
    domains: ['localhost']
  }
}

module.exports = nextConfig
