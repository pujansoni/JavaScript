// const sum = (arr) => {
//     if(arr.length === 0) return 0;
//     const rest = arr.slice(1);
//     return arr[0] + sum(rest);
// };

// The slice operator creates a shallow copy which incurs an overhead to the sum() function's performance
// We will optimize our function by using the array index logic to avoid creating shallow/deep copy of an array
const sum = (arr) => {
    return _sum(arr, 0);
};

const _sum = (arr, idx) => {
    if(idx === arr.length) return 0;
    return arr[idx] + _sum(arr, idx + 1);
};

console.log(sum([])); // 0
console.log(sum([1])); // 1
console.log(sum([1, 5])); // 6
console.log(sum([1, 5, 7])); // 13
console.log(sum([1, 5, 7, -2])); // 11

// Fibonacci series recursive solution
const fib = (n) => {
    if(n === 1 || n === 2) return 1;
    return fib(n - 1) + fib(n - 2);
};

console.log(fib(5));
console.log(fib(6));