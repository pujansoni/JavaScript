class Materializer {
    constructor(target) {
        this.target = target;
        this.activated = false;
    }

    activate() {
        this.activated = true;
    }

    materialize() {
        return this.activated === true ? this.target : undefined;
    }
}