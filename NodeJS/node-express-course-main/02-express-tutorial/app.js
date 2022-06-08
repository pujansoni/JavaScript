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

app.listen(5000, () => {
    console.log('sever is listening on port 5000....');
});
