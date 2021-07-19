// Problem: 1
// Given an array arr of integers, return an array products such that products[i] is equal to the product of all the elements of arr except arr[i]. Solve without the division operator in O(n) time
/* Examples: 
    [1, 2, 3, 4] -> [2*3*4, 1*3*4, 1*2*4, 1*2*3] -> [24, 12, 8, 6]
*/
// The Brute Force Approach: A nested for loop - multiply the integer at every index by the integer at every nestedindex unless index === nestedindex
// The Greedy Approach: A greedy algorithm is an algorithm that builds up a solution piece by piece, always choosing the next piece that offers the most obvious and immediate benefit
// In the above problem if we look at each array index carefully we notice that product at any given index can be broken down to product of numbers before that index and product of numbers after that index i.e. product at index i = product of numbers before i * product of numbers after i

function productOfAllOtherNumbers(arr) {
    let beforeProductSoFar = 1;
    const productsOfBeforeNumbers = [];
    for(let i = 0; i < arr.length; i++) {
        productsOfBeforeNumbers[i] = beforeProductSoFar;
        beforeProductSoFar *= arr[i];
    }

    let afterProductSoFar = 1;
    const productsOfAfterNumbers = [];
    for(let j = arr.length - 1; j > -1; j--) {
        productsOfAfterNumbers[j] = afterProductSoFar;
        afterProductSoFar *= arr[j];
    }

    const products = [];
    for(let k = 0; k < arr.length; k++) {
        products[k] = productsOfBeforeNumbers[k] * productsOfAfterNumbers[k];
    }

    return products;
}

//                          befores -> [1, 1, 2, 6]
//                          afters -> [24, 12, 4, 1]
console.log(productOfAllOtherNumbers([1, 2, 3, 4])); // [24, 12, 8, 6]
console.log(productOfAllOtherNumbers([5, 8, 7, 10])); // [560, 350, 400, 280]
console.log(productOfAllOtherNumbers([0, 1, 2, 4])); // [8, 0, 0, 0]

console.log("Refactoring");

// Looking at the above solution we can still refactor some code and multiply the product in the second for loop itself when we are reverse iterating through the array
function productOfAllOtherNumbersRefactor(arr) {
    let beforeProductSoFar = 1;
    const products = [];
    for(let i = 0; i < arr.length; i++) {
        products[i] = beforeProductSoFar;
        beforeProductSoFar *= arr[i];
    }

    let numbersAfterProductSoFar = 1;
    for(let k = arr.length -1; k > -1; k--) {
        products[k] = numbersAfterProductSoFar * products[k];
        numbersAfterProductSoFar *= arr[k];
    }

    return products;
}

console.log(productOfAllOtherNumbersRefactor([1, 2, 3, 4])); // [24, 12, 8, 6]
console.log(productOfAllOtherNumbersRefactor([5, 8, 7, 10])); // [560, 350, 400, 280]
console.log(productOfAllOtherNumbersRefactor([0, 1, 2, 4])); // [8, 0, 0, 0]

// Dynamic Arrays Fun Facts
/*
An array with automatic resizing
Retrieving an element at a given index takes O(1) time
Appends - If a dynamic array needs to expand to fit a new element, it needs to first copy all existing elements into a second, bigger array. Because of this, an append takes O(n) time in the worst case
With each doubling, the n doubles as well, however with each doubling the number of O(1) appends doubles too. These two things cancel each other out so we can say appends have an amortized cost of O(1)
*/