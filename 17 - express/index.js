const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello Express');
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
