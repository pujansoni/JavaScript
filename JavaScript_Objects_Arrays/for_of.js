// The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables. It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.
const array1 = ['a', 'b', 'c'];
for(const element of array1) {
    console.log(element);
}

// You can use let instead of const too, if you reassign the variable inside the block
console.log("Array");
const iterableArr = [10, 20, 30];
for(let value of iterableArr) {
    value += 1;
    console.log(value);
}

// Iterating over a string
console.log("String");
const iterableStr = 'boo';
for(const value of iterableStr) {
    console.log(value);
}

// Iterating over a TypedArray
console.log("Typed Array");
const iterableTyp = new Uint8Array([0x00, 0xff]);
for(const value of iterableTyp) {
    console.log(value);
}

// Iterating over a Map
console.log("Map");
const iterableMap = new Map([['a', 1], ['b', 2], ['c', 3]]);
for(const entry of iterableMap) {
    console.log(entry);
}
for(const [key, value] of iterableMap) {
    console.log(value);
}

// Iterating over a Set
console.log("Set");
const iterableSet = new Set([1, 1, 2, 2, 3, 3]);
for(const value of iterableSet) {
    console.log(value);
}

// Iterating over the arguments object
// You can iterate over the arguments object to examine all of the paramters passed into a JavaScript function
console.log("Iterating over the arguments object");
(function() {
    for(const argument of arguments) {
        console.log(argument);
    }
})(1, 2, 3);
