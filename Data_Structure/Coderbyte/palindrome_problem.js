// Given a string, write a function to check if it is a permutation of a palindrome
// A palindrome will always have an even number of each letter so that they can be evenly distributed on either side of the "middle point". There can only ever be one letter with an odd number of occurrences which signifies that that is the letter that is the "middle point".
// This will continue to be true for permutations of palindrome
function isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char);
}

function permutationOfPalindromeChecker(str) {
    const letterFrequency = {};

    for(let i = 0; i < str.length; i++) {
        if(isCharacterALetter(str[i])) {
            const lowerCaseLetter = str[i].toLowerCase();
            letterFrequency[lowerCaseLetter] = letterFrequency[lowerCaseLetter] || 0;
            letterFrequency[lowerCaseLetter]++;
        }
    }

    let hasOddLetterFrequency = false;
    for(const letter in letterFrequency) {
        if(letterFrequency[letter] % 2 !== 0) {
            // odd frequency
            if(!hasOddLetterFrequency) {
                hasOddLetterFrequency = true;
            } else {
                return false;
            }
        }
    }

    return true;
}

console.log(permutationOfPalindromeChecker('level')); // true
console.log(permutationOfPalindromeChecker('on meoln no loenm')); // true
console.log(permutationOfPalindromeChecker('waas tii tca aws')); // true
console.log(permutationOfPalindromeChecker('hnnaha')); // true
console.log(permutationOfPalindromeChecker('elisabeth')); // false
console.log(permutationOfPalindromeChecker('becky')); // false
