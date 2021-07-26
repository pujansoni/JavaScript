function numToTag(arr, n, a = 0) {
    if(n < 0) {
        return;
    }
    console.log(' '.repeat(a) + "<" + arr[n] + ">");
    numToTag(arr, n-1, a+2);
    console.log(' '.repeat(a) + "</" + arr[n] + ">");
    return;
}

let arr = [1, 2, 3, 4, 5, 6];
numToTag(arr.reverse(), arr.length - 1);