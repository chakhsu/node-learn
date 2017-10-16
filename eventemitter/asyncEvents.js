const util = require('util');
const events = require('events');

function eventEmitter() {
  events.EventEmitter.call(this);
}

util.inherits(eventEmitter, events.EventEmitter);

const ee = new eventEmitter();

ee.on('data', function(data){
  process.nextTick(function(){
    console.log(data);
  });
});

ee.emit('data', 'f1');

console.log('f2');