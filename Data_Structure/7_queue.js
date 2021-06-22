// The push() function in JavaScript is used for adding the data to the end of an array, and shift() function is used for removing data from the front of an array
class Queue {
    constructor() {
        this.dataStore = [];
    }

    // The enqueue() function adds an element to the end of a queue
    enqueue(element) {
        this.dataStore.push(element);
    }

    // The dequeue() function removes an element from the front of a queue
    dequeue() {
        return this.dataStore.shift();
    }

    // We can examine the front and back elements of a queue using these functions
    front() {
        return this.dataStore[0]
    }

    back() {
        return this.dataStore[this.dataStore.length - 1]
    }

    // We also need a toString() function to display all the elements in a queue
    toString() {
        var retStr = "";
        for(var i = 0; i < this.dataStore.length; ++i) {
            retStr += this.dataStore[i] + "\n";
        }
        return retStr;
    }

    // Finally, we need a function that lets us know if a queue is empty:
    empty() {
        if(this.dataStore.length == 0) {
            return true;
        } else {
            return false;
        }
    }

    count() {
        return this.dataStore.length;
    }
}

// test program
var q = new Queue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());


console.log("---------------------------------");


// Using the Queue Class: Assigning Partners at a Square Dance
// Each dancer is stored in a Dancer object:
// Test string
var str = `F Allison McMillan
M Frank Opitz
M Mason McMillan
M Clayton Ruff
F Cheryl Ferenback
M Raymond Williams
F Jennifer Ingram
M Bryan Frazer
M David Durr
M Danny Martin
F Aurora Adney`;

class Dancer{
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

function getDancers(males, females) {
    var names = str.split("\n");
    for(var i = 0; i < names.length; ++i) {
        names[i] = names[i].trim();
    }
    for(var i = 0; i < names.length; ++i) {
        var dancer = names[i].split(" ");
        var sex = dancer[0];
        var name = dancer[1];
        if(sex == "F") {
            females.enqueue(new Dancer(name, sex));
        } else {
            males.enqueue(new Dancer(name, sex));
        }
    }
}

// The names are read from the text file into an array. The function then trims the newline
// character from each line. The second loop splits each line into a two-element array, by
// sex and by name. Then the function examines the sex element and assigns the dancer
// to the appropriate queue.
// The next function pairs up the male and female dancers and announces the pairings:

function dance(males, females) {
    console.log("The dance partners are: \n");
    while(!females.empty() && !males.empty()) {
        person = females.dequeue();
        var tempStr = "Female dancer is: " + person.name;
        person = males.dequeue();
        tempStr += " and the Male dancer is: " + person.name;
        console.log(tempStr);
    }
    console.log();
}

var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
if(!femaleDancers.empty()) {
    console.log(femaleDancers.front().name + " is waiting to dance.");
}
if(!maleDancers.empty()) {
    console.log(maleDancers.front().name + " is waiting to dance.");
}

// One change we might want to make to the program is to display the number of male
// and female dancers waiting to dance. We don’t have a function that displays the number
// of elements in a queue, so we need to add it to the Queue class definition:

var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
if(maleDancers.count() > 0) {
    console.log("There are " + maleDancers.count() + " male dancers waiting to dance.");
}
if(femaleDancers.count() > 0) {
    console.log("There are " + femaleDancers.count() + " female dancers waiting to dance.");
}

console.log("---------------------------------");

// Sorting data with Queues
// The radix sort works by making two passes over a data set, in this case the set of integers
// from 0 to 99. The first pass sorts the numbers based on the 1s digit, and the second pass
// sorts the numbers based on the 10s digit. Each number is placed in a bin based on the
// digit in each of these two places. Given these numbers:
// 91, 46, 85, 15, 92, 35, 31, 22
// the first pass of the radix sort results in the following bin configuration:
// Bin 0:
// Bin 1: 91, 31
// Bin 2: 92, 22
// Bin 3:
// Bin 4:
// Bin 5: 85, 15, 35
// Bin 6: 46
// Bin 7:
// Bin 8:
// Bin 9:
// Now the numbers are sorted based on which bin they are in:
// 91, 31, 92, 22, 85, 15, 35, 46
// Next, the numbers are sorted by the 10s digit into the appropriate bins:
// Bin 0:
// Bin 1: 15
// Bin 2: 22
// Bin 3: 31, 35
// Bin 4: 46
// Bin 5:
// Bin 6:
// Bin 7:
// Bin 8: 85
// Bin 9: 91, 92
// Finally, take the numbers out of the bins and put them back into a list, and you get the
// following sorted list of integers:
// 15, 22, 31, 35, 46, 85, 91, 92

// We can implement this algorithm by using queues to represent the bins. We need nine
// queues, one for each digit. We will store the queues in an array. We uses the modulus
// and integer division operations for determining the 1s and 10s digits. The remainder
// of the algorithm entails adding numbers to their appropriate queues, taking the numbers
// out of the queues to re-sort them based on the 1s digit, and the repeating the process
// for the 10s digit. The result is a sorted set of integers.

// First, here is the function that distributes numbers by the place (1s or 10s) digit:
function distribute(nums, queues, n, digit) {
    // digit represent either the 1s or 10s place
    for(var i = 0; i < n; ++i) {
        if(digit == 1) {
            queues[nums[i]%10].enqueue(nums[i]);
        } else {
            queues[Math.floor(nums[i]/10)].enqueue(nums[i]);
        }
    }
}

// Here is the function for collecting numbers from the queues:
function collect(queues, nums) {
    var i = 0;
    for(var digit = 0; digit < 10; ++digit) {
        while(!queues[digit].empty()) {
            nums[i++] = queues[digit].dequeue();
        }
    }
}

function displayArray(arr) {
    var str = "";
    for(var i = 0; i < arr.length; ++i) {
        str += arr[i];
        str += " ";
    }
    console.log(str);
}

// main program
var queues = [];
for(var i = 0; i < 10; ++i) {
    queues[i] = new Queue();
}
var nums = [];
for(var i = 0; i < 10; ++i) {
    nums[i] = Math.floor(Math.floor(Math.random() * 101));
}
console.log("Before radix sort: ");
displayArray(nums);
distribute(nums, queues, 10, 1);
collect(queues, nums);
distribute(nums, queues, 10, 10);
collect(queues, nums);
console.log("\nAfter radix sort: ");
displayArray(nums);
