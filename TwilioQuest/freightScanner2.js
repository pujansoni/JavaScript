function scan(strArr) {
    let outputArr = []
    for(let i = 0; i < strArr.length; i++) {
        if(strArr[i] === "contraband") {
            outputArr.push(i);
        }
    }
    return outputArr;
}