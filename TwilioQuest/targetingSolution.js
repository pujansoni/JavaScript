class TargetingSolution {
    constructor(inputObj) {
        this.x = inputObj.x;
        this.y = inputObj.y;
        this.z = inputObj.z;
    }

    target() {
        return "(" + this.x + ", " + this.y + ", " + this.z + ")";
    }
}