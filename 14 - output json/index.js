const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    let obj = {
        firstName: 'John',
        lastName: 'Doe'
    };
    res.end(JSON.stringify(obj));
}).listen(1337, '127.0.0.1');
