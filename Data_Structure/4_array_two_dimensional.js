// A better way to create 2-d array in JS is by extending the JS array object with a function that sets the number of rows and columns and sets each value to a value passed to the function.
Array.matrix = function(numrows, numcols, initial) {
    var arr = [];
    for(var i = 0; i < numrows; ++i) {
        var columns = [];
        for(var j = 0; j < numcols; ++j) {
            columns[j] = initial;
        }
        arr[i] = columns;
    }
    return arr;
}

var nums = Array.matrix(5, 5, 0);
console.log(nums[1][1]);
var names = Array.matrix(3, 3, "");
names[1][2] = "Joe";
console.log(names[1][2]);

// We can also create a two-dimensional array and initialize it to a set of values in one line:
var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
console.log(grades[2][2]);

// Processing two-dimensional array elements
// There are two fundamental patterns used to process the elements of a two-dimensional
// array. One pattern emphasizes accessing array elements by columns, and the other pattern
// emphasizes accessing array elements by rows. We will use the grades array created
// in the preceding code fragment to demonstrate how these patterns work.
// For both patterns, we use a set of nested for loops. For columnar processing, the outer
// loop moves through the rows, and the inner loop processes the columns. For the grades
// array, think of each row as a set of grades for one student. We can compute the average
// for each student’s grades by adding each grade on the row to a total variable and then
// dividing total by the total number of grades on that row. Here is the code for that
// process:
var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
var total = 0;
var average = 0.0;
for(var row = 0; row < grades.length; ++row) {
    for(var col = 0; col < grades[row].length; ++col) {
        total += grades[row][col];
    }
    average = total/grades[row].length;
    console.log("Student " + parseInt(row + 1) + " average: " + average.toFixed(2));
    total = 0;
    average = 0.0;
}

// To perform a row-wise computation, we simply have to flip the for loops so that the
// outer loop controls the columns and the inner loop controls the rows. Here is the calculation for each test:
var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
var total = 0;
var average = 0.0;
for (var col = 0; col < grades.length; ++col) {
    for (var row = 0; row < grades[col].length; ++row) {
        total += grades[row][col];
    }
    average = total / grades[col].length;
    console.log("Test " + parseInt(col+1) + " average: " + average.toFixed(2));
    total = 0;
    average = 0.0;
}

// Arrays of Objects
// All of the examples in this chapter have consisted of arrays whose elements have been
// primitive data types, such as numbers and strings. Arrays can also consist of objects,
// and all the functions and properties of arrays work with objects.
function Point(x, y) {
    this.x = x;
    this.y = y;
}

function displayPts(arr) {
    for(var i = 0; i < arr.length; ++i) {
        console.log(arr[i].x + ", " + arr[i].y);
    }
}

var p1 = new Point(1, 2);
var p2 = new Point(3, 5);
var p3 = new Point(2, 8);
var p4 = new Point(4, 4);
var points = [p1, p2, p3, p4];
for(var i = 0; i < points.length; ++i) {
    console.log("Point " + parseInt(i+1) + ": "+ points[i].x + ", " + points[i].y);
}
var p5 = new Point(12, -3);
points.push(p5);
console.log("After push: ");
displayPts(points);
points.shift();
console.log("After shift: ");
displayPts(points);

// We can use arrays to store complex data in an object. Many of the data structures we
// study in this book are implemented as class objects with an underlying array used to
// store data.
// The following example demonstrates many of the techniques we use throughout the
// book. In the example, we create an object that stores the weekly observed high
// temperature. The object has functions for adding a new temperature and computing
// the average of the temperatures stored in the object. Here is the code:
class weekTemps {
    constructor() {
        this.dataStore = [];
    }

    add(temp) {
        this.dataStore.push(temp);
    }
    
    average() {
        var total = 0;
        for(var i = 0; i < this.dataStore.length; ++i) {
            total += this.dataStore[i];
        }
        return total/this.dataStore.length;
    }
}

var thisWeek = new weekTemps();
thisWeek.add(52);
thisWeek.add(55);
thisWeek.add(61);
thisWeek.add(65);
thisWeek.add(55);
thisWeek.add(50);
thisWeek.add(52);
thisWeek.add(49);
console.log(thisWeek.average());
