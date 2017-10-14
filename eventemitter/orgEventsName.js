const util = require('util');
const events = require('events');

function MusicPlayer() {
  events.EventEmitter.call(this);
  this.on(MusicPlayer.events.play, this.play.bind(this));
  this.on(MusicPlayer.events.stop, this.stop.bind(this));
}

const e = MusicPlayer.events = {
  play: 'play',
  pause: 'pause',
  stop: 'stop',
  ff: 'ff',
  rw: 'rw',
  addTrack: 'add-track'
};

util.inherits(MusicPlayer, events.EventEmitter);

MusicPlayer.prototype.play = function() {
  this.playing = true;
};

MusicPlayer.prototype.stop = function() {
  this.playing = false;
};

const musicPlayer = new MusicPlayer();

musicPlayer.on(e.play, function() {
  console.log('Now playing');
});

musicPlayer.on(e.stop, function() {
  console.log('Now stopping');
});

musicPlayer.emit(e.play);

setTimeout(() => {
  musicPlayer.emit(e.stop);
}, 1000);