var http = require('http')
var fs = require('fs')

http.createServer(function(req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8');
    // res.end(text);
    
    // The above method to send the text to the response is not efficient as if we were to examine the headers then we can find that whole file was delivered. So instead we will use the createReadStream to send the chunks of data instead
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
    fileStream.on('open', () => {
        // The pipe() method converts the readStream to the writeStream
        fileStream.pipe(res);
    });
    fileStream.on('error', (err) => {
        res.end(err);
    });
}).listen(5000);
