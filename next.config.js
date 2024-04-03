module.exports = {
    async rewrites() {
      return [
          {
              source : '/:path*',
              destination : `${process.env.NEXT_PUBLIC_SERVER_URL}/:path*`
          }
      ]
    },
    experimental: {
        appDir: true,
    },
    // ...다른 Next.js 설정 옵션...
};