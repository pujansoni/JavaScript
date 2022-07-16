function calculateMass(strArr) {
    return strArr.reduce((acc, item) => acc += item.length, 0);
}