// local
const secret = 'SUPER SECRET';
// share
const john = 'john';
const peter = 'peter';

// Here whatever we dump in the exports property will be available throughout the app
// console.log(module);

// Here we are using the ES6 syntax as the key name is same as the value
// Here the reason why we are setting up the module.exports as an object is because we are exporting multiple things
module.exports = { john, peter }

