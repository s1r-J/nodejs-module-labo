import MyClass from './my-class.js';

const mc = new MyClass('my-secret-code', 'my-open-data');

console.log('original MyClass getter: ', mc.secret); // original MyClass getter: my-secret-code

console.log('original MyClass method: ', mc.getSecret()); // original MyClass method: my-secret-code

const clonedMc = structuredClone(mc);

console.log('cloned MyClass getter openData: ', clonedMc.openData); // cloned MyClass getter openData:  undefined

try {
  console.log('cloned MyClass method openData: ', clonedMc.getOpenData()); // エラーが発生する
} catch (err) {
  console.log('cloned MyClass method openData: ', err);

  // cloned MyClass method openData:  TypeError: clonedMc.getOpenData is not a function
  //   at file:///mypath/nodejs-module-labo/private-property-clone/structured-clone.js:13:60
  //   at ModuleJob.run (node:internal/modules/esm/module_job:195:25)
  //   at async ModuleLoader.import (node:internal/modules/esm/loader:337:24)
  //   at async loadESM (node:internal/process/esm_loader:34:7)
  //   at async handleMainPromise (node:internal/modules/run_main:106:12)
}

console.log('cloned MyClass getter secret: ', clonedMc.secret); // cloned MyClass getter: undefined

try {
  console.log('cloned MyClass method secret: ', clonedMc.getSecret()); // エラーが発生する
} catch (err) {
  console.log('cloned MyClass method secret: ', err);

  // cloned MyClass method secret:  TypeError: clonedMc.getSecret is not a function
  //   at file:///mypath/nodejs-module-labo/private-property-clone/structured-clone.js:29:58
  //   at ModuleJob.run (node:internal/modules/esm/module_job:195:25)
  //   at async ModuleLoader.import (node:internal/modules/esm/loader:337:24)
  //   at async loadESM (node:internal/process/esm_loader:34:7)
  //   at async handleMainPromise (node:internal/modules/run_main:106:12)
}
