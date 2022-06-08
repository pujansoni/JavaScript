const express = require('express');
const app = express();
const {products} = require('./data');

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>');
});

app.get('/api/products', (req, res) => {
    // Here while sending back the products we will remove the description of the products using the map() method
    const newProducts = products.map((product) => {
        const {id, name, image} = product;
        return {id, name, image};
    })

    res.json(newProducts);
});

// Using Route Parameter to get a single parameter. Here the route parameter will be available through the request object's parameter and will be always available to us as a string. So, here even though the id of product is an integer in data.js, the productId route parameter will be string
app.get('/api/products/:productID', (req, res) => {
    // console.log(req);
    // console.log(req.params);

    // Note that here productID is string
    const {productID} = req.params;

    const singleProduct = products.find((product) => product.id === Number(productID));

    // Here if we pass in the request to get product with ID 'abc' which is obviously not present then we won't find any products and the singleProduct variable will be undefined. So, in order to handle this case we will use the if/else statement to return 404 if we can't find the product

    if(!singleProduct) {
        return res.status(404).send('Product Does Not Exist');
    }

    return res.json(singleProduct);
});

// The Route parameters can get complex at times as shown below
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params);
    res.send('hello world');
});

// Setting up Query Parameters. The query parameters can be accessed by the query attribute in the request as shown below
app.get('/api/v1/query', (req, res) => {
    // console.log(req.query);
    // Here assuming we have two query parameters i.e. search and limit
    const {search, limit} = req.query;
    let sortedProducts = [...products];

    if(search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        });
    }

    if(limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }

    if(sortedProducts.length < 1) {
        // res.status(200).send('no products matched your search');
        // More common practice if there is no data for the request is to send an empty data array with success setup as true in json response
        return res.status(200).json({success: true, data: []});
    }

    return res.status(200).json(sortedProducts);
    // res.send('hello world');
})
/*
Request response examples for the above route form data.js file:
ex1: http://localhost:5000/api/v1/query?limit=3
output: we will get 3 products as the search parameter is empty it will take all the products by default
ex2: http://localhost:5000/api/v1/query?limit=abc
output: Will be empty as limit is not valid
ex3: http://localhost:5000/api/v1/query?search=a
output: 2 products as 2 products starts with the name a
ex4: http://localhost:5000/api/v1/query?search=a&limit=1
output: 1 product as the limit is 1 even though there are 2 products whose name starts with a
*/

// Note that here we have created a separate route for the query string parameter request for understanding. Normally, we will use the same route for the normal/query string link and just filter out the response based on the presence of the query string parameters

app.listen(5000, () => {
    console.log('sever is listening on port 5000....');
});
