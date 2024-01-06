//Nodejs Concepts and Events

const EventEmitter = require('events');


class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

myEmitter.on('customEvent', (arg) =>{
    console.log('Event is recieved with argment', arg);
});

myEmitter.emit('customEvent',  'Hello Nodejs!');

