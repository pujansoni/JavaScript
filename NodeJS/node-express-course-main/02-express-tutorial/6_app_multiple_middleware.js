const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');

// We use an array of the middleware functions for setting up multiple middleware functions and they will be executed in order
app.use([logger, authorize]);

app.get('/', (req, res) => {
    res.send('Home');
});

app.get('/about', (req, res) => {
    res.send('About');
});

app.get('/api/products', (req, res) => {
    res.send('Products');
});

// We can pass in 2 middleware directly in the route similarly as we did in the app.use(): app.get('/api/item', [logger, authorize], (req, res)=> {})
app.get('/api/items', (req, res) => {
    // Here we will see the user which is set in the authorize middleware if we request from the route: http://localhost:5000/api/items?user=john
    console.log(req.user);
    res.send('Items');
});

app.listen(5000, () => {
    console.log('sever is listening on port 5000....');
});

// We can use the middleware provided by the express directly or by third party. Popular  package is morgan