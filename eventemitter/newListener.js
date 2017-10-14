const util = require('util');
const events = require('events');

function EventTracker() {
  events.EventEmitter.call(this);
}

util.inherits(EventTracker, events.EventEmitter);

const eventTracker = new EventTracker();

eventTracker.on('newListener', function(name, listener){
  console.log('Event name added:', name);
  console.log('Event listener added:', listener);
});

eventTracker.on('a listener', function(){
  console.log('a listener');
});

