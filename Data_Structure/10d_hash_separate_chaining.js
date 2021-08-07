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

let hTable = new HashTable();
hTable.buildChain();
let someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
for(let i = 0; i < someNames.length; ++i) {
    hTable.put(someNames[i]);
}
hTable.showDistro();