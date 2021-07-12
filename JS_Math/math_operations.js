function calculateCircleArea(radius) {
    var area = (Math.PI) * radius * radius;
    return area;
}

console.log(calculateCircleArea(5));
console.log(Math.abs(-1));
console.log(Math.abs(-10.5));

console.log(Math.random()); // Expected output: a number between 0 and 1

// Function to create random integer
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3)); // Expected output: 0, 1, or 2
console.log(getRandomInt(1)); // Expected output: 0

// The Math.sqrt() method is used to calculate the square root of a number: Math.sqrt(x) = x
// If the number is negative, NaN is returned. Here is an example:
console.log(Math.sqrt(0.25));  // Prints: 0.5
console.log(Math.sqrt(4));
console.log(Math.sqrt(-9));  // Prints: NaN

/* Function to calculate hypotenuse.
Hypotenuse is the longest side of a right-angled triangle. */
function calculateHypotenuse(a, b) {
    return Math.sqrt((a * a) + (b * b));
}

console.log(calculateHypotenuse(3, 4)); // Prints: 5
console.log(calculateHypotenuse(5, 12)); // Prints: 13


// The Math.ceil() method rounds a number up to the next highest integer. So, 3.5 becomes 4, -5.7 becomes -5 (because -5 is greater than -6). Here's an example:
console.log(Math.ceil(3.5));  // Prints: 4
console.log(Math.ceil(-5.7));  // Prints: -5
console.log(Math.ceil(9.99));  // Prints: 10
console.log(Math.ceil(-9.99));  // Prints: -9
console.log(Math.ceil(0));  // Prints: 0

// The Math.floor() method rounds a number down to the next lowest integer. So, 3.5 becomes 3, -5.7 becomes -6 (because -6 is lesser than -5). Here's an example:
console.log(Math.floor(3.5));  // Prints: 3
console.log(Math.floor(-5.7));  // Prints: -6
console.log(Math.floor(9.99));  // Prints: 9
console.log(Math.floor(-9.99));  // Prints: -10
console.log(Math.floor(0));  // Prints: 0

// The Math.round() method rounds a number to the nearest integer in such a way that if the decimal part is .5 or greater, number is rounded up, otherwise rounded down. So, 3.5 becomes 4, -5.7 becomes -6, 4.49 becomes 4, and so on. Here's an example:
console.log(Math.round(3.5));  // Prints: 4
console.log(Math.round(-5.7));  // Prints: -6
console.log(Math.round(7.25));  // Prints: 7
console.log(Math.round(4.49));  // Prints: 4
console.log(Math.round(0));  // Prints: 0

// The Math.max() and Math.min() methods is used to find which number is the largest or smallest in a group of numbers, respectively. Here's an example:
console.log(Math.max(1, 3, 2));  // Prints: 3
console.log(Math.max(-1, -3, -2));  // Prints: -1
console.log(Math.min(1, 3, 2));  // Prints: 1
console.log(Math.min(-1, -3, -2));  // Prints: -3

// You can also find the maximum or minimum value within an array or an array-like object using the apply() method, as shown in the following example:
var numbers = [1, 3, 2];
console.log(Math.max.apply(null, numbers));  // Prints: 3
console.log(Math.min.apply(null, numbers));  // Prints: 1

// There is even simpler way to do this. In ECMAScript 6 you can accomplish the same thing using the new spread operator (...), as shown in example below:
var numbers1 = [1, 3, 2];
console.log(Math.max(...numbers1));  // Prints: 3
console.log(Math.min(...numbers1));  // Prints: 1

// The Math.pow() method is used to raise a number to a specified power.
console.log(Math.pow(3, 2));  // Prints: 9
console.log(Math.pow(0, 1));  // Prints: 0
console.log(Math.pow(5, -2));  // Prints: 0.04
console.log(Math.pow(16, 0.5));  // Prints: 4 (square root of 4)
console.log(Math.pow(8, 1/3));  // Prints: 2 (cube root of 8)

