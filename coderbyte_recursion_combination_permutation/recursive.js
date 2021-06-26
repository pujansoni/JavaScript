// Why use recursion
// i) It breaks down large problems into small chunks
// ii) It is fundamental used in most advanced algorithm
// When to use recursion
// For problems that contains smaller instances of the same problem
// Anatomy of Recursion:
// Base Case: The "smallest" instance of a problem that is solved trivially
// Recursive Case: an instance of a problem that "shrinks" the size of the input towards the base case
const factorial = (n) => {
    if(n===1) return 1;

    return n * factorial(n - 1);
}

console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120