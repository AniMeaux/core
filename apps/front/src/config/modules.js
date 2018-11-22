const env = require('./env');

module.exports = [
  '@nuxtjs/pwa',
  '@nuxtjs/axios',
  '@nuxtjs/auth',
  '@nuxtjs/localforage',
  '@nuxtjs/sitemap',
  'nuxt-robots-module',
  ['@nuxtjs/google-analytics', {
    id: env.GOOGLE.ANALYTICS.ID,
  }],
  ['nuxt-sass-resources-loader', [
    '~/assets/scss/variables/_colors.scss',
  ]],
];
