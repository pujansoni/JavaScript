// const fs = require('fs');
// fs.readFileSync;

const {readFile, writeFile} = require('fs');

// Here in the asynchronous approach we use the callback option which runs when the current functionality executes

console.log('start');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`, (err, result) => {
            if(err) {
                console.log(err);
                return;
            }
            console.log('done with this task');
        });
    });
});
console.log('starting next task');