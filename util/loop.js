const util = require('util');
// import * as util from 'util';

const obj = {};
const objProxy = {};
obj.objProxy = objProxy;
objProxy.obj = obj;

console.log('== console.log ==');
console.log(obj);
console.log('====');

console.log('== util.inspect options ==');
console.log(util.inspect(obj, {
  depth: Infinity,
  breakLength: Infinity,
  compact: true,
}));
console.log('====');
