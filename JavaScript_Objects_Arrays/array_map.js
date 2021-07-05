// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array
const array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map(x => x * 2);
console.log(map1);
// Syntax:
// Arrow function
// map((element) => { ... } )
// map((element, index) => { ... } )
// map((element, index, array) => { ... } )

// Callback function
// map(callbackFn)
// map(callbackFn, thisArg)

// Inline callback function
// map(function callbackFn(element) { ... })
// map(function callbackFn(element, index) { ... })
// map(function callbackFn(element, index, array){ ... })
// map(function callbackFn(element, index, array) { ... }, thisArg)

// When not to use map()
// Since map builds a new array, using it when you aren't using the returned array is an anti-pattern; use forEach or for...of instead

// You shouldn't be using map if:
// You are not using the array it returns; and/or
// You are not returning a value from the callback

// Some Examples
// Mapping an array of numbers to an array of square roots
// The following code takes an array of numbers and creates a new array containing the square roots of the numbers in the first array
let numbers = [1, 4, 9];
let roots = numbers.map(function(num) {
    return Math.sqrt(num);
});
console.log(roots);

// Using map to reformat objects in an array
// The following code takes an array of objects and creates a new array containing the newly reformatted objects
let kvArray = [{key: 1, value: 10}, {key: 2, value: 20}, {key: 3, value: 30}];
let reformattedArray = kvArray.map(obj => {
    let rObj = {};
    rObj[obj.key] = obj.value;
    return rObj;
});
console.log(reformattedArray);

// Mapping an array of numbers using a function containing an argument
// The following code shows how map works when a function requiring one argument is used with it. The argument will automatically be assigned from each element of the array as map loops through the original array
let numb2 = [1, 4, 9];
let doubles = numb2.map(function(num) {
    return num * 2;
});
console.log(doubles);

// Using map generically
// The example shows how to use a map on a String to get an array of bytes in the ASCII encoding representing the character values
let map = Array.prototype.map;
let a = map.call('Hello World', function(x) {
    return x.charCodeAt(0);
});
console.log(a);

// Using map generically querySelectorAll
// This example shows how to iterate through a collection of objects collected by querySelectorAll. This is because querySelectorAll returns a NodeList (which is a collection of objects)
// In this case, we return all the selected option's values on the screen
// let elems = document.querySelectorAll('select option:checked');
// let values = Array.prototype.map.call(elems, function(obj) {
//     return obj.value;
// });

// Mapped array contains undefined
// When undefined or nothing is returned
let num8 = [1, 2, 3, 4];
let filteredNumbers = num8.map(function(num, index) {
    if(index < 3) {
        return num;
    }
});
console.log(filteredNumbers);
