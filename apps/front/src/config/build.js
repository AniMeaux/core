module.exports = {
  vendor: ['apisauce', 'moment'],
  postcss: [
    require('autoprefixer'),
  ],
  extend(config, ctx) {
    if (ctx.isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
      });
    }
  },
};
