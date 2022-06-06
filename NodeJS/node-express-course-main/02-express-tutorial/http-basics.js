const http = require('http');
const {readFileSync} = require('fs');

// get all files
// const homePage = readFileSync('./index.html');
// In the navbar-app folder we have an index.html page with different resources i.e. svg, css, and, js here if we were to read the index.html file then we will not be able to render the page correctly as the resources are not loaded along with the html files
const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

const server = http.createServer((req, res) => {
    // console.log(req.method);
    // console.log(req.url);
    const url = req.url;
    // home page
    if(url=== '/') {
        // The writeHead() method will provide more information about the meta data
        res.writeHead(200, {'content-type': 'text/html'})
        // res.write('<h1>home page</h1>');
        res.write(homePage);
        // Alternatively we can directly write the response in the end() method: res.end('<h1>home page</h1>');
        res.end();
    }
    // about page
    else if(url === '/about') {
        res.writeHead(200, {'content-type': 'text/html'})
        res.write('<h1>about page</h1>');
        res.end();
    } 
    // styles
    else if(url === '/styles.css') {
        res.writeHead(200, {'content-type': 'text/css'});
        res.write(homeStyles);
        res.end();
    }
    // image/logo
    else if(url === '/logo.svg') {
        res.writeHead(200, {'content-type': 'image/svg+xml'});
        res.write(homeImage);
        res.end();
    }
    // logic
    else if(url === '/browser-app.js') {
        res.writeHead(200, {'content-type': 'text/javascript'});
        res.write(homeLogic);
        res.end();
    }
    // 404 page
    else {
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>page not found</h1>');
        res.end();
    }
});

server.listen(5000);
