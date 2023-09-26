var events=require('events');
const eventEmitter = new events.EventEmitter();

// event handler
var eventHandler= function(){
    console.log("Event triggered function called");
};

// Assign eventHandler to event
eventEmitter.on('call',eventHandler);

// fire call event
eventEmitter.emit('call');