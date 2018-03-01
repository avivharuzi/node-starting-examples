function Greet() {
    this.greeting = 'Hello from greeting';
    this.greet = function () {
        console.log(this.greeting);
    };
}

module.exports = new Greet();
