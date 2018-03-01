const greet = require('./greet');
greet();

const greet2 = require('./greet2').greet;
greet2();

const greet3 = require('./greet3');
greet3.greet();

const Greet4 = require('./greet4');
const myGreet = new Greet4();
myGreet.greet();

const greet5 = require('./greet5').greet;
greet5();
