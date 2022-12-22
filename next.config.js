/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config")
const { loadCustomBuildParams } = require('./next-utils.config')

const { esmExternals = false, tsconfigPath } = loadCustomBuildParams()

const nextConfig = {
  async redirects() {
    return [
      {
        source: `${process.env.BASE_PATH}`,
        destination: "/",
        permanent: true,
      },
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    esmExternals, // https://nextjs.org/blog/next-11-1#es-modules-support
  },
  i18n,
  reactStrictMode: true,
  typescript: {
    tsconfigPath,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
