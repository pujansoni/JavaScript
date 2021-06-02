// Write a function howSum(targetSum, numbers) that takes in a targetSum and an array of numbers as arguments
// The function should return an array containing any combination of elements that adds up to exactly the targetSum
// If there is no combination that adds up to the targetSum, then return null
// If there are multiple combination possible, you may return any single one

const howSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for(let i = 0; i <= targetSum; i++) {
        if(table[i] !== null) {
            for(let num of numbers) {
                table[i + num] = [...table[i], num];
            }
        }
    }

    return table[targetSum];
};

console.log("howSum tabulation: ");
console.log(howSum(7, [2, 3])); // [3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7])); // [4, 3]
console.log(howSum(7, [2, 4])); // null
console.log(howSum(8, [2, 3, 5])); // [2, 2, 2, 2]
console.log(howSum(300, [7, 14])); // null
