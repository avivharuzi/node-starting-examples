const EventEmitter = require('events');
const util = require('util');

function Greetr() {
	this.greeting = 'Hello World';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = (data) => {
	console.log(`${this.greeting}: ${data}`);
	this.emit('greet', data);
}

const greeter1 = new Greetr();

greeter1.on('greet', (data) => {
	console.log(`Someone greeted: ${data}`);
});

greeter1.greet('Tony');
