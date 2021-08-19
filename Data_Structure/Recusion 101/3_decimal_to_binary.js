function decimalToBinary(decimal, result) {
    if(decimal == 0) {
        return result;
    }
    result = (decimal % 2) + result;
    return decimalToBinary(Math.floor(decimal/2), result);
}

console.log(decimalToBinary(1, ""));
console.log(decimalToBinary(100, ""));
console.log(decimalToBinary(81, ""));
