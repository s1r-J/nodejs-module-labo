# aws-sdk-version

Lambda Node.js 18ランタイムでは、Lambdaに含まれているAWS SDKのバージョンが3になっている（Node.js 16まではバージョン2だった）。
引き続き、aws-sdk v2を使うには`node_modules`に含めておく必要がある。

以下のnpm scriptで動作検証に使えるLambda用のzipファイルを生成できる。
Lambda関数を作成し、そのIAMロールにポリシーでLambdaのReadOnlyを付与、zipファイルをデプロイする。

- `npm run zip:v3` -> aws-sdk v3を利用するコード、aws-sdk v2、v3ともに`node_modules`に含まない（Lambdaは正常に動作する）
- `npm run zip:v2` -> aws-sdk v2を利用するコード、aws-sdk v2を`node_modules`に含む（Lambdaは正常に動作する）
- `npm run zip:v2-not` -> aws-sdk v2を利用するコード、aws-sdk v2を`node_modules`に含まない（Lambdaはエラーを発生させる）


発生するエラー

```json
{
  "errorType": "Runtime.ImportModuleError",
  "errorMessage": "Error: Cannot find module 'aws-sdk'\nRequire stack:\n- /var/task/index.js\n- /var/runtime/index.mjs",
  "trace": [
    "Runtime.ImportModuleError: Error: Cannot find module 'aws-sdk'",
    "Require stack:",
    "- /var/task/index.js",
    "- /var/runtime/index.mjs",
    "    at _loadUserApp (file:///var/runtime/index.mjs:996:17)",
    "    at async UserFunction.js.module.exports.load (file:///var/runtime/index.mjs:1031:21)",
    "    at async start (file:///var/runtime/index.mjs:1194:23)",
    "    at async file:///var/runtime/index.mjs:1200:1"
  ]
}
```
