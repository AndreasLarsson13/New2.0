const { i18n } = require("./next-i18next.config");
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV !== "production",
  runtimeCaching,
});

module.exports = withPWA({
  i18n,
  images: {
    domains: ['localhost', 'scontent.cdninstagram.com', 'www.tapwell.fi'], // Add the localhost domain here
  },
  typescript: {
    ignoreBuildErrors: true,
  },
});
