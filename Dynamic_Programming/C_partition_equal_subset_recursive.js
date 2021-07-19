// here we are determining if the equal subset whose sum of elements are same
// In order to figure out those two subsets it is obvious that the sum of both individual sets should be same. Which means that the sum of the whole set would always be an even numbers, cause if the sum is an odd number than two subsets with equal sum is not possible.
let arr = [1, 5, 11, 5];
let sum = 0;
let n = arr.length;
for(let i = 0; i < n; i++) {
    sum += arr[i];
}
if(sum % 2 == 1) {
    return false;
}
let mem = Array.from(Array(n+1), () => {
    let arr = new Array(sum/2+1);
    return arr.fill(-1);
});
console.log(subsetSum(arr, n, 0, sum/2));

// This function is similar to the subset sum recursive problem
function subsetSum(arr, n, pos, sum) {
    if(sum === 0) {
        return true;
    } else if(pos >= n || sum < 0) {
        return false;
    }
    if(mem[pos][sum] != -1) {
        return mem[pos][sum];
    }
    return mem[pos][sum] = subsetSum(arr, n, pos+1, sum-arr[pos]) || subsetSum(arr, n, pos+1, sum);
}
