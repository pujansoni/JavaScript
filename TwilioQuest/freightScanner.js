function scan(strArr) {
    let contraband = 0;
    for(let i = 0; i < strArr.length; i++) {
        if(strArr[i] === "contraband") {
            contraband++;
        }
    }
    return contraband;
}