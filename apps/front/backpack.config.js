module.exports = {
  webpack: (config) => {
    // eslint-disable-next-line
    config.entry.main = './src/server/index.js';
    return config;
  },
};
