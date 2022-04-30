# sinon-useFakeTimers-break

[Sinon.JS](https://sinonjs.org/)でuseFakeTimersを使ったとき、setTimeoutが動作しなくなるのを検証するディレクトリ。

参考：[sinonのAPIリファレンス](https://sinonjs.org/releases/latest/fake-timers/)

> Causes Sinon to replace the global setTimeout, clearTimeout, setInterval, clearInterval, setImmediate, clearImmediate, process.hrtime, performance.now(when available) and Date with a custom implementation which is bound to the returned clock object.

## 検証

検証用に3つのJSファイルを用意した。
それぞれ、`node <JSファイル名>`で実行してコンソールの出力を確認する。

- `not-sinon.js`
    - sinonを使わずにsetTimeoutを利用する。
    - setTimeoutが正しく動作し、nowのコンソール出力のおよそ2秒後にtimeoutのコンソール出力が表示される

```
$ node not-sinon.js
now: Fri Apr 01 2022 12:00:00 GMT+0900 (Japan Standard Time)
end
timeout: Fri Apr 01 2022 12:00:02 GMT+0900 (Japan Standard Time)
```

- `not-sinon.js`
    - sinonのuseFakeTimersを利用中にsetTimeoutを利用する。
    - setTimeoutが動作せず、`not-sinon.js`では表示されていたtimeoutのコンソール出力が表示されない

```
$ node not-sinon.js
now: Fri Apr 01 2022 12:00:00 GMT+0900 (Japan Standard Time)
end
```

- `restore-sinon.js`
    - sinonのuseFakeTimersを利用し、restoreした後にsetTimeoutを利用する。
    - setTimeoutが正しく動作し、nowのコンソール出力のおよそ2秒後にtimeoutのコンソール出力が表示される

```
$ node not-sinon.js
now: Fri Apr 01 2022 12:00:00 GMT+0900 (Japan Standard Time)
end
timeout: Fri Apr 01 2022 12:00:02 GMT+0900 (Japan Standard Time)
```

setTimeout以外にsetIntervalなど時間操作が入るメソッドはsinonのuseFakeTimersを利用中には動作しません。
また、useFakeTimersの利用が終わったらきちんとrestoreしましょう。他のテストケースで正しく動作しない可能性があります。
