function countSubset(arr, n, sum) {
    // The value of subset[i][j] will be true if there is a subset of set[0..j-1] with sum equal to i
    let subset = Array.from(Array(n+1), () => new Array(sum+1));
    // If sum is 0, then answer is true/1
    for(let i = 0; i <= n; i++) {
        subset[i][0] = 1;
    }
    
    // If sum is not 0 and set is empty, then answer is false/0
    for(let i = 1; i <= sum; i++) {
        subset[0][i] = 0;
    }

    // Fill the subset table in the bottom up manner
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= sum; j++) {
            if(j < arr[i-1]) {
                subset[i][j] = subset[i-1][j];
            }
            if(j >= arr[i-1]) {
                subset[i][j] = subset[i-1][j] + subset[i-1][j-arr[i-1]];
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

let setArr = [1, 2, 1]; // Here the subset sum with given sum is [1, 2] and [2, 1]
let sum = 3;
let n = setArr.length;
console.log(`Number of subsets are ${countSubset(setArr, n, sum)}`);