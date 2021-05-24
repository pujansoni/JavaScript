// JavaScript has a set of mutator functions that allow you to modify the contents of an
// array without referencing the individual elements. These functions often make hard
// techniques easy, as you’ll see below.

// Adding elements to an array
var nums = [1, 2, 3, 4, 5];
nums.push(6);
console.log("Push operation: ");
console.log(nums);

// The mutator function for adding array elements to the beginning of an array is un
// shift(). Here is how the function works:
console.log("Unshift operation: ");
nums.unshift(1);
console.log(nums);

// Removing elements from an array
console.log("Pop operation: ");
console.log(nums.pop());
console.log(nums);

// The mutator function we need to remove an element from the beginning of an array is
// shift(). Here is how the function works:
console.log("Shift operation: ");
nums.shift();
console.log(nums);

// Adding and Removing Elements from the Middle of an Array
// Trying to add or remove elements at the end of an array leads to the same problems we
// find when trying to add or remove elements from the beginning of an array—both
// operations require shifting array elements either toward the beginning or toward the
// end of the array. However, there is one mutator function we can use to perform both
// operations—splice().
// To add elements to an array using splice(), you have to provide the following arguments:
// • The starting index (where you want to begin adding elements)
// • The number of elements to remove (0 when you are adding elements)
// • The elements you want to add to the array

// Splice adding elements
var nums1 = [1, 2, 3, 4, 5, 6];
var newElements = [4, 5, 6];
nums1.splice(3, 0, ...newElements); // This line is equivalent to writing: nums1.splice(3, 0, 4, 5, 6);
console.log("Splice adding elements: ");
console.log(nums1);

//Splice removing elements
nums1.splice(3, 3);
console.log("Splice removing elements");
console.log(nums1);

// Putting array elements in order
// The last two mutator functions are used to arrange array elements into some type of
// order. The first of these, reverse(), reverses the order of the elements of an array. Here
// is an example of its use:
var nums2 = [1, 2, 3, 4, 5, 6];
nums2.reverse();
console.log("Reverse operation");
console.log(nums2);

// We often need to sort the elements of an array into order. The mutator function for this
// task, sort(), works very well with strings:
var names = ["David","Mike","Cynthia","Clayton","Bryan","Raymond"];
names.sort();
console.log("Sort Words");
console.log(names);

// But sort() does not work so well with numbers:
var nums3 = [3, 1, 2, 100, 4, 200];
nums3.sort();
console.log("Sort Numbers Incorrect");
console.log(nums3);

// The sort() function sorts data lexicographically, assuming the data elements are strings,
// even though in the preceding example, the elements are numbers. We can make the
// sort() function work correctly for numbers by passing in an ordering function as the
// first argument to the function, which sort() will then use to sort the array elements.
// This is the function that sort() will use when comparing pairs of array elements to
// determine their correct order.
// For numbers, the ordering function can simply subtract one number from another
// number. If the number returned is negative, the left operand is less than the right
// operand; if the number returned is zero, the left operand is equal to the right operand;
// and if the number returned is positive, the left operand is greater than the right operand.
// With this in mind, let’s rerun the previous small program using an ordering function:
function compare(num1, num2) {
    return num1 - num2;
}
nums3.sort(compare);
console.log("Sort Numbers Correct");
console.log(nums3); // 1,2,3,4,100,200