class HashTable {
    constructor() {
        this.table = new Array(137);
    }
    // Let us create a better hash function utilizing Horner's method:
    betterHash(string) {
        const H = 37;
        let total = 0;
        for(let i = 0; i < string.length; ++i) {
            total += H * total + string.charCodeAt(i);
        }
        total = total % this.table.length;
        if(total < 0) {
            total += this.table.length - 1;
        }
        return parseInt(total);
    }
    put(data) {
        let pos = this.betterHash(data);
        this.table[pos] = data;
    }
    showDistro() {
        let n = 0;
        for(let i = 0; i < this.table.length; ++i) {
            if(this.table[i] != undefined) {
                console.log(i + ": " + this.table[i]);
            }
        }
    }   
}

// Let us look at how to hash the integer keys. The data we're working with is student grades. The key is a nine-digit student identification number, which we will generate randomly, along with the student's grade
//     The getRandomInt() function allows us to specify a maximum and minimum random
// number. For a set of student grades, it is reasonable to say that the minimum grade is
// 50 and the maximum grade is 100.
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function genStuData(arr) {
    for(let i = 0; i < arr.length; ++i) {
        let num = "";
        for(let j = 1; j <= 9; ++j) {
            num += Math.floor(Math.random() * 10);
        }
        num += getRandomInt(50, 100);
        arr[i] = num;
    }
}

let someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
let hTable = new HashTable();
for(let i = 0; i < someNames.length; ++i) {
    hTable.put(someNames[i]);
}
hTable.showDistro();

let numStudents = 10;
let arrSize = 97;
let idLen = 9;
let students = new Array(numStudents);
genStuData(students);
console.log("\n\nStudent data: \n");
for(let i = 0; i < students.length; ++i) {
    console.log(students[i].substring(0, 8) + " " + students[i].substring(9));
}
console.log("\n\nData distribution: \n");
let hTable1 = new HashTable();
for(let i = 0; i < students.length; i++) {
    hTable1.put(students[i]);
}
hTable1.showDistro();