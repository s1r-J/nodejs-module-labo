const now = new Date();

console.log(`now: ${now}`);
setTimeout(() => {
  console.log(`timeout: ${new Date()}`);
}, 2000);
console.log('end');

// now: Fri Apr 01 2022 12:00:00 GMT+0900 (Japan Standard Time)
// end
// timeout: Fri Apr 01 2022 12:00:02 GMT+0900 (Japan Standard Time)
