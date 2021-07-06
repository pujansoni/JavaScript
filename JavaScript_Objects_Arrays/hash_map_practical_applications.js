// One type of problem used to solve with the help of HashMap is to aggregate all the information by key. We can also use a hash map to achieve this goal
// Example: Given a string find the first non-repeating character in it and return it's index. If it doesn't exist, return -1
// A simple way to solve this problem is to count the occurrence of each character first. And then go through the results to find out the first unique character.
// Therefore, we can maintain a hashmap whose key is the character while the value is a counter for the corresponding character. Each time when we iterate a character, we just add the corresponding value by 1.
// Note:The key to solving this kind of problem is to decide your strategy when you encounter an existing key.

// Example 1: Given a string s, return the first non-repeating character in it and return its index. If it does not exist return -1
var firstUniqChar = function(s) {
    let resultObj = {};
    for(let i = 0; i < s.length; i++) {
        if(s[i] in resultObj) {
            resultObj[s[i]] += 1;
        } else {
            resultObj[s[i]] = 1;
        }
    }
    console.log(resultObj);
    for(const property in resultObj) {
        if(resultObj[property] === 1) {
            return s.indexOf(property);
        }
    }
    return -1;
};

// Example 2: Intersection of Two Arrays II
// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times in it shows in both arrays and you may return the result in any order
var intersect = function(nums1, nums2) {
    var resultNums1 = convertToObj(nums1);
    var resultNums2 = convertToObj(nums2);
    var finalArr = [];
    for(let [key, value] of Object.entries(resultNums1)) {
        if(key in resultNums2) {
            let smaller = value <= resultNums2[key] ? value : resultNums2[key];
            while(smaller > 0) {
                finalArr.push(key);
                smaller--;
            }
        }
    }
    return finalArr.map(num => parseInt(num));
};

function convertToObj(nums) {
    var tempObj = {};
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] in tempObj) {
            tempObj[nums[i]] += 1;
        } else {
            tempObj[nums[i]] = 1;
        }
    }
    return tempObj;
}

// Example 3: Contains Duplicates
// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
var containsNearbyDuplicate = function(nums, k) {
    var resultObj = {};
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] in resultObj) {
            resultObj[nums[i]].push(i);
        } else {
            resultObj[nums[i]] = [i];
        }
    }
    for(let [key, value] of Object.entries(resultObj)) {
        // check to see if there are any duplicates
        if(value.length > 1) {
            let smallestDiff = Infinity;
            for(let i = 1; i < value.length; i++) {
                if((value[i] - value[i-1]) < smallestDiff) {
                    smallestDiff = value[i] - value[i-1];
                }
            }
            if(smallestDiff <= k) return true;
        }
    }
    return false;
};

// Example 4: Group Anagrams
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
var groupAnagrams = function(strs) {
    let resultObj = {};
    for(let i = 0; i < strs.length; i++) {
        let sortedStr = strs[i].split('').sort().join('');
        if(sortedStr in resultObj) {
            resultObj[sortedStr].push(strs[i]);
        } else {
            resultObj[sortedStr] = [strs[i]];
        }
    }
    let finalArr = [];
    for(let [key, value] of Object.entries(resultObj)) {
        finalArr.push(value);
    }
    if(finalArr) {
        return finalArr;
    } else {
        return [[""]];
    }
};

// Example 5: Valid suduko
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
// 1) Each row must contain the digits 1-9 without repetition.
// 2) Each column must contain the digits 1-9 without repetition.
// 3) Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
var isValidSudoku = function(board) {
    // We will check for three cases: First row, Second column, Third the 3x3 grid
    
    // checking if all the rows are valid
    for(let i = 0; i < 9; i++) {
        let tempResult = {};
        for(let j = 0; j < 9; j++) {
            let tempInt = parseInt(board[i][j]);
            if(!isNaN(tempInt)) {
                if(tempInt in tempResult) {
                    return false;
                } else {
                    tempResult[tempInt] = 1;
                }
            }
        }
    }
    
    // checking if all the columns are valid, just interchaning the positioning of the elements in the code above, we can alter the code above to include both logic, but for the sake of simplicity we will use the prolonged version and check for each columns again using two for loops
    for(let i = 0; i < 9; i++) {
        let tempResult = {};
        for(let j = 0; j < 9; j++) {
            let tempInt = parseInt(board[j][i]);
            if(!isNaN(tempInt)) {
                if(tempInt in tempResult) {
                    return false;
                } else {
                    tempResult[tempInt] = 1;
                }
            }
        }
    }
    
    // checking the 3x3 grid
    // Here the k and l for loops are used to iterate towards the outer group while i and j are referenced w.r.t k and l in order to track indexing in each grid
    for(let k = 0; k < 9; k += 3) {
        for(let l = 0; l < 9; l += 3) {
            let tempResult = {};
            for(let i = k; i < k + 3; i++) {
                for(let j = l; j < l + 3; j++) {
                    let tempInt = parseInt(board[i][j]);
                    if(!isNaN(tempInt)) {
                        if(tempInt in tempResult) {
                            return false;
                        } else {
                            tempResult[tempInt] = 1;
                        }
                    }
                }
            }   
        }
    }
    return true;
};
