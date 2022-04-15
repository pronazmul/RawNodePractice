/**
 * Title: Events Module Practive 
 * Date: 04-25-2022
 */

// Dependencies
  var EventEmitter = require('events');
  var emitter = new EventEmitter();

// Listining And Event:
  emitter.on('scream', function() {
    console.log('A scream is detected!');
  });

// Event Raised:
  emitter.emit('scream');
