const { write } = require('fs');

const {readFile, writeFile} = require('fs').promises;

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if(err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         });
//     });
// }

// Alternatively, we can use the utils module to read and write the file as given below

// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// Finally, we can also skip requiring the utils module and append (.promises) on require('fs') and we can use the readFile and writeFile methods provided by the "fs" module as they return promises and we can directly use those in async/await

// getText('./content/first.txt')
// .then(result => console.log(result))
// .catch(err => console.log(err));

// Alternatively we can use async/await

const start = async() => {
    try {
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        await writeFile('./content/result-mind-grenade.txt', `THIS IS AWESOME : ${first} ${second}`, {flag: 'a'});
        console.log(first, second);
    } catch(error) {
        console.log(error);
    }
}

start();
