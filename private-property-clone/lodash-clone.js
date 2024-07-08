import _ from 'lodash';
import MyClass from './my-class.js';

const mc = new MyClass('my-secret-code', 'my-open-data');

console.log('original MyClass getter: ', mc.secret); // original MyClass getter: my-secret-code

console.log('original MyClass method: ', mc.getSecret()); // original MyClass method: my-secret-code

const clonedMc = _.cloneDeep(mc);

console.log('cloned MyClass getter openData: ', clonedMc.openData); // cloned MyClass getter openData:  my-open-data

console.log('cloned MyClass method openData: ', clonedMc.getOpenData()); // cloned MyClass method openData:  my-open-data

try {
  console.log('cloned MyClass getter secret: ', clonedMc.secret); // エラーが発生する
} catch (err) {
  console.log('cloned MyClass getter secret: ', err);

  // cloned MyClass getter secret:  TypeError: Cannot read private member #mySecret from an object whose class did not declare it
  //   at get secret [as secret] (file:///mypath/nodejs-module-labo/private-property-clone/my-class.js:11:17)
  //   at file:///mypath/nodejs-module-labo/private-property-clone/lodash-clone.js:16:58
  //   at ModuleJob.run (node:internal/modules/esm/module_job:195:25)
  //   at async ModuleLoader.import (node:internal/modules/esm/loader:337:24)
  //   at async loadESM (node:internal/process/esm_loader:34:7)
  //   at async handleMainPromise (node:internal/modules/run_main:106:12)
}

try {
  console.log('cloned MyClass method secret: ', clonedMc.getSecret()); // エラーが発生する
} catch (err) {
  console.log('cloned MyClass method secret: ', err);

  // cloned MyClass method secret:  TypeError: Cannot read private member #mySecret from an object whose class did not declare it
  //   at MyClass.getSecret (file:///mypath/nodejs-module-labo/private-property-clone/my-class.js:19:17)
  //   at file:///mypath/nodejs-module-labo/private-property-clone/lodash-clone.js:30:58
  //   at ModuleJob.run (node:internal/modules/esm/module_job:195:25)
  //   at async ModuleLoader.import (node:internal/modules/esm/loader:337:24)
  //   at async loadESM (node:internal/process/esm_loader:34:7)
  //   at async handleMainPromise (node:internal/modules/run_main:106:12)
}
