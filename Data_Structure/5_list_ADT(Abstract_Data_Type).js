class List {
    constructor() {
        this.listSize = 0;
        this.pos = 0;
        this.dataStore = [];
    }
    
    // This function appends a new element onto the list at the next available position, which will be equal to the value of the listSize variable:
    append(element) {
        this.dataStore[this.listSize++] = element;
    }
    // After the element is appended, listSize is incremented by 1.

    // Remove: Removing an Element from a List
    // Next, let’s see how to remove an element from a list. remove() is one of the harder functions to implement in the List class. First, we have to find the element in the list, and then we have to remove it and adjust the space in the underlying array to fill the hole left by removing an element. However, we can simplify the process by using the splice() mutator function. To start, let’s define a helper function, find(), for finding the element to remove:
    find(element) {
        for(var i = 0; i < this.dataStore.length; ++i) {
            if(this.dataStore[i] == element) {
                return i;
            }
        }
        return -1;
    }

    // The find function simply iterates through dataStore looking for the specified element. If the element is found, the function returns the position where the element was found. If the element wasn’t found, the function returns -1, which is a standard value to return when an element can’t be found in an array. We can use this value for error checking in the remove() function. The remove() function uses the position returned by find() to splice the dataStore array at that place. After the array is modified, listSize is decremented by 1 to reflect the new size of the list. The function returns true if an element is removed, and false otherwise. Here is the code:
    remove(element) {
        var foundAt = this.find(element);
        if(foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            --this.listSize;
            return true;
        }
        return false;
    }

    // The length() function returns the number of elements in a list:
    length() {
        return this.listSize;
    }

    // toString() function to view the elements of a list
    toString() {
        return this.dataStore;
    }

    // Inserting an element in the list
    // The next function to discuss is insert().An insertion function needs to know where to insert an element, so for now we will say that insertion occurs after a specified element already in the list. With this in mind, here is the definition of the insert() function:
    insert(element, after) {
        var insertPos = this.find(after);
        if(insertPos > -1) {
            this.dataStore.splice(insertPos + 1, 0, element);
            ++this.listSize;
            return true;
        }
        return false;
    }
    // insert() uses the helper function find() to determine the correct insertion position for the new element by finding the element specified in the after argument. Once this position is found, we use shift() to insert the new element into the list. Then we increment listSize by 1 and return true to indicate the insertion was successful.

    // Removing all the element from the list
    clear() {
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = this.pos = 0;
    }
    // The clear() function uses the delete operator to delete the dataStore array, and the next line re-creates the empty array. The last line sets the values of listSize and pos to 0 to indicate the start of a new list.

    // The contains() function is useful when you want to check a list to see if a particular value is part of the list. Here is the definition:
    contains(element) {
        for(var i = 0; i < this.dataStore.length; ++i) {
            if(this.dataStore[i] == element) {
                return true;
            }
        }
        return false;
    }

    // Traversing a list
    // The final set of functions allows movement through a list, and the last function, getElement(), displays the current element of the list
    front() {
        this.pos = 0;
    }

    end() {
        this.pos = this.listSize - 1;
    }

    prev() {
        if(this.pos > 0) {
            --this.pos;
        }
    }

    next() {
        if(this.pos < this.listSize - 1) {
            ++this.pos;
        }
    }

    currPos() {
        return this.pos;
    }

    moveTo(position) {
        this.pos = position;
    }

    getElement() {
        return this.dataStore[this.pos];
    }
}

var names = new List();
names.append("Cynthia");
names.append("Raymond");
names.append("Barbara");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");
console.log(names.toString());
names.remove("Raymond");
console.log(names.toString());
names.front();
console.log(names.getElement());
names.next();
console.log(names.getElement());
names.next();
names.next();
names.prev();
console.log(names.getElement());
