module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'airbnb',
  // required to lint *.vue files
  plugins: [
    'html',
    'import',
  ],
  // add your custom rules here
  rules: {
    'no-irregular-whitespace': 0,
    "no-param-reassign": 0,
    "global-require": 0,
    "prefer-destructuring": 0,
    "no-console": process.env.NODE_ENV === 'production' ? ["error", { allow: ["warn", "error"] }] : 0,
    "no-restricted-globals": 0,
    "arrow-body-style": 0,
    "linebreak-style": 0,
    "import/no-unresolved": 0,
    "import/extensions": ["off", "never"],
  },
  globals: {},
  settings: {
    'import/resolver': {
      webpack: 'webpack.config.js',
    },
  },
}
