// Goal: Divide the array into 2 subsets such that difference of their sum is minimum
// Here consider S1 and S2 as two subsets of the set S so let us assume that sum of all the elements of S is sum
// So, sum = S1 + S2
// Here in this problem we have to find Diff = abs(S2 - S1)
// We can also write the difference equation as Diff = abs((Sum - S1) - S1)
// Here the best case is that of equal partition where the sum of both the sets is equal in which case the difference will be 0. But for the other case the sum of one set will always be greater than the other so let us consider that greater possibility subset as S2
// So, S1 <= S2 always
// So, S1 <= sum/2
// Here we will use the subset sum problem but we are only interested in the last row of our DP table. Moreover, we are only interested in the columns were the sum is less than sum/2
// So to answer the minimum subset sum difference problem we will implement the subset sum for the given array and from our constructed DP array, in the last row we will look at the difference of each cell which is less than or equal to sum/2
function subsetDiff(arr) {
    let sum = 0;
    let n = arr.length;
    for(let i = 0; i < n; i++) {
        sum += arr[i];
    }
    let dp = Array.from(Array(n+1), () => new Array(sum+1));
    // Fill DP table(Subset sum problem code)
    for(let i = 0; i <= n; i++) {
        for(let j = 0; j <= sum; j++) {
            if(j === 0) {
                dp[i][j] = true;
            } else if(i === 0) {
                dp[i][j] = false;
            } else if(arr[i-1] > j) {
                dp[i][j] = dp[i-1][j];
            } else {
                dp[i][j] = dp[i-1][j] || dp[i-1][j-arr[i-1]];
            }
        }
    }

    // printing the table
    for(let i = 0; i <= n; i++) {
        let str = "";
        for(let j = 0; j <= sum; j++) {
            str += dp[i][j] + "  ";
        }
        console.log(str);
        console.log();
    }

    // we are only concerned with the last row of the dp table as it contains all the elements of the table 
    let diff = Infinity;
    for(let i = 0; i <= sum/2; i++) {
        let first = i;
        let second = sum - i;
        if((dp[n][i] === true) && (diff > Math.abs(first-second))) {
            diff = Math.abs(first-second);
        }
    }
    return diff;
}

let setArr = [2, 4, 2, 3]; // Here the subset sum is [4, 5] or [3, 4, 2]
console.log(`Minimum subset sum difference is ${subsetDiff(setArr)}`);