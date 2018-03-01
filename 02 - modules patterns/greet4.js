function Greet() {
    this.greeting = 'Hello from another greeting';
    this.greet = function () {
        console.log(this.greeting);
    };
}

module.exports = Greet;
