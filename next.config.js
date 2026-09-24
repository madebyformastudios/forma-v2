const cspReportOnly = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://www.google-analytics.com",
  "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com",
  "font-src 'self' data:",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
].join('; ');

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          { key: 'Content-Security-Policy-Report-Only', value: cspReportOnly },
        ],
      },
    ];
  },
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
