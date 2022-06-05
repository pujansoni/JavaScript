const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// on - listen for an event
// emit - emit an event

customEmitter.on('response', (name, id) => {
    console.log(`data received user ${name} with id: ${id}`);
});

customEmitter.on('response', () => {
    console.log(`some other logic here`);
})

// Here order matters, so emit() should be after on() method
customEmitter.emit('response', 'john', 24);
// Here the second on() method will also work without arguments
