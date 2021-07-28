require('dotenv');

const express = require('express');
const logger  = require('log4js').getLogger('server');

const router = require('./src/routes');

const app = express();

const { env } = process;

const port = env.PORT || '5000';
const serviceVersion = env.SERVICE_VERSION || '/service/v1.0';

app.use(express.static('./src/public'));
// app.set('view engine', 'ejs');

app.use(serviceVersion, router);

const server = () => app
  .listen(port, () => logger.info(`Server listen ${port} port.`))
  .on('error', (err) => { if (err) { throw err }});

server();

process.on('SIGTERM', () => server().close(() => process.exit(0)));
