const express = require('express');
const app = express();

// Middleware sits between request and response
// req => middleware => res

/*
Here consider a scenario where we want a logger to be available to all of the routes and the logic is same but we need to make it available to all the routes

In this case we will create a middleware which accepts 3 arguments. This arguments are passed by express automatically, but we do need to access them manually to make it available to our logic inside the logger function

Here the significant of the 3rd argument i.e. next is that whenever we are working with the middleware we need to pass it on to the next middleware unless we are terminating the middleware by returning a response
*/
const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    // Here as we are sending back the response, it means that the middleware is terminated and no further middleware will be called
    // res.send("Testing");
    // Alternatively, we can use the next function to pass it on the next function i.e. app.get() in this case
    next();
}

// Here the second argument to the get() function is the logger which is the middleware and it automatically takes in the request and the response object (express does this), which we access in the logger function
app.get('/', logger, (req, res) => {
    // After attaching the middleware i.e. logger() the next() function mentioned in the middleware will continue executing from the app.get() method of the corresponding route
    res.send('Home');
});

app.get('/about', logger, (req, res) => {
    res.send('About');
});

app.listen(5000, () => {
    console.log('sever is listening on port 5000....');
});
