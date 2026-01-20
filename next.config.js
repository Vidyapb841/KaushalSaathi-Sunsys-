/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Add this for static export
  trailingSlash: true, // Helps with routing
  images: {
    unoptimized: true, // Required for static export
  },
  experimental: {
    missingSuspenseWithCSRBailout: false, // DISABLE THE SUSPENSE CHECK
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Cache-Control', value: 'no-store, max-age=0' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
