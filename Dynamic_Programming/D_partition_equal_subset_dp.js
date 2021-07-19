function canPartition(arr) {
    let sum = 0;
    let n = arr.length;
    for(let i = 0; i < n; i++) {
        sum += arr[i];
    }

    if(sum % 2 === 1) {
        return false;
    }

    let dp = Array.from(Array(n+1), () => new Array(sum/2+1));
    // Fill DP table(Subset sum problem code)
    for(let i = 0; i <= n; i++) {
        for(let j = 0; j <= sum/2; j++) {
            if(i === 0 || j === 0) {
                dp[i][j] = false;
            } else if(arr[i-1] > j) {
                dp[i][j] = dp[i-1][j];
            } else if(arr[i-1] === j) {
                dp[i][j] = true;
            } else {
                dp[i][j] = dp[i-1][j] || dp[i-1][j-arr[i-1]];
            }
        }
    }
    return dp[n][sum/2];
}

let arr = [4, 6, 10];
console.log(canPartition(arr));