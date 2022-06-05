// Streams: Writeable, Readable, Duplex, Transform
const {createReadStream} = require('fs');

const stream = createReadStream('../content/big.txt', {
    highWaterMark: 90000,
    encoding: 'utf8'
});

// Here after creating the stream we also have access to it's event which can be found in the nodejs.org documentation. Here we will use the EventEmitter API of stream and use the on method
// Here data will be read in chunks of 64KB and eventually we will have the remainder of the data
// default 64KB
// last buffer - remainder
// highWaterMark = control size
// const stream = createReadStream('./content/big.txt', {highWaterMark: 90000})
// const stream = createReadStream('../content/big.txt', {encoding: 'utf8'});
stream.on('data', (result) => {
    console.log(result);
});

stream.on('error', (err) => console.log(err));
