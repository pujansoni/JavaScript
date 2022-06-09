const express = require('express');
const app = express();

const people = require('./routes/people');
const auth = require('./routes/auth');

// static assets
app.use(express.static('./methods-public'));
// parse form data
app.use(express.urlencoded({extended: false}));
// parse json
app.use(express.json());
// Here we are using the people routes with the base path of /api/people
app.use('/api/people', people);
app.use('/login', auth);

app.listen(5000, () => {
    console.log('sever is listening on port 5000....');
});

// For the express router, the common convention is to make the routes folder and organize the routes in the corresponding js file. In this case we made the auth.js for the /login route and people.js for the api/people route
