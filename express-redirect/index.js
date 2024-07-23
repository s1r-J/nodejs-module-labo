const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(helmet());

app.set('view engine', 'ejs');
app.set("views", "views");

app.get('/', (req, res) => {
  res.render('./index.ejs', {
    greeting: `hello(${new Date().toISOString()})`, 
  });
});

app.get('/redirect', (req, res) => {
  res.redirect(302, './landing');
});

app.get('/landing', (req, res) => {
  res.render('./index.ejs', {
    greeting: `redirect(${new Date().toISOString()})`, 
  });
});

const server = app.listen(0, () => {
  console.log(server.address().port);
});
