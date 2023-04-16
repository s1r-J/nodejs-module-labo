const express = require('express');
const helmet = require('helmet');

const app = express();
app.use(helmet());

app.get('/', (req, res) => {
  res.status(200).send('use helmet');
});

app.listen(3000);

// Content-Security-Policy: default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests
// Cross-Origin-Embedder-Policy: require-corp
// Cross-Origin-Opener-Policy: same-origin
// Cross-Origin-Resource-Policy: same-origin
// X-DNS-Prefetch-Control: off
// X-Frame-Options: SAMEORIGIN
// Strict-Transport-Security: max-age=15552000; includeSubDomains
// X-Download-Options: noopen
// X-Content-Type-Options: nosniff
// Origin-Agent-Cluster: ?1
// X-Permitted-Cross-Domain-Policies: none
// Referrer-Policy: no-referrer
// X-XSS-Protection: 0
// ETag: W/"a-jPyRejoCXiFb4CMwF2krB/wtbcM"
// Date: Thr, 01 Apr 2023 12:00:00 GMT
// Connection: keep-alive
// Keep-Alive: timeout=5
