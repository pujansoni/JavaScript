// Write a function 'canSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as arguments
// The function should return a boolean indicating whether or not it is possible to generate the targetSum using numbers from the array.
// You may use an element of the array as many times as needed.
// You may assume that all the input are nonnegative.

const canSum = (targetSum, numbers) => {
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;

    for(let num of numbers) {
        const remainder = targetSum - num;
        if(canSum(remainder, numbers) === true) {
            return true;
        }
    }

    return false;
};

console.log("CanSum Recursion");
console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(8, [2, 3, 5])); // true
// The function below will take time to run due to higher number and inefficient recursive solution
// console.log(canSum(300, [7, 14])); // false


// memoization
// js object, keys will be arg to function, value will be the return value
// It's used to store the recurring pattern and if encountered again will look up the value
// While storing the keys we will store the targetSum as it's the only variable that is changing in our recursive solution with memoization. Moreover, storing the targetSum in the memoized object means that if we encounter that sum again just return true or false i.e. if the sum is possible with the given numbers array
const canSumMemo = (targetSum, numbers, memo={}) => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;

    for(let num of numbers) {
        const remainder = targetSum - num;
        if(canSumMemo(remainder, numbers, memo) === true) {
            memo[targetSum] = true;
            return true;
        }
    }

    memo[targetSum] = false;
    return false;
};

console.log("CanSum Recursion Memoization");
console.log(canSumMemo(7, [2, 3])); // true
console.log(canSumMemo(7, [5, 3, 4, 7])); // true
console.log(canSumMemo(7, [2, 4])); // false
console.log(canSumMemo(8, [2, 3, 5])); // true
console.log(canSumMemo(300, [7, 14])); // false
