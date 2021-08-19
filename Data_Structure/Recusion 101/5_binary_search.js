// Here the binarySearch will return the index of the number found
function binarySearch(arr, left, right, number) {
    if(left > right) {
        return -1;
    }
    let mid = Math.floor((left + right) / 2);

    if(number == arr[mid]) {
        return mid;
    }
    
    if(number < arr[mid]) {
        return binarySearch(arr, left, mid - 1, number);
    }

    return binarySearch(arr, mid + 1, right, number);
}

// Here make sure that the array is already sorted
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(binarySearch(arr, 0, arr.length - 1, 2));