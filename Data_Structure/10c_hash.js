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
    // Now that we have covered hash functions, we can apply this knowledge to use a hash table to acutally store data. To do this, we have to modify the put() function so that it accepts both a key and data, hashes the key, and then uses that information to store the data in the table
    put(key, data) {
        let pos = this.betterHash(key);
        this.table[pos] = data;
    }
    get(key) {
        return this.table[this.betterHash(key)];
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