const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', (req, res, next) => {
    console.log(req.url);
    next();
});

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/api', (req, res) => {
    let obj = {
        firstName: 'John',
        lastName: 'Doe'
    };
    res.json(obj);
});

app.get('/person/:id', (req, res) => {
    res.render('person', {
        id: req.params.id,
        q: req.query.q
    });
});

app.listen(port);
