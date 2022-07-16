function calculatePower(numArr) {
    numArr = numArr.map((item) => item * 2);
    return numArr.reduce((acc, item) => acc += item, 0);
}