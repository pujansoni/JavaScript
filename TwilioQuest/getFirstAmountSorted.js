function getFirstAmountSorted(array, num) {
    array.sort();
    return array.slice(0, num);
}