// The Object.keys() method returns an array of a given object's own enumerable property names iterated in the same order that a normal loop would
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
};

console.log(Object.keys(object1));
// Expected output: Array ["a", "b", "c"]
// Object.keys() return an array whose elements are strings corresponding to the enumerable properties found directly upon object. The ordering of the properties is the same as that given by looping over the properties of the object manually
