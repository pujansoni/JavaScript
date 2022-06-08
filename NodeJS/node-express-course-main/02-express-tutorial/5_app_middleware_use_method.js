const express = require('express');
const app = express();
const logger = require('./logger');

/*
- Here we will move the middleware i.e. logger() function in a separate file i.e. logger.js
- Here what if we want to make the middleware available in all of the routes easily, cause passing the middleware as an argument is tedious and time consuming as we need to add the middleware for every route
- Alternatively, there is a method by the name of app.use() and we pass in the middleware in app.use(). 
- Note that here the order matters i.e. if we were to place app.use() after the home page route then the logger middleware won't be available to our homepage
*/
app.use(logger);
// Here we can also pass in the path as the first argument, but if we pass in for e.g. /api as the path in the first argument then the middleware will be applied to the routes which contains the path /api. In the example below, it matches all the routes starting with /api
// app.use('/api', logger);

app.get('/', (req, res) => {
    res.send('Home');
});

app.get('/about', (req, res) => {
    res.send('About');
});

app.get('/api/products', (req, res) => {
    res.send('Products');
});

app.get('/api/items', (req, res) => {
    res.send('Items');
});

app.listen(5000, () => {
    console.log('sever is listening on port 5000....');
});
