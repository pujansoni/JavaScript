function isPalindrome(str) {
    // Defining the base case/stopping condition
    if(str.length == 0 || str.length == 1) {
        return true;
    }

    // Doing some work to shrink the problem space
    if(str.charAt(0) == str.charAt(str.length - 1)) {
        return isPalindrome(str.substr(1, str.length - 2));
    }

    // Additional base case to handle non-palindromes
    return false;
}

console.log(isPalindrome("kayak"));
console.log(isPalindrome("racecar"));