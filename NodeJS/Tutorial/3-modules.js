// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
// Here we will start with the dot(.) everytime we create our own module. However, for the third party or the built-in modules we can require them directly
// Here we can also omit the .js extension 
const names = require('./4-names');
// We can also destructure john and peter as shown below
// const {john, peter} = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
// Here the line below will run the code inside the file 7-mind-grenade.js, even though we didn't assign it to a variable and invoke that variable
// i.e. when we import a module we actually invoke that module
require('./7-mind-grenade');

console.log(names);
console.log(data);

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);
