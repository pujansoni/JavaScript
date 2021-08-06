class Dictionary {
    // The basis for the Dictionary class is the Array class rather than the Object class. If we want to sort the properties of an Object than an Array is appropriate rather than an Object. Everything in JavaScript is an object, so an array is an object.
    constructor() {
        this.datastore = new Array();
    }
    // The first function to define is add(). This function takes two arguments, a key and a
    // value. The key is the index for the value element. Here is the code:
    add(key, value) {
        this.datastore[key] = value;
    }
    // Next, we define the find() function. This function takes a key as its argument and
    // returns the value associated with it. The code looks like this:
    find(key) {
        return this.datastore[key];
    }
    // Removing a key-value pair from a dictionary involves using a built-in JavaScript function:
    // delete. This function is part of the Object class and takes a reference to a key as
    // its argument. The function deletes both the key and the associated value. Here is the
    // definition of our remove() function:
    remove(key) {
        delete this.datastore[key];
    }
    // We can use the showAll() function to show all the key-value pairs of the dictionary
    // Additionally we can also implement the sorting functionality while displaying our elements by sorting the keys in our dictionary
    showAll() {
        Object.keys(this.datastore).sort().forEach(key => {
            console.log(key + " -> " + this.datastore[key]);
        });
    }

    // Auxiliary Functions
    // We can define several functions that can help in special situations. It is good to have a count function to know how many entries there are in a dictionary
    count() {
        let n = 0;
        Object.keys(this.datastore).forEach(key => ++n);
        return n;
    }
    // Here in the above function we didn't use the built-in length method, cause the length method does not work with the string keys

    // We can also use the clear() helper function 
    clear() {
        Object.keys(this.datastore).forEach(key => {
            delete this.datastore[key];
        });
    }
}

let pbook = new Dictionary();
pbook.add("Mike", "123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
pbook.add("Jennifer", "987");
pbook.add("Danny", "012");
pbook.add("Jonathan", "666");
console.log("David's extension: " + pbook.find("David"));
pbook.remove("David");
pbook.showAll();
pbook.clear();
console.log("Number of entries: " + pbook.count());