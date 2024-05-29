/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: () => ({
    fallback: [
      {
        source: '/api/:path*',
        destination: `https://leaves.mintlify.com/api/dashboard/:path*`,
      },
    ],
  }),
};

export default nextConfig;
