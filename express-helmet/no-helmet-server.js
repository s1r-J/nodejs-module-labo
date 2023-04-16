const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('not use helmet');
});

app.listen(3001);

// X-Powered-By: Express
// ETag: W/"e-34iY2aJdh23Y4/jkZycmy35iyiA"
// Date: Thr, 01 Apr 2023 12:00:00 GMT
// Connection: keep-alive
// Keep-Alive: timeout=5
