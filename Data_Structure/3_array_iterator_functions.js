// Iterator Functions
// These functions apply a function to each element of an array, either returning a value, a set of values, or a new array after applying the function to each element of an array.

// Non–Array-Generating Iterator Functions
// The first group of iterator functions we’ll discuss do not generate a new array; instead,
// they either perform an operation on each element of an array or generate a single value
// from an array.
// The first of these functions is forEach(). This function takes a function as an argument
// and applies the called function to each element of an array. Here is an example of how
// it works:
function square(num) {
    console.log(num, num*num);
}

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("forEach() function: ");
nums.forEach(square);

// The next iterator function, every(), applies a Boolean function to an array and returns
// true if the function can return true for every element in the array. Here is an example:
function isEven(num) {
    return num % 2 == 0;
}

var nums1 = [2, 4, 6, 8, 10];
var even = nums1.every(isEven);
console.log("every() function: ");
if(even) {
    console.log("all numbers are even");
} else {
    console.log("not all numbers are even");
}

// The some() function will take a Boolean function and return true if at least one of the
// elements in the array meets the criterion of the Boolean function. For example:
var nums2 = [2, 1, 6, 5];
var someEven = nums2.some(isEven);
console.log("some() function: ");
if(someEven) {
    console.log("some numbers are even");
} else {
    console.log("no numbers are even");
}

// The reduce() function applies a function to an accumulator and the successive elements of an array until the end of the array is reached, yielding a single value. Here is an example of using reduce() to compute the sum of the elements of an array:
function add(runningTotal, currentValue) {
    return runningTotal + currentValue;
}

var nums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = nums3.reduce(add);
console.log("reduce() Function: ");
console.log(sum);
// In the above examples the reduce() function, in conjunction with the add() function, works from left to right,
// computing a running sum of the array elements, like this:
// add(1,2) -> 3
// add(3,3) -> 6
// add(6,4) -> 10
// add(10,5) -> 15
// add(15,6) -> 21
// add(21,7) -> 28
// add(28,8) -> 36
// add(36,9) -> 45
// add(45,10) -> 55

// We can also use reduce() with strings to perform concatenation:
function concat(accumulatedString, item) {
    return accumulatedString + item;
}

var words = ["the ", "quick ", "brown ", "fox "];
var sentence = words.reduce(concat);
console.log("reduce() function on words: ");
console.log(sentence);

// JavaScript also provides a reduceRight() function, which works similarly to re
// duce(), only working from the righthand side of the array to the left, instead of from
// left to right. The following program uses reduceRight() to reverse the elements of an
// array:
var sentence1 = words.reduceRight(concat);
console.log("reduceright() function on words: ");
console.log(sentence1);