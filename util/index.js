const util = require('util');
// import * as util from 'util';

const obj = {
  depth1: {
    depth2: {
      depth3: {
        depth4: {
          depth5: {
            depth6: 'deep',
          },
        },
      },
    },
  },
  string: 'this is string',
  longString: "I thought what I'd do was, I'd pretend I was one of those deaf-mutes. I thought what I'd do was, I'd pretend I was one of those deaf-mutes. I thought what I'd do was, I'd pretend I was one of those deaf-mutes.",
  number: 123456,
  array: [
      1, 2, 3, 4,
  ],
  error: new Error('test error'),
};
obj.myself = obj;

console.log('== console.log ==');
console.log(obj);
console.log('====');

console.log('== util.format ==');
console.log(util.format('%o', obj));
console.log('====');

console.log('== util.inspect ==');
console.log(util.inspect(obj));
console.log('====');

console.log('== util.inspect options ==');
console.log(util.inspect(obj, {
  depth: Infinity,
  breakLength: Infinity,
  compact: true,
}));
console.log('====');

console.log('== JSON.stringify throws TypeError ==');
console.log(JSON.stringify(obj)); // TypeError: Converting circular structure to JSON
console.log('====');


