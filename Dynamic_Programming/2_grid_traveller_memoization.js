// Say that you are a traveler in a 2-D grid. You begin in the top-left corner and your goal is to travel to the bottom-right corner. You may only move down or right.
// In how many ways you can travel to the goal on a grid with dimensions m * n?
// Write a function 'gridTraveler(m, n)' that calculates this

const gridTraveler = (m, n) => {
    if(m === 1 && n === 1) return 1;
    if(m === 0 || n === 0) return 0;

    return gridTraveler(m-1, n) + gridTraveler(m, n-1);
};

console.log("Grid Traveler Recursion");
console.log(gridTraveler(1, 1)); // 1
console.log(gridTraveler(2, 3)); // 3
console.log(gridTraveler(3, 2)); // 3
console.log(gridTraveler(3, 3)); // 6
// The gridTraveler() function with higher argument will take more time to evaluate for recursive solution without memoization
// console.log(gridTraveler(18, 18));

// memoization
// js object, keys will be arg to function, value will be the return value
// It's used to store the recurring pattern and if encountered again will look up the value
// While storing the key-value pairs in the memoized object we will also store the reversed key for gridTraveler() i.e. if gridTraveler(2, 3) has 3 ways then gridTraveler(3, 2) also has 3 ways. So essentially in our recursive solution if we encounter similar pattern in our subtree then we can look up in our memoized object to check if we already evaluated that pair or reversed pair.
const gridTravelerMemo = (m, n, memo={}) => {
    const key = m + ',' + n;
    if(key in memo) return memo[key];
    if(m === 1 && n === 1) return 1;
    if(m === 0 || n === 0) return 0;
    
    memo[key] = gridTravelerMemo(m-1, n, memo) + gridTravelerMemo(m, n-1, memo);
    return memo[key];
};

console.log("Grid Traveler Recursion with Memoization");
console.log(gridTravelerMemo(1, 1)); // 1
console.log(gridTravelerMemo(2, 3)); // 3
console.log(gridTravelerMemo(3, 2)); // 3
console.log(gridTravelerMemo(3, 3)); // 6
console.log(gridTravelerMemo(18, 18)); // 6