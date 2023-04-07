# express helmet

expressではセキュリティ対策として[Helmet](https://helmetjs.github.io/)の利用が推奨されている。
（[Security Best Practices for Express in Production](https://expressjs.com/en/advanced/best-practice-security.html)）

> Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!

HelmetはHTTPヘッダを設定することでExpressで構築したサーバを保護してくれる。

とりあえず使っておけばよいのだが、
Content-Security-PolicyやCross-Origin関連のヘッダはインラインで書いたJavaScript（scriptタグ内で書いたJavaScript）や別ドメインのJavaScript（CDNにおいてあるJavaScriptなど）、画像やCSSの読み込みを阻害することがある。
気づかずに、HTMLのheadタグ内にmetaタグで色々つけてもちゃんと動かないと困ったことがあるのでまとめておく。

## HelmetによるHTTPヘッダの設定

- express v4.18.2
- helmet v6.0.1

Helmetなし

```
X-Powered-By: Express
ETag: W/"e-34iY2aJdh23Y4/jkZycmy35iyiA"
Date: Fri, 07 Apr 2023 16:31:58 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

Helmetあり

```
Content-Security-Policy: default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests
Cross-Origin-Embedder-Policy: require-corp
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Resource-Policy: same-origin
X-DNS-Prefetch-Control: off
X-Frame-Options: SAMEORIGIN
Strict-Transport-Security: max-age=15552000; includeSubDomains
X-Download-Options: noopen
X-Content-Type-Options: nosniff
Origin-Agent-Cluster: ?1
X-Permitted-Cross-Domain-Policies: none
Referrer-Policy: no-referrer
X-XSS-Protection: 0
ETag: W/"a-jPyRejoCXiFb4CMwF2krB/wtbcM"
Date: Fri, 07 Apr 2023 16:31:06 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```
