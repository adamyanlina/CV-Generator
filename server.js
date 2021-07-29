'use strict';
require('dotenv').config();

const express = require('express');

const router = require('./src/routes');

const app = express();

const { env } = process;

const port = env.PORT || 7000;
const serviceVersion = env.SERVICE_VERSION || '/service/v1.0';

app.use(express.static('./src/public'));
// app.set('view engine', 'ejs');

app.use(serviceVersion, router);

const server = () => app
  .listen(port, () => console.log(`Server listen ${port} port.`))
  .on('error', (err) => { if (err) { throw err }});

server();

process.on('SIGTERM', () => server().close(() => process.exit(0)));
