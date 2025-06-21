const toString = Object.prototype.toString;

// undefined
console.log('-- undefined --');
console.log(toString.call(undefined)); // [object Undefined]

// null
console.log('-- null --');
console.log(toString.call(null)); // [object Null]

// Array
console.log('-- Array --')
console.log(toString.call([])); // [object Array]
console.log(toString.call([1, 'bbb', 'ccc', { 'd': 4}, ])); // [object Array]

// Arguments
console.log('-- Arguments --')
function func1(a, b, c) {
  console.log(toString.call(arguments)); // [object Arguments]
}
func1(1, 2, 3);

// Function
console.log('-- Function --');
console.log(toString.call(func1)); // [object Function]
console.log(toString.call(() => {})); // [object Function]
console.log(toString.call(async () => {})); // [object AsyncFunction]
console.log(toString.call(function* () {})) // [object GeneratorFunction]
console.log(toString.call(async function* () {})); // [object AsyncGeneratorFunction]

// Error
console.log('-- Error --');
console.log(toString.call(new Error('error'))); // [object Error]
console.log(toString.call(new AggregateError([new Error('foo'), new Error('bar')], 'error'))); // [object Error]

// Boolean
console.log('-- Boolean --');
console.log(toString.call(new Boolean(true))); // [object Boolean]
console.log(toString.call(true)); // [object Boolean]

// Number
console.log('-- Number --');
console.log(toString.call(new Number(123))); // [object Number]
console.log(toString.call(123)); // [object Number]

// String
console.log('-- String --');
console.log(toString.call(new String('hello'))); // [object String]
console.log(toString.call('hello')); // [object String]

// Date
console.log('-- Date --');
console.log(toString.call(new Date())); // [object Date]

// RegExp
console.log('-- RegExp --');
console.log(toString.call(new RegExp(/[0-9]{4}/))); // [object RegExp]
console.log(toString.call(/[0-9]{4}/)); // [object RegExp]

// Object
console.log('-- Object --');
console.log(toString.call({})); // [object Object]
console.log(toString.call(new Object())); // [object Object]

// Map
console.log('-- Map --');
console.log(toString.call(new Map())); // [object Map]

// Set
console.log('-- Set --');
console.log(toString.call(new Set())); // [object Set]

// JSON
console.log('-- JSON --');
console.log(toString.call(JSON)); // [object JSON]

// Math
console.log('-- Math --');
console.log(toString.call(Math)); // [object Math]

// Symbol
console.log('-- Symbol --');
console.log(Symbol('foo')); // Symbol(foo)
console.log(toString.call(Symbol)); // [object Function]

// Promise
console.log('-- Promise --');
console.log(toString.call(new Promise((resolve) => {}))); // [object Promise]
console.log(toString.call(Promise)); // [object Function]

// ArrayBuffer
console.log('-- ArrayBuffer --');
console.log(toString.call(new ArrayBuffer(8))); // [object ArrayBuffer]
console.log(toString.call(ArrayBuffer)); // [object Function]

// Atomics
console.log('-- Atomics --');
console.log(toString.call(Atomics)); // [object Atomics]

// BigInt
console.log('-- BigInt --');
console.log(toString.call(BigInt(9007199254740992))); // [object BigInt]
console.log(toString.call(9007199254740992)); // [object Number]

// BigInt64Array
console.log('-- BigInt64Array --');
console.log(toString.call(new BigInt64Array(4))); // [object BigInt64Array]

// BigUint64Array
console.log('-- BigUint64Array --');
console.log(toString.call(new BigUint64Array(4))); // [object BigUint64Array]

// DataView
console.log('-- DataView --');
console.log(toString.call(new DataView(new ArrayBuffer()))); // [object DataView]

// ArrayBuffer
console.log('-- ArrayBuffer --');
console.log(toString.call(new ArrayBuffer())); // [object ArrayBuffer]

// FinalizationRegistry
console.log('-- FinalizationRegistry --');
console.log(toString.call(new FinalizationRegistry((heldValue) => {}))); // [object FinalizationRegistry]

// Float16Array
console.log('-- Float16Array --');
try {
  console.log(toString.call(new Float16Array(2)));
} catch (err) {
  console.log('Node.js not supported', err);
}

// Float32Array
console.log('-- Float32Array --');
console.log(toString.call(new Float32Array(2))); // [object Float32Array]

// Float64Array
console.log('-- Float64Array --');
console.log(toString.call(new Float64Array(2))); // [object Float64Array]

// Int16Array
console.log('-- Int16Array --');
console.log(toString.call(new Int16Array(2))); // [object Int16Array]

// Int32Array
console.log('-- Int32Array --');
console.log(toString.call(new Int32Array(2))); // [object Int32Array]

// Int8Array
console.log('-- Int8Array --');
console.log(toString.call(new Int8Array(2))); // [object Int8Array]

// Proxy
console.log('-- Proxy --');
console.log(toString.call(new Proxy({}, {}))); // [object Object]

// Reflect
console.log('-- Reflect --');
console.log(toString.call(Reflect)); // [object Reflect]

// Uint16Array
console.log('-- Uint16Array --');
console.log(toString.call(new Uint16Array(2))); // [object Uint16Array]

// Uint32Array
console.log('-- Uint32Array --');
console.log(toString.call(new Uint32Array(2))); // [object Uint32Array]

// Uint8Array
console.log('-- Uint8Array --');
console.log(toString.call(new Uint8Array(2))); // [object Uint8Array]

// Uint8ClampedArray
console.log('-- Uint8ClampedArray --');
console.log(toString.call(new Uint8ClampedArray(2))); // [object Uint8ClampedArray]

// WeakMap
console.log('-- WeakMap --');
console.log(toString.call(new WeakMap())); // [object WeakMap]

// WeakRef
console.log('-- WeakRef --');
console.log(toString.call(new WeakRef({}))); // [object WeakRef]

// WeakSet
console.log('-- WeakSet --');
console.log(toString.call(new WeakSet())); // [object WeakSet]

// MyClass
class MyClass {
  constructor() {}
}
console.log('-- MyClass --');
console.log(toString.call(new MyClass())); // [object Object]
console.log(toString.call(MyClass)); // [object Function]

// MyTagClass
class MyTagClass {
  constructor() {}

  get [Symbol.toStringTag]() { // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag
    return 'MyTagClass';
  }
}
console.log('-- MyTagClass --');
console.log(toString.call(new MyTagClass())); // [object MyTagClass]
console.log(toString.call(MyTagClass)); // [object Function]

// Buffer
console.log('-- Buffer --');
console.log(toString.call(Buffer.alloc(10))); // [object Uint8Array]

// Child_Process
import * as cp from 'node:child_process';
console.log(toString.call(cp)); // [object Module]

// Console
import { createWriteStream } from 'node:fs';
import { Console } from 'node:console';
console.log(toString.call(
  new Console({ stdout: createWriteStream('./stdout.log'), stderr: createWriteStream('./stderr.log'), })
)); // [object console]

// URL
console.log('-- URL --');
console.log(toString.call(new URL('https://www.example.co.jp'))); // [object URL]

// URL
console.log('-- URL --');
import url from 'node:url';
console.log(toString.call(url.parse('https://www.example.co.jp'))); // [object Object]
console.log(toString.call(url)); // [object Object]
