const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', (req, res, next) => {
    console.log(req.url);
    next();
});

app.get('/', (req, res) => {
    res.send(
        `<html>
            <head>
                <link rel="stylesheet" type="text/css" href="assets/style.css">
            </head>
            <body>
                <h1>Hello Express</h1>
            </body>
        </html>`
    );
});

app.get('/api', (req, res) => {
    let obj = {
        firstName: 'John',
        lastName: 'Doe'
    };
    res.json(obj);
});

app.get('/person/:id', (req, res) => {
    res.send(`This person id is: ${req.params.id}`);
});

app.listen(port);
