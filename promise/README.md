## Promiseを使って色々書いてみる

### error.js

エラー処理

throwとかrejectとかcatchとか使ってみる

```
$ node error.js 
=== start ===
=== sleep ===
greeting:  hello: 100

error:  Error: my error
    at C:\mypath\nodejs-module-labo\promise\index.js:5:23
    at new Promise (<anonymous>)
    at sleep (C:\mypath\nodejs-module-labo\promise\index.js:3:16)
    at C:\mypath\nodejs-module-labo\promise\index.js:18:26

greeting:  hello: 102

greeting:  Error: my error
    at C:\mypath\nodejs-module-labo\promise\index.js:5:23
    at new Promise (<anonymous>)
    at sleep (C:\mypath\nodejs-module-labo\promise\index.js:3:16)
    at C:\mypath\nodejs-module-labo\promise\index.js:29:22

greeting:  Error: my error
    at C:\mypath\nodejs-module-labo\promise\index.js:5:23
    at new Promise (<anonymous>)
    at sleep (C:\mypath\nodejs-module-labo\promise\index.js:3:16)
    at C:\mypath\nodejs-module-labo\promise\index.js:35:26

=== sleep2 ===
error:  Error: my error
    at C:\mypath\nodejs-module-labo\promise\index.js:47:24
    at new Promise (<anonymous>)
    at sleep2 (C:\mypath\nodejs-module-labo\promise\index.js:45:16)
    at C:\mypath\nodejs-module-labo\promise\index.js:56:26

=== sleep3 ===
error?:  my error str  isError:  false

=== sleep4 ===
after reject
error:  Error: my error
    at C:\mypath\nodejs-module-labo\promise\index.js:85:24
    at new Promise (<anonymous>)
    at sleep4 (C:\mypath\nodejs-module-labo\promise\index.js:83:16)
    at C:\mypath\nodejs-module-labo\promise\index.js:92:26

=== sleep5 ===
error:  Error: my error
    at C:\mypath\nodejs-module-labo\promise\index.js:102:23
    at new Promise (<anonymous>)
    at sleep5 (C:\mypath\nodejs-module-labo\promise\index.js:100:16)
    at C:\mypath\nodejs-module-labo\promise\index.js:109:26
=== end ===
```
