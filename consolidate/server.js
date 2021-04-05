const express = require('express');
const cons = require('consolidate');
const path = require('path');
const app = express();

app.engine('html', cons.swig);  // swig-templatesを利用する
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));  // viewsフォルダのファイルを使う
// app.locals.cache = true;  // この方法でもキャッシュを有効化できる

var users = [];
users.push({ name: 'tobi' });
users.push({ name: 'loki' });
users.push({ name: 'jane' });

app.get('/', function(req, res) {
  res.render('index', {
    title: 'Consolidate.js'
  });
});

app.get('/users', function(req, res) {
  res.render('users', {
    title: 'Users',
    users: users
  });
});

app.get('/swig', function (req, res) {
  res.render('swig', {
    title: 'Swig',
    name: 'swig-templates',
    cache: true,  // キャッシュを利用する
  });
});

app.listen(3000);
console.log('Express server listening on port 3000');
