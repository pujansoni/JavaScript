class HashTable {
    constructor() {
        this.table = new Array(137);
    }
    //     The choice of a hash function depends on the data type of the key. If your key is an
    // integer, then the simplest hash function is to return the key modulo the size of the array.
    // There are circumstances when this function is not recommended, such as when the keys
    // all end in 0 and the array size is 10. This is one reason the array size should always be a
    // prime number, such as 137, which is the value we used in the preceding constructor function. Also, if the keys are random integers, then the hash function should more
    // evenly distribute the keys. This type of hashing is known as modular hashing.
    // In many applications, the keys are strings. Choosing a hash function to work with string
    // keys proves to be more difficult and should be chosen carefully.
    // A simple hash function that at first glance seems to work well is to sum the ASCII value
    // of the letters in the key. The hash value is then that sum modulo the array size. Here is
    // the definition for this simple hash function:
    simpleHash(data) {
        let total = 0;
        for(let i = 0; i < data.length; ++i) {
            total += data.charCodeAt(i);
        }
        return total % this.table.length;
    }
    // The put() function places the data in the hash table
    put(data) {
        let pos = this.simpleHash(data);
        this.table[pos] = data;
    }
    // Displaying the data from the hash table
    showDistro() {
        let n = 0;
        for(let i = 0; i < this.table.length; ++i) {
            if(this.table[i] != undefined) {
                console.log(i + ": " + this.table[i]);
            }
        }
    }
}

let someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
let hTable = new HashTable();
for(let i = 0; i < someNames.length; ++i) {
    hTable.put(someNames[i]);
}

hTable.showDistro();
// In this example the "Clayton" and "Raymond" string collides with each other so we do not see Raymond in our output. We will see how to create a better hash function in the example 10b_hash.js