function isSubsetSum(arr, n, sum) {
    // The value of subset[i][j] will be true if there is a subset of set[0..j-1] with sum equal to i
    let subset = Array.from(Array(n+1), () => new Array(sum+1));
    // If sum is 0, then answer is true
    for(let i = 0; i <= n; i++) {
        subset[i][0] = true;
    }
    
    // If sum is not 0 and set is empty, then answer is false
    for(let i = 1; i <= sum; i++) {
        subset[0][i] = false;
    }

    // Fill the subset table in the bottom up manner
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= sum; j++) {
            if(j < arr[i-1]) {
                subset[i][j] = subset[i-1][j];
            }
            if(j >= arr[i-1]) {
                subset[i][j] = subset[i-1][j] || subset[i-1][j-arr[i-1]];
            }
        }
    }

    // printing the table
    for(let i = 0; i <= n; i++) {
        let str = "";
        for(let j = 0; j <= sum; j++) {
            str += subset[i][j] + "  ";
        }
        console.log(str);
        console.log();
    }

    return subset[n][sum];
}

let setArr = [3, 34, 4, 12, 5, 2]; // Here the subset sum is [4, 5] or [3, 4, 2]
let sum = 9;
let n = setArr.length;
if(isSubsetSum(setArr, n, sum) === true) {
    console.log("Found a subset with given sum");
} else {
    console.log("No subset with given sum");
}
