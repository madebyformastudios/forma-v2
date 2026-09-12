/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/projects/vesta-homes',
        destination: '/',
        permanent: true,
      },
      {
        source: '/projects/lumina-app',
        destination: '/',
        permanent: true,
      },
      {
        source: '/projects/van-helteren',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
