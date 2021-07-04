// The Object.entries() method returns an array of given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop (The only important difference is that a for...in loop enumerates properties in the prototype chain as well).
// The order of the array returned by Object.entries() does not depend on how an object is defined. If there is a need for certain ordering, then the array should be sorted first, like Object.entries(obj).sort((a, b) => b[0].localeCompare(a[0]));

const object1 = {
    a: 'something',
    b: 42
};

for(const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
}