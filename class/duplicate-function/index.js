'use strict';

class MyClass {

  id;

  constructor(id) {
    this.id = id;
  }

  /**
   * メソッド名が重複しているのでこちらのメソッドは呼び出されない
   */
  greeting() {
    console.log('first greeting!!');
    return 'hi';
  }

  /**
   * こちらのメソッドが呼び出される
   */
  greeting() {
    console.log('second greeting!!');
    return 'konnichiwa';
  }

  /**
   * メソッド名が重複しているのでこちらのメソッドは呼び出されない
   */
  hello(name, greeting) {
    console.log(`${greeting}, ${name}`);
    return `${greeting}, ${name}`;
  }

  /**
   * こちらのメソッドが呼び出される
   */
  hello(name) {
    console.log(`hello, ${name}.`);
    return `hello, ${name}.`;
  }
}

const mc = new MyClass(123);

const aisatsu = mc.greeting(); // second greeting!!
console.log(`return: ${aisatsu}`); // return: konnichiwa

const hello = mc.hello('taro'); // hello, taro.
console.log(`return: ${hello}`); // return: hello, taro.

const yo = mc.hello('jiro', 'yo'); // hello, jiro.
console.log(`return: ${yo}`); // return: hello, jiro.
