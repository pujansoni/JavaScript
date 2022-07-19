let animals = [];

// This runs only once before all test. The order is: beforeAll() -> beforeEach() -> afterEach() -> afterAll()
// beforeAll(() => {
//     animals = ['elephant', 'zebra', 'bear', 'tiger'];
// });

// It runs the code before each test
beforeEach(() => {
    animals = ['elephant', 'zebra', 'bear', 'tiger'];
});

// Similarly we have afterEach() method provided by Jest which runs after each test
// afterEach(() => {
//     animals = ['elephant', 'zebra', 'bear', 'tiger'];
// })

// afterAll() only run once after all the tests and is executed last
// afterAll(() => {
//     animals = ['elephant', 'zebra', 'bear', 'tiger'];
// });

describe("animals array", () => {
    it("should add animal to end of array", () => {
        animals.push('aligator');
        expect(animals[animals.length-1]).toBe('aligator');
    });

    it("should add animal to beginning of array", () => {
        animals.unshift('monkey');
        expect(animals[0]).toBe('monkey');
    });

    it("should have initial length of 4", () => {
        expect(animals.length).toBe(4);
    });
});

describe("testing something else", () => {
    it("true should be truthy", () => {
        expect(true).toBeTruthy();
    });
});

// NOTE: For beforeEach(), afterEach(), beforeAll(), and afterAll(). If we want these to run for a particular block of tests then instead of putting these at the top we can put these blocks to the corresponding describe block containing the test cases 