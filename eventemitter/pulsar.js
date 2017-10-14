const util = require('util');
const events = require('events');

function Pulsar(speed, times){
  events.EventEmitter.call(this);

  const self = this;
  this.speed = speed;
  this.times = times;

  this.on('newListener', function(eventName, listener ){
    if(eventName === 'pulse') {
      self.start();
    }
  });
}

util.inherits(Pulsar, events.EventEmitter);

Pulsar.prototype.start = function() {
  const self = this;
  const id = setInterval(function() {
    self.emit('pulse');
    self.times--;
    if(self.times === 0){
      clearInterval(id);
    }
  }, this.speed);
};

const pulsar = new Pulsar(500,5);

pulsar.on('pulse', function() {
  console.log('.');
});

// Pulsar.prototype.stop = function() {
//   if(this.listeners('pulse'.length === 0)) {
//     throw new Error('No listeners have been added!');
//   }
// }
// pulsar.stop();
