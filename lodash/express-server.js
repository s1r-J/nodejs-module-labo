const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const lodash3 = require('lodash3');

const app = express();

app.use(express.json());
// app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.post('/array', function (req, res) {
    console.log('===');

    const array = req.body.array;
    console.log(array);  // [ 1, 2, 3 ]

    console.log(`typeof: ${typeof array}`);  // typeof: object
    console.log(`instanceof: ${array instanceof Array}`);  // instanceof: true
    console.log(`prototype: ${Object.prototype.toString.call(array)}`);  // prototype: [object Array]

    console.log(`Array.isArray: ${Array.isArray(array)}`);  // Array.isArray: true
    console.log(`Lodash: ${_.isArray(array)}`);  // Lodash: true
    console.log(`Lodash3: ${lodash3.isArray(array)}`);  // Lodash3: true

    console.log('===');
    res.status(200).end();
});

const server = app.listen(3000, 'localhost', function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Server is listening at http://%s:%s', host, port);
})
