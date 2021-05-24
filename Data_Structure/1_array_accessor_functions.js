// Searching for a Value
var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer", "David"];
var name1 = "Cynthia";
var position = names.indexOf(name1);
if (position >= 0) {
    console.log("Found " + name1 + " at position " + position);
} else {
    console.log(name1 + " not found in array.");
}

// If you have multiple occurrence the indexOf() function will always return the position of the first occurrence
var name2 = "David";
var firstPos = names.indexOf(name2);
console.log("First found " + name2 + " at position " + firstPos);
var lastPos = names.lastIndexOf(name2);
console.log("Last found " + name2 + " at position " + lastPos);

// String representation of arrays
var namestr = names.join();
console.log(namestr);
namestr = names.toString();
console.log(namestr);

// Creating new arrays from existing arrays
// There are two accessor functions that allow you create new arrays from existing arrays:
// concat() and splice(). The concat() function allows you to put together two or more
// arrays to create a new array, and the splice() function allows you to create a new array
// from a subset of an existing array.
// Let’s look first at how concat() works. The function is called from an existing array,
// and its argument is another existing array. The argument is concatenated to the end of
// the array calling concat(). The following program demonstrates how concat() works:
var cisDept = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];
var dmpDept = ["Raymond", "Cynthia", "Bryan"];
var itDiv = cisDept.concat(dmpDept);
console.log(itDiv);
itDiv = dmpDept.concat(cisDept);
console.log(itDiv);

// The splice() function creates a new array from the contents of an existing array. The
// arguments to the function are the starting position for taking the splice and the number
// of elements to take from the existing array. Here is how the method works:
var spliceDept = cisDept.splice(3, 3);
var updatedCis = cisDept;
console.log(spliceDept);
console.log(cisDept);
// Check out MDN for better understanding: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// The splice() function changes the original array, but the slice() function does not change the original array. The result of the slice() can be stored in the new array if we want to manipulate the slice() operation result
var slicedDept = dmpDept.slice(1, 2);
console.log(slicedDept);