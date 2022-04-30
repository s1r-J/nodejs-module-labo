const sinon = require('sinon');

const now = new Date();
const timeStub = sinon.useFakeTimers(now.getTime());

console.log(`now: ${now}`);

setTimeout(() => {
  console.log(`timeout: ${new Date()}`);
}, 2000);

console.log('end');

// now: Fri Apr 01 2022 12:00:00 GMT+0900 (Japan Standard Time)
// end
