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