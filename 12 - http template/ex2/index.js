const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    let html = fs.readFileSync(__dirname + '/index.html', 'utf8');
    let message = 'This is message by variable';
    html = html.replace('{message}', message);
    res.end(html);
}).listen(1337, '127.0.0.1');
