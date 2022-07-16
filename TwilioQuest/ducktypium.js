class Ducktypium {
    constructor(str) {
        console.log(str);
        if(str === "red" || str === "blue" || str === "yellow") {
            this.color = str;
        } else {
            throw new Error("Invalid Color");
        }
        this.calibrationSequence = [];
    }

    refract(color) {
        let colorArr = [], refractColor = "";
        if(color === "red" || color === "blue" || color === "yellow") {
            refractColor = color;
        } else {
            throw new Error("Invalid Color");
        }
        if(refractColor === this.color) {
            return refractColor;
        } else {
            if((refractColor === "red" && this.color === "blue") || (this.color === "red" && refractColor === "blue")) return "purple";
            if((refractColor === "red" && this.color === "yellow") || (this.color === "red" && refractColor === "yellow")) return "orange";
            if((refractColor === "yellow" && this.color === "blue") || (this.color === "yellow" && refractColor === "blue")) return "green";
        }
    }

    calibrate(numArr) {
        numArr.sort();
        numArr = numArr.map((item) => item * 3);
        this.calibrationSequence = numArr;
    }
}
