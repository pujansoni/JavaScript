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
    //     The put() function hashes the key and then attempts to store the data in the
    // first cell of the chain at the hashed position. If that cell already has data in it, the function
    // searches for the first open cell and stores the data in that cell.
    put(key, data) {
        let pos = this.betterHash(data);
        let index = 0;
        if(this.table[pos][index] == undefined) {
            this.table[pos][index+1] = data;
        } else {
            while(this.table[pos][index] != undefined) {
                ++index;
            }
            this.table[pos][index] = data;
        }
    }
    //     The get() function starts out by hashing the key to get the position of the key in the
    // hash table. Then the function searches the cells until it finds the key it is looking for.
    // When it finds the correct key, it returns the data from the adjacent cell to the key’s cell.
    // If the key is not found, the function returns undefined.
    get(key) {
        let index = 0;
        let hash = this.betterHash(key);
        if(this.table[pos][index] = key) {
            return this.table[pos][index+1];    
        } else {
            while(this.table[pos][index] != key) {
                index += 2;
            }
            return this.table[pos][index+1];
        }
        return undefined;
    }
    showDistro() {
        let n = 0;
        for(let i = 0; i < this.table.length; ++i) {
            if(this.table[i][0] != undefined) {
                console.log(i + ": " + this.table[i]);
            }
        }
    }
    buildChain() {
        for(let i = 0; i < this.table.length; ++i) {
            this.table[i] = new Array();
        }
    }   
}

// A second technique for handling collisions is called linear probing. Linear probing is an
// example of a more general hashing technique called open-addressing hashing. With
// linear probing, when there is a collision, the program simply looks to see if the next
// element of the hash table is empty. If so, the key is placed in that element. If the element
// is not empty, the program continues to search for an empty hash-table element until
// one is found. This technique makes use of the fact that any hash table is going to have
// many empty elements and it makes sense to use the space to store keys.
// Linear probing should be chosen over separate chaining when your array for storing
// data can be fairly large. Here’s a formula commonly used to determine which collision
// method to use: if the size of the array can be up to half the number of elements to be
// stored, you should use separate chaining; but if the size of the array can be twice the size
// of the number of elements to be stored, you should use linear probing.
// The put() and the get() function are defined below
function linearPut(key, data) {
    var pos = this.betterHash(key);
    if (this.table[pos] == undefined) {
        this.table[pos] = key;
        this.values[pos] = data;
    } else {
        while (this.table[pos] != undefined) {
        pos++;
        }
        this.table[pos] = key;
        this.values[pos] = data;
    }
}

function linearGet(key) {
    var hash = -1;
    hash = this.betterHash(key);
    if (hash > -1) {
        for (var i = hash; this.table[hash] != undefined; i++) {
            if (this.table[hash] == key) {
                return this.values[hash];
            }
        }
    }
    return undefined;
}