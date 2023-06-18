# Babelによるトランスパイル前後のクラスをinstanceofで比較するとfalseになる

index.jsからインポートしたBabelでのトランスパイル後のクラスと、src/user.jsからインポートしたトランスパイル前のクラスを`instanceof`で比較するとfalseになります。

この動作はテストコードで検証できます。
`npm run build`でBabelトランスパイル後に、`npm run test`を実行して試すことができます。

環境

- Node.js: v16.20.0
- @babel/cli: v7.22.5
- @babel/core: v7.22.5


```bash
$ npm run test
> test
> mocha test/*

  Hello test
    ✔ object from index is User
    ✔ object from src/user is not User

  User test
    ✔ object from src/user is instanceof src/user
    ✔ object from index is instanceof index
    ✔ object from src/user is not instanceof index
    ✔ object from index is not instanceof src/user
```

