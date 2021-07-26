// Here we are given the difference and asked to find the number of subsets whose difference is equal to the given difference
// Here let us assume that S1 and S2 are two subsets whose diff is equal to the given diff
// We know that S1 + S2 = Sum(i.e. sum of all elements) and S1 - S2 = Diff(i.e. the given diff)
/*
    S1 - S2 = Diff
    S1 - (Sum - S1) = Diff
    2S1 - Sum = Diff
    S1 = (Diff + Sum)/2
*/
// So, now we have to find the number of ways to create the subset S1 whose value is equal to (Diff + Sum)/2
// This problem is same as the one we saw before i.e. F_count_subset_given_sum_dp.js file
function countSubset(arr, n, sum) {
    // The value of subset[i][j] will be true if there is a subset of set[0..j-1] with sum equal to i
    let subset = Array.from(Array(n+1), () => new Array(sum+1));
    // If sum is 0, then answer is true
    for(let i = 0; i <= n; i++) {
        subset[i][0] = 1;
    }
    
    // If sum is not 0 and set is empty, then answer is false
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

let arr = [3, 1, 2, 3];
let diff = 3;
// Here the answer is 3 cause there are 3 possible pairs:
/*
    S1          S2      Diff
    3, 1, 2     3       3
    3, 3        1, 2    3
    1, 2, 3     3       3
*/
// And we have reduced the problem as discussed above
let sum = 0;
for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
let desiredSum = (sum + diff)/2;
let n = arr.length;
console.log(`Number of subsets with given difference: ${countSubset(arr, n, desiredSum)}`);