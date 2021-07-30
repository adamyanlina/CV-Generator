require('dotenv').config();

const express = require('express');
const handlebars = require('handlebars');
const exphbs = require('express-handlebars')

const router = require('./src/routes');

const app = express();

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'src/views');

const { env } = process;

const port = env.PORT || 7000;
const apiVersion = env.api_VERSION || '/api/v1.0';

app.use(express.static('./src/public'));

app.use(apiVersion, router);

const server = () => app
  .listen(port, () => console.log(`Server listen ${port} port.`))
  .on('error', (err) => { if (err) { throw err }});

server();

process.on('SIGTERM', () => server().close(() => process.exit(0)));
