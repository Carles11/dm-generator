/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // !! WARN !!
  // Dangerously allow production builds to successfully complete even if
  // your project has type errors.
  // !! WARN !!
  // ignoreBuildErrors: false,
  experimental: {
    appDir: true, // https://nextjs.org/docs/messages/experimental-app-dir-config
  },
}

module.exports = nextConfig
