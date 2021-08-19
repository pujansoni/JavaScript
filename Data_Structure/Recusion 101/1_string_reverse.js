function stringReverse(str) {
    if(!str) {
        return "";
    }
    // The smallest amount of work to do in each iteration
    return stringReverse(str.substr(1, str.length)) + str.charAt(0);
}

console.log(stringReverse("hello"));