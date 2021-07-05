// Making deep copies of objects in javascript without thinking
// There is a way to copy everything without thinking. You simply stringify your object and parse it right after:
const a = {
    foods: {
        dinner: "Pasta"
    }
};
let b = JSON.parse(JSON.stringify(a));
b.foods.dinner = 'Soup';
console.log(b.foods.dinner); // Soup
console.log(a.foods.dinner); // Pasta

// Here, we have to consider that we will not be able to copy custom class instances, so you can only use it when you copy objects with native JavaScript values inside


// Arrays
// Copying arrays is just as common as copying objects. A lot of the logic behind it is similar, since arrays are also just objects under the hood
// As with objects, you can use the spread operator to copy an array
const c = [1, 2, 3];
let d = [...c];
d[1] = 4;
console.log(b[1]); // 4
console.log(a[1]); // 2

// Array functions - map, filter, and reduce
// These methods will return a new array with all(or some) values of the original one. While doing that, you can also modify the values, which comes in very handy:
const e = [1, 2, 3];
let f = e.map(e1 => e1);
f[1] = 4;
console.log(f[1]); // 4
console.log(e[1]); // 2

// Alternatively, you can change the desired element while copying
const g = [1, 2, 3];
const h = g.map((g1, index) => index === 1 ? 4 : g1);
console.log(h[1]); // 4
console.log(g[1]); // 2

// Array.slice
// This method is normally used to return a subset of the elements, starting at a specific index and optionally ending at a specific index of the original array. When using array.slice() or array.slice(0) you will end up with a copy of the original array.
const i = [1, 2, 3];
let j = i.slice(0);
j[1] = 4;
console.log(j[1]); // 4
console.log(i[1]); // 2

// Nested arrays
// Similar to objects, using the methods above to copy an array with another array or object inside will generate a shallow copy. To prevent that, also use JSON.parse(JSON.stringify(someArray));