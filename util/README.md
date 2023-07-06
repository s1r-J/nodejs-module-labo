# util

標準モジュールであるutilモジュールを使ってオブジェクトを文字列にする。

## 出力

### index.js

```
== console.log ==
<ref *1> {
  depth1: { depth2: { depth3: [Object] } },
  string: 'this is string',
  longString: "I thought what I'd do was, I'd pretend I was one of those deaf-mutes. I thought what I'd do was, I'd pretend I was one of those deaf-mutes. I thought what I'd do was, I'd pretend I was one of those deaf-mutes.",
  number: 123456,
  array: [ 1, 2, 3, 4 ],
  error: Error: test error
      at Object.<anonymous> (C:\mypath\nodejs-module-labo\util\index.js:22:12)
      at Module._compile (internal/modules/cjs/loader.js:1063:30)
      at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
      at Module.load (internal/modules/cjs/loader.js:928:32)
      at Function.Module._load (internal/modules/cjs/loader.js:769:14)
      at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
      at internal/main/run_main_module.js:17:47,
  myself: [Circular *1]
}
====
== util.format ==
<ref *1> {
  depth1: {
    depth2: { depth3: { depth4: { depth5: [Object] } } }
  },
  string: 'this is string',
  longString: "I thought what I'd do was, I'd pretend I was one of those deaf-mutes. I thought what I'd do was, I'd pretend I was one of those deaf-mutes. I thought what I'd do was, I'd pretend I was one of those deaf-mutes.",
  number: 123456,
  array: [ 1, 2, 3, 4, [length]: 4 ],
  error: Error: test error
      at Object.<anonymous> (C:\mypath\nodejs-module-labo\util\index.js:22:12)
      at Module._compile (internal/modules/cjs/loader.js:1063:30)
      at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
      at Module.load (internal/modules/cjs/loader.js:928:32)
      at Function.Module._load (internal/modules/cjs/loader.js:769:14)
      at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
      at internal/main/run_main_module.js:17:47 {
    [stack]: 'Error: test error\n' +
      '    at Object.<anonymous> (D:\\DocumentsD\\IT\\gitrepo\\nodejs-module-labo\\util\\index.js:22:12)\n' +
      '    at Module._compile (internal/modules/cjs/loader.js:1063:30)\n' +
      '    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)\n' +
      '    at Module.load (internal/modules/cjs/loader.js:928:32)\n' +
      '    at Function.Module._load (internal/modules/cjs/loader.js:769:14)\n' +
      '    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)\n' +
      '    at internal/main/run_main_module.js:17:47',
    [message]: 'test error'
  },
  myself: [Circular *1]
}
====
== util.inspect ==
<ref *1> {
  depth1: { depth2: { depth3: [Object] } },
  string: 'this is string',
  longString: "I thought what I'd do was, I'd pretend I was one of those deaf-mutes. I thought what I'd do was, I'd pretend I was one of those deaf-mutes. I thought what I'd do was, I'd pretend I was one of those deaf-mutes.",
  number: 123456,
  array: [ 1, 2, 3, 4 ],
  error: Error: test error
      at Object.<anonymous> (C:\mypath\nodejs-module-labo\util\index.js:22:12)
      at Module._compile (internal/modules/cjs/loader.js:1063:30)
      at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
      at Module.load (internal/modules/cjs/loader.js:928:32)
      at Function.Module._load (internal/modules/cjs/loader.js:769:14)
      at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
      at internal/main/run_main_module.js:17:47,
  myself: [Circular *1]
}
====
== util.inspect options ==
<ref *1> { depth1: { depth2: { depth3: { depth4: { depth5: { depth6: 'deep' } } } } }, string: 'this is string', longString: "I thought what I'd do was, I'd pretend I was one of those deaf-mutes. I thought what I'd do was, I'd pretend I was one of those deaf-mutes. I thought what I'd do was, I'd pretend I was one of those deaf-mutes.", number: 123456, array: [ 1, 2, 3, 4 ], error: Error: test error
       at Object.<anonymous> (C:\mypath\nodejs-module-labo\util\index.js:22:12)
       at Module._compile (internal/modules/cjs/loader.js:1063:30)
       at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
       at Module.load (internal/modules/cjs/loader.js:928:32)
       at Function.Module._load (internal/modules/cjs/loader.js:769:14)
       at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
       at internal/main/run_main_module.js:17:47, myself: [Circular *1] }
====
== JSON.stringify throws TypeError ==
C:\mypath\nodejs-module-labo\util\index.js:52
console.log(JSON.stringify(obj)); // TypeError: Converting circular structure to JSON
                 ^

TypeError: Converting circular structure to JSON
    --> starting at object with constructor 'Object'
    --- property 'myself' closes the circle
    at JSON.stringify (<anonymous>)
    at Object.<anonymous> (C:\mypath\nodejs-module-labo\util\index.js:52:18)
    at Module._compile (internal/modules/cjs/loader.js:1063:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47
```

### loop.js

`obj -> objProxy -> obj`のように、
別のオブジェクトを介して自分自身を参照しているオブジェクトはどのように表示されるのか、を検証した。

自分自身は`[Circular *1]`に変換してくれるので循環参照で無限ループすることはない。

```
== console.log ==
<ref *1> { objProxy: { obj: [Circular *1] } }
====
== util.inspect options ==
<ref *1> { objProxy: { obj: [Circular *1] } }
====
```
