// The goal of the subset sum problem is to find a subset is present with given sum X (return type is boolean)
// The goal of the subsets with given sum is to count number of subsets with sum X (return type is integer)

function countSubset(arr, n, sum) {
    // Base Cases
    if(sum === 0) {
        return 1;
    }
    if(n === 0 && sum != 0) {
        return 0;
    }
    // If last element is greater than sum, then ignore it
    if(arr[n-1] > sum) {
        return countSubset(arr, n-1, sum);
    }
    /* else, check if sum can be obtained by any of the following:
        i) including the last element
        ii) excluding the last element */
    return countSubset(arr, n-1, sum) + countSubset(arr, n-1, sum-arr[n-1]);
}

let setArr = [1, 2, 1]; // Here the number of subset with given sum are 2 i.e. [1, 2] and [2, 1]
let sum = 3;
let n = setArr.length;
console.log(`Number of subsets are ${countSubset(setArr, n, sum)}`);
