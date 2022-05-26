// import http from 'http';
// import config, {nodeEnv} from './config';
// The Http module can be used both in the client and the server

// console.log(config, nodeEnv);

// https.get("https://www.lynda.com", res => {
//     console.log("Response status code: ", res.statusCode);

//     res.on("data", chunk => {
//         console.log(chunk.toString());
//     });
// });

// Using http module as a server
// const server = http.createServer();

// Listen method is used to run the server on a certain port
// server.listen(8080);

// The most important event is the request event which gets emitted every time when http receives a request
// The user who is initiating a request will be able to see anything we write in the response object
// server.on('request', (req, res) => {
//     res.write("Hello HTTP!\n");
//     setTimeout(() => {
//         res.write("I can stream!\n");
//         res.end();
//     }, 3000);
// });

import config from './config';
import express from 'express';
const server = express();

// Express JS also handles server side routing as well
server.get('/', (req, res) => {
    res.send("Hello Express");
});

server.get('/about.html', (req, res) => {
    res.send("The about page");
});

server.listen(config.port, () => {
    console.info("Express listening on port ", config.port);
});

