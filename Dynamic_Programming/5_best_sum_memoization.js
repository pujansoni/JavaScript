// Write a function 'bestSum(targetSum, numbers)' that takes in a targetSum and an array of numbers as arguments
// The function should return an array containing the shortest combination of numbers that adds up to exactly the targetSum
// If there is a tie for the shortest combination, you may return any one of the shortest combination
const bestSum = (targetSum, numbers) => {
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    let shortestCombination = null;

    for(let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers);
        if(remainderCombination !== null) {
            const combination = [...remainderCombination, num];
            if(shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }

    return shortestCombination;
}

// m = target sum
// n = numbers.length

// Brute force
// time: O(n^m * m)
// space: O(m^2)

// Memoized
// time: O(m^2 * n)
// space: O(m^2)

console.log("bestSum recursive inefficient solution: ");
console.log(bestSum(7, [5, 3, 4, 7])); // [7]
console.log(bestSum(8, [2, 3, 5])); // [5, 3]
console.log(bestSum(8, [1, 4, 5])); // [4, 4]
// The code below will take more time to execute due to inefficient recursive solution
// console.log(bestSum(100, [1, 2, 5, 25])); // [25, 25, 25, 25]

const bestSumMemo = (targetSum, numbers, memo={}) => {
    if(targetSum in memo) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    let shortestCombination = null;

    for(let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSumMemo(remainder, numbers, memo);
        if(remainderCombination !== null) {
            const combination = [...remainderCombination, num];
            if(shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }

    memo[targetSum] = shortestCombination;
    return shortestCombination;
};

console.log("bestSum recursive memoized solution: ");
console.log(bestSumMemo(7, [5, 3, 4, 7])); // [7]
console.log(bestSumMemo(8, [2, 3, 5])); // [5, 3]
console.log(bestSumMemo(8, [1, 4, 5])); // [4, 4]
console.log(bestSumMemo(100, [1, 2, 5, 25])); // [25, 25, 25, 25]