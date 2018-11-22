import express from 'express';
import { Nuxt, Builder } from 'nuxt';
import http from 'http';
import redirectSSL from 'redirect-ssl';

const app = express();
const port = process.env.PORT || 8080;


app.enable('trust proxy');
app.set('port', port);

if (process.env.NODE_ENV === 'production') {
  app.use(redirectSSL);
}

// Import and Set Nuxt.js options
const config = require('../../nuxt.config.js');

config.dev = !(process.env.NODE_ENV === 'production');

// Init Nuxt.js
const nuxt = new Nuxt(config);

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt);
  builder.build();
}

// Give nuxt middleware to express
app.use(nuxt.render);

http.createServer(app).listen(port, () => {
  console.log(`Server listening on ${port}`); // eslint-disable-line no-console
});
