function isSubsetSum(arr, n, sum) {
    // Base Cases
    if(sum === 0) {
        return true;
    }
    if(n === 0 && sum != 0) {
        return false;
    }
    // If last element is greater than sum, then ignore it
    if(arr[n-1] > sum) {
        return isSubsetSum(arr, n-1, sum);
    }
    /* else, check if sum can be obtained by any of the following:
        i) including the last element
        ii) excluding the last element */
    return isSubsetSum(arr, n-1, sum) || isSubsetSum(arr, n-1, sum-arr[n-1]);
}

let setArr = [3, 34, 4, 12, 5, 2]; // Here the subset sum is [4, 5] or [3, 4, 2]
let sum = 9;
let n = setArr.length;
if(isSubsetSum(setArr, n, sum) === true) {
    console.log("Found a subset with given sum");
} else {
    console.log("No subset with given sum");
}

// This solution in worst case can be exponential so it is not always efficient