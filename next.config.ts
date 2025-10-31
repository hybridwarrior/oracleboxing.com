import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.oracleboxing.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      // YouTube Bio Short Links
      {
        source: '/6wc-yt-bio',
        destination: '/6wc?utm_source=youtube&utm_medium=bio&utm_content=challenge',
        permanent: false,
      },
      {
        source: '/course-yt-bio',
        destination: '/courses/bundle?utm_source=youtube&utm_medium=bio&utm_content=course',
        permanent: false,
      },
      {
        source: '/membership-yt-bio',
        destination: '/membership?utm_source=youtube&utm_medium=bio&utm_content=membership',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
