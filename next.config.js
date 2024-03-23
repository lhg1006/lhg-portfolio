module.exports = {
    async rewrites() {
      return [
          {
              source : '/:path*',
              destination : 'http://localhost:6066/:path*'
          }
      ]
    },
    experimental: {
        appDir: true,
    },
    // ...다른 Next.js 설정 옵션...
};