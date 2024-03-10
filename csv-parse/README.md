csv-parseを試す
==

- `options.js`: いくつかのオプションを使ってみる。CSVファイルに空行が含まれる、ヘッダ有り、カラムの左側に空白あり、文字コードS-JISという状態での読み取りに対応したオプション。
- `for-asyncawait.js`: for await...ofを使う。CSVファイルから1行ずつ読み取って同期処理する。
- `sync.js`: csv-parse/syncを使う。全行を一括で同期読み取りして処理する。


参考

- [csv-parse - npm](https://www.npmjs.com/package/csv-parse)
- [Node.js (NestJS) で csv ファイルを読み込む（４つのライブラリ比較） #Node.js - Qiita](https://qiita.com/t-yama-3/items/ab488c5a026de3cc92ab)
- [for await...of - JavaScript \| MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/for-await...of)

