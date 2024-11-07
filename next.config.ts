import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/fonts/:path*',
        destination: '/public/fonts/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
