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

