const express = require('express');
const app = express();
let {people} = require('./data');

// We can't send the post request directly from the browser. So we will set up the post method in 2 ways, the traditional approach is shown below and here the index.html file from the methods-public folder contains a form with the POST method:

// static assets
app.use(express.static('./methods-public'));
// parse form data, we use this middleware to get the form data submitted by the user and attaching it to the request body
app.use(express.urlencoded({extended: false}));

app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: people});
});

// Here the path /login is same as that mentioned in the form action index.html
app.post('/login', (req, res) => {
    // After attaching the urlencoded middleware we will have access to the name submitted by the form in the request body
    // console.log(req.body);
    const {name} = req.body;
    if(name) {
        return res.status(200).send(`Welcome ${name}`);
    }
    res.status(401).send('Please Provide Credentials');
});

app.listen(5000, () => {
    console.log('sever is listening on port 5000....');
});
