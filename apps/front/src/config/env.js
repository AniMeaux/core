const production = require('./env/production');
const development = require('./env/development');

module.exports = process.env.NODE_ENV === 'production' ? production : development;
