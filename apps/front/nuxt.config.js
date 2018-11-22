const head = require('./src/config/head');
const modules = require('./src/config/modules');
const plugins = require('./src/config/plugins');
const build = require('./src/config/build');
const css = require('./src/config/css');
const loading = require('./src/config/loading');
const env = require('./src/config/env');
const auth = require('./src/config/auth');
const localforage = require('./src/config/localforage');
const router = require('./src/config/router');
const sitemap = require('./src/config/sitemap');

module.exports = {
  head,
  srcDir: 'src/',
  css,
  modules,
  plugins,
  build,
  loading,
  env,
  auth,
  localforage,
  router,
  sitemap,
};
