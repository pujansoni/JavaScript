function sumNatural(number) {
    if(number == 1) {
        return 1;
    }
    return number + sumNatural(number - 1);
}

console.log(sumNatural(10));