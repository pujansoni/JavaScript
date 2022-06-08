const express = require('express');
const app = express();
const {products} = require('./data');

app.get('/', (req, res) => {
    // Here the content type will be automatically setup by the express
    res.json(products);
});

app.listen(5000, () => {
    console.log('sever is listening on port 5000....');
});
