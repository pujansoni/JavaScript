const sum = require('./01_matchers_sum');

describe("", () => {
    it("should add 1 + 2 to equal 3", () => {
        const result = sum(1, 2);
        expect (result).toBe(3);
    });

    it("object assignment", () => {
        const obj = {};
        // expect(obj).toBe({});
        // For object and array we use toEqual
        expect(obj).toEqual({});
    });
});


describe("truthy or falsey", () => {
    it("null", () => {
        const n = null;
        // Falsy values: null, undefined, 0, ""
        // Here we can use more than one expect assertions, but it's not preferred. The test will pass only if all the assertions(expect statement) passes and if any of the assertions fails the test will fail
        expect(n).toBeFalsy();
        expect(n).not.toBeTruthy();
        expect(n).toBeNull();
        expect(n).not.toBeUndefined();
    });
});

describe("numbers", () => {
    it("two plus two", () => {
        const value = 2 + 2;
        expect(value).toBe(4); 
        expect(value).toBeGreaterThan(3);
        expect(value).toBeGreaterThanOrEqual(3);
        expect(value).toBeLessThan(7);
        expect(value).toBeLessThanOrEqual(4);
    });

    it("adding floats", () => {
        const value = 0.1 + 0.2;
        expect(value).toBeCloseTo(0.3);
    });
});

describe("strings", () => {
    it("there is no I in team", () => {
        expect("team").not.toMatch(/I/);
    });
});

describe("arrays", () => {
    const shoppingLists = [
        'diapers', 'kleenex', 'trash bags', 'paper towels', 'milk'
    ]
    expect(shoppingLists).toContain('milk');
});

function compileAndroidCode() {
    throw new Error("You are using the wrong JDK");
}

describe("exceptions", () => {
    it("compiling android goes as expected", () => {
        expect(() => compileAndroidCode()).toThrow(Error);
        expect(() => compileAndroidCode()).toThrow("You are using the wrong JDK");
    });
});
