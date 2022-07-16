function addFirstToLast(inputArr) {
    if(inputArr.length > 0) {
        return inputArr[0] + inputArr[inputArr.length - 1];
    } else {
        return "";
    }
}