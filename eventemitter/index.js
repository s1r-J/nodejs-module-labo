const events = require('events');

class MyEventClass {
  constructor () {
    this.emitter = new events.EventEmitter();
    this.emitter.on('error', (err) => {
      console.log('on error: ', err.message);
      console.log('this is ', this); // アロー関数によってここではthisがMyEventClassになる
      this.errorLog(err);
    });
  }

  errorLog(error) {
    console.log('errorLog called: ', error.message);
  }

  emit(error) {
    this.emitter.emit('error', error);
  }
}

const myEventClass = new MyEventClass();
myEventClass.emit(new Error('my error'));
// on error:  my error
// this is  MyEventClass {
//   emitter: EventEmitter {
//     _events: [Object: null prototype] { error: [Function (anonymous)] },
//     _eventsCount: 1,
//     _maxListeners: undefined,
//     [Symbol(kCapture)]: false
//   }
// }
// errorLog called:  my error

class MyEventClass2 {
  constructor () {
    this.emitter = new events.EventEmitter();
    this.emitter.on('error', function (err) {
      console.log('on error: ', err.message);
      console.log('this is ', this); // 関数によってここではthisがevents.EventEmitterになる
      // this.errorLog(err); // TypeError: this.errorLog is not a function
    });
  }

  errorLog(error) {
    console.log('errorLog called: ', error.message);
  }

  emit(error) {
    this.emitter.emit('error', error);
  }
}

const myEventClass2 = new MyEventClass2();
myEventClass2.emit(new Error('my error2'));
// on error:  my error2
// this is  EventEmitter {
//   _events: [Object: null prototype] { error: [Function (anonymous)] },
//   _eventsCount: 1,
//   _maxListeners: undefined,
//   [Symbol(kCapture)]: false
// }
