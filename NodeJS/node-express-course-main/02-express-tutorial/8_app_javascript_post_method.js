const express = require('express');
const app = express();
let {people} = require('./data');

// static assets
app.use(express.static('./methods-public'));
// parse form data
app.use(express.urlencoded({extended: false}));
// parse json
app.use(express.json());

app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: people});
});

app.post('/api/people', (req, res) => {
    // Here from the javascript.html we are using the axios library for the http requests and while submitting the form the http request will be of the content type application/json which is handled by the express.json() middleware. So now, we have access to the form name in the request body coming from the javascript.html file in this post method 
    const {name} = req.body;

    if(!name) {
        return res.status(400).json({success: false, msg: 'Please provide name value'});
    }

    res.status(201).json({success:true, person:name});
});

app.post('/login', (req, res) => {
    const {name} = req.body;
    if(name) {
        return res.status(200).send(`Welcome ${name}`);
    }
    res.status(401).send('Please Provide Credentials');
});

app.listen(5000, () => {
    console.log('sever is listening on port 5000....');
});
