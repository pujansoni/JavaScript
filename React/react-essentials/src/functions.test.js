// Any file that ends with test.js will run as the test file for the React application
// Running: npm test will run the test file and will also run the other test.js files
import {timesTwo} from "./functions";

test("Multiplies by two", () => {
    expect(timesTwo(4)).toBe(8);
});
