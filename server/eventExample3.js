const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.once('greet', () =>{
    console.log('This will greet only once');
});

myEmitter.emit('greet');
myEmitter.emit('greet');
myEmitter.emit('greet');