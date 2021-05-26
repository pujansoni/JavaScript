class Stack {
    constructor() {
        this.dataStore = [];
        this.top = 0;
    }

    // When we push a new element onto a stack, we have to store it in the top position and increment the top variable so that the new top is the next empty position in the array.
    push(element) {
        this.dataStore[this.top++] = element;
    }
    // the increment operator after the call to this.top. Placing the operator there ensures that the current value of top is used to place the new element at the top of the stack before top is incremented.

    // The pop() function does the reverse of the push() function—it returns the element in the top position of the stack and then decrements the top variable:
    pop() {
        return this.dataStore[--this.top];
    }

    // The peek() function returns the top element of the stack by accessing the element at the top-1 position of the array:
    peek() {
        return this.dataStore[this.top - 1];
    }
    // If you call the peek() function on an empty stack, you get undefined as the result. That’s because there is no value stored at the top position of the stack since it is empty.

    // There will be situations when you need to know how many elements are stored in a stack. The length() function returns this value by returning the value of top:
    length() {
        return this.top;
    }

    // Finally, we can clear a stack by simply setting the top variable back to 0:
    clear() {
        this.top = 0;
    }
}

var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
console.log("length: " + s.length());
console.log(s.peek());
var popped = s.pop();
console.log("The popped element is: " + popped);
console.log(s.peek());
s.push("Cynthia");
console.log(s.peek());
s.clear();
console.log("length: " + s.length());
console.log(s.peek());
s.push("Clayton");
console.log(s.peek());

// The stack data structure can be used by converting a number to any of the bases 2 through 9
function mulBase(num, base) {
    var s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);
    } while(num > 0);
    var converted = "";
    while(s.length() > 0) {
        converted += s.pop();
    }
    return converted;
}

var num = 32;
var base = 2;
var newNum = mulBase(num, base);
console.log(num + " converted to base " + base + " is " + newNum);
num = 125;
base = 8;
var newNum = mulBase(num, base);
console.log(num + " converted to base " + base + " is " + newNum);

// using a stack to determine if a number is palindrome
function isPalindrome(word) {
    var s = new Stack();
    for(var i = 0; i < word.length; ++i) {
        s.push(word[i]);
    }
    var rword = "";
    while(s.length() > 0) {
        rword += s.pop();
    }
    if(word == rword) {
        return true;
    } else {
        return false;
    }
}

var word = "hello";
if(isPalindrome(word)) {
    console.log(word + " is a palindrome.");
} else {
    console.log(word + " is not a palindrome.");
}

word = "racecar";
if(isPalindrome(word)) {
    console.log(word + " is a palindrome.");
} else {
    console.log(word + " is not a palindrome.");
}

// To simulate computing 5! using a stack, first push the numbers 5 through 1 onto a stack. Then, inside a loop, pop each number and multiply the number by the running product, resulting in the correct answer, 120.
function factorial(n) {
    var s = new Stack();
    while(n > 1) {
        s.push(n--);
    }
    var product = 1;
    while(s.length() > 0) {
        product *= s.pop();
    }
    return product;
}

console.log(factorial(5));