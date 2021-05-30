// Write a function 'fib(n)' that takes in a number as an argument. The function should return the n-th number of the Fibonacci sequence.
// The 1st and 2nd number of the sequence is 1. To generate the next number of the sequence, we sum the previous two

const fib = (n) => {
    if(n <= 2) return 1;
    return fib(n-1) + fib(n-2);
};

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
// The fib function with the argument 50 will take time to execute due to recursion
// console.log(fib(50));

// memoization
// js object, keys will be arg to function, value will be the return value
// It's used to store the recurring pattern and if encountered again will look up the value
const fibMemo = (n, memo = {}) => {
    if(n in memo) return memo[n];
    if(n <= 2) return 1;
    memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo);
    return memo[n];
};
// Notice that while calling the function the first time we are not passing the memo object as the first call is used to declare the memo object, while the subsequent recursive call will be used to pass in the memo object by reference in order to pass the same memo object created while calling the fibMemo() function first time.

console.log(fibMemo(6));
console.log(fibMemo(7));
console.log(fibMemo(8));
console.log(fibMemo(50));