const express = require('express');
const path = require('path');

const app = express();

// Here we have kept all the static (static assets are files that server doesn't have to change) resources in the public folder i.e. logo, styles, and logic. We can now also navigate directly to the assets as well by typing in: http://localhost:5000/styles.css
// Here we didn't have to take care of the statuses or the content types as express takes care of it
// setup static and middleware [Note: app.use() is used to setup the middleware]
app.use(express.static('./public'));

app.get('/', (req, res) => {
    // Here we are using the absolute path
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
});

app.all('*', (req, res) => {
    res.status(404).send('resource not found');
});

app.listen(5000, () => {
    console.log('sever is listening on port 5000....');
});
