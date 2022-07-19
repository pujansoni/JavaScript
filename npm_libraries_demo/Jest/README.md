# JEST

Writing tests have high impact in application development. The application will be **stable** and **easy to maintain** if the test results have few bugs

**Jest** is a **JavaScript** unit testing framework, maintained by **Facebook** that lets you define your **unit tests**

## Features of Jest

**Mocking**

- Jest Allows to **mock objects** in test files
- Can mock specific objects or turn on automatic mocking with _automock_, which will mock every object

**Snapshot Testing**

- UI testing to become simplified as Jest can capture snapshots of **React trees** or **other serializable values**

## Jest is Fast!

- Runs tests parallelly in processes to minimize test runtime
- Runs previously failed tests first
- Automatically finds tests related to changed files
- Easy to set up JavaScript testing solution
- Provides Test Isolation i.e. no two tests will ever conflict with each other
- Jest works well with other testing libraries (example: Enzyme, Chai)

# Installing Jest

Install Jest using **npm**:

```
npm install jest
```

Or via **yarn**:

```
yarn add jest
```

## First Test Using Jest

Create a **sum.js** file with a function that adds two numbers:

```
function sum(a, b) {
    return a + b;
}
module.exports = sum;
```

Create **sum.test.js** file. Let us get started by writing a test for the above function:

```
const sum = require('./sum');
test('addition: 1+2=3', () => {
    expect(sum(1, 2).toBe(3));
});
```

## Run the Test

You can run Jest from the terminal and finally, you get test results

Run all tests (default):

```
jest
```

Run only the tests that were stipulated with a pattern or filename:

```
jest sum.test --config=package.json
```

**How Jest Identifies Test Files? Jest runs all the files with .spec.js and .test.js extension in the current directory**

## Testing a To-do List Application

A simple _To-do List Application_ has a lot of features to help you keep track of your daily commitments - Anywhere, Anytime

Let us test the javascript _To-do List Application_ that has the following functions:

- addTask
- updateTask
- closeTask
- deleteTask

# Introduction to Matchers

Jest utilizes **matchers** to test values in different ways. There are several **matchers** available and this section will introduce few of the most useful ones like

- Common Matchers
- Truthiness
- Numbers
- Strings
- Arrays
- Exceptions etc.

## Common Matchers

Jest uses **toBe** and **toEqual** matchers to test a value is with exact equality:

- **toBe** which uses **===** to test exact equality

```
tes('2 + 2 = 4', () => {
    expect(2 + 2).toBe(4);
});
```

- **toEqual** which recursively checks every field of an **object** or **array**

```
test('obj assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
});
```

- Can also test for opposite of a matcher using **not.toBe**

## Truthiness

Sometimes you need to differentiate **undefined**, **null**, and **false**, but in some cases, no need to treat these differently

Here are the helpers that let you be explicit about what you want

- **toBeNull** matches only _null_
- **toBeUndefined** matches only _undefined_
- **toBeDefined**: opposite of **toBeUndefined**
- **toBeTruthy** matches anything that an _if statement treats as true_
- **toBeFalsy** matches anything that an _if statement treats as false_

The following test program will explain the concept of truthiness in Jest

```
test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});
```

## Matchers for Numbers

The number can be compared using **toBeGreaterThan, toBeGreaterThanOrEqual, toBeLessThan, and toBeLessThanOrEqual**

The **toBe** and **toEqual** are equivalent for numbers

```
test('1 + 1', () => {
  const value = 1 + 1;
  expect(value).toBeGreaterThan(3);
});
```

Here the test fails, because the sum is not greater than 3.

## Matcher for Floating Point Numbers

To check equality of the floating point numbers, use **toBeCloseTo** instead of **toEqual**. This will avoid the tiny rounding error that occurs while using **toEqual**

```
test('Checking "toBe"', () => {
  const value = 0.1 + 0.2;
  expect(value).toBe(0.3);//rounding error
  expect(value).toBeCloseTo(0.3); //works.
});
```

## String Matcher

You can check strings against regular expressions with **toMatch**

```
test('There is no "I" in Fresco Play', () => {
  expect('Fresco Play').not.toMatch(/I/);
});
```

## Array Matcher

Jest allows you to check if an array contains a particular item using **toContain**:

```
var employee = [];
employee = ["Johns", "Liani"];
test("Expects 'Johns' in employee Array", () => {
    expect(employee).toContain('Johns');
});
```

## Exceptions

Use **toThrow**, if you want to test that a particular function throws an error when it's called

Here is a sample test that shows four different ways of checking if a function throws an Error

```
var employee = [];
function EmptyCheck(0 {
    if(employee.length === 0) {
        throw new Error('Empty Array');
    }
})

test('Empty check', () => {
    expect(EmptyCheck).toThrow();
    expect(EmptyCheck).toThrow(Error);
    expect(EmptyCheck).toThrow('Empty Array');
    expect(EmptyCheck).toThrow(/Empty/); // uses regexp
});
```

# Setup and Teardown

Sometimes while writing tests, you have some **setup work** that has to happen **before tests run**, and you have some **finishing work** that needs to happen **after test run**. Jest provides some helper functions to handle this. Some of them are,

- **beforeEach** and **afterEach**
- **beforeAll** and **afterAll**
- **describe**

## Repeating Setup for Many Tests

If you have some work that needs to be done **frequently for many tests**, you can use **beforeEach** and **afterEach** functions

### An Example for Repeating Setup

Consider you have **Login tests** that interact with the _Employee DB_

Here we have two _Login tests_, where **getData()** is called before each test, and **clearData()** is called after each test

```
beforeEach(()=>{
 getData();
});
afterEach(()=>{
 clearData();
});
test('John: Logins',()=>{
 expect(Login('John','**pswd**')).toBeTruthy();
});
test('Liani: Logins',()=>{
 expect((Login('Liani','**pswd**')).toBeTruthy();
});
```

## One-Time Setup

In some cases, you only need to do setup once, toward the start of a file. This can be particularly annoying when the _setup_ is _asynchronous_, so you cannot just do it inline. Jest provides **beforeAll** and **afterAll** to deal with this circumstance

### One-Time Setup: Example

Consider you write tests for **getDetails()** and **getExperience()** which interacts with the Employee DB

If both **initializeDB** and **releaseDB** returned promises, and the EmployeeDb could be reused between tests, we can write our test code as:

```
beforeAll(()=>{
 return initializeDB();
});
afterAll(()=>{
 return releaseDB();
});
test('Employee DB has John',()=>{
  expect(checkEmployee('John')).toBeTruthy();
});
test('Checks experience of Liani',()=>{
  expect(getExperience('Liani')).toBeGreaterThan('2');
});
```

## Scoping

You can group tests together using a **describe** block. When they are inside a describe block, the **before** and **after** blocks only apply to the tests within that **describe block**

### Scoping: An Example

For example, let us say we had not just a Cloud database, but also a **Local database**. We could do a different setup for different tests:

```
// Applies to all tests in this file
beforeAll(() => {
  return initializeCloudDB();
});
test('get updates from Cloud', () => {
  expect(isConnected('CloudDB')).toBeTruthy();
});
describe('Connecting to local', () => {
  // Applies only to tests in this describe block
  beforeEach(() => {
    return initializeLocalDB();
  });
  test('Updating local with cloud', () => {
    expect(UpdateLocalDB('LocalDB','CloudDB')).toBe(true);
  });
});
```

## General Advice

If a test fails, the first thing that you have to check is whether the test if failing when it is the only test that runs

In Jest, it is simple to run only one test - just _temporarily change that test command to a_ **_test.only_**:

```
test.only('only test that runs', () => {

  expect(true).toBe(false);

});
```

# Introduction to Mock Functions

Mock Functions are **simulated functions** that _mimic the behavior of the real ones_ by isolating funcitonality into small, testable units under test

**Why Mock Functions?**

- The real function is **_complex to incorporate it in a unit testing_** (Example, your function has many networking calls)
- The result of your function is _non-deterministic_

### Different Ways to Mock Functions in Jest

You can create a mock function with **jest.fn()**. If no implementation is given, the mock function will return **undefined** when invoked

There are two ways to mock functions in Jest

- By creating a **mock function** to use in test code
- By writing a **manual mock** to override a module dependency

## Trying a Mock Function

Let us take a simple example that **myFun** is mocked **mockedFun** in test:

```
function myFun(){
  return "myFun called";
}
```

```
test('First Mock Function', () => {
  mockedFun =  jest.fn();
  mockedFun.mockImplementation(function () {
      return "mockedFun called";
});
console.log(mockedFun());
});
```

Test Result will show the **mockedFun called** message

## .mock property

All mock functions have the special property called **.mock**, the place where **_all information about how the function that has been called is kept_**

These mock members are very useful in tests to assert how these functions get called, or instantiated:

```
test('.mock property example', () => {
 const mockFn = jest.fn();
 const a = new mockFn();
 console.log(mockFn.mock.instances.length); // is 1
});
```

## Available Mock Methods

There are many functions related to mock in Jest. Let us check few of them

- mock.calls
- mock.instances
- mockClear()
- mockReset()
- mockRestore()
- mockImplementation(fn) and mockImplementationOnce(fn)
- mockReturnValue(val) and mockReturnValueOnce(val)

### mock.calls array

- Jest records all calls that have been made during mock function
- Each call is represented by an **array of arguments** that were passed during the call

For example, a mock function **f** is called twice, with the arguments f(arg1, arg2), and then with the arguments f(arg3, arg4) would have a mock.calls array like below:

```
[[arg1, arg2], [arg3, arg4]];
```

### mock.instances array

- An array that records all the **object instances** that have been instantiated from the mock function using **new**

Below example has a mock function that has been instantiated twice

```
test('.mock property example', () => {
    const mockFn = jest.fn();
    const a = new mockFn();
    const b = new mockFn();

    console.log(mockFn.mock.instances[0] === a); // true
    console.log(mockFn.mock.instances[1] === a); // false
});
```

### mockClear() and mockReset()

**mockClear()**

- Resets all information stored in the **mockFn.mock.calls** and **mockFn.mock.instances** arrays
- Useful when you have to clean up mock's usage data between two assertions

**mockReset()**

- Resets all information stored in the mock, also any **initial implementation** given
- Useful when you want to **completely restore a mock back to its initial state**

### mockRestore()

- Will Remove the mock and restores the initial implementation
- Helpful when you have to mock functions in particular test cases and restore the original implementation in others
- Only works when mock was created with **jest.spyOn**. Thus you have to take care of restoration yourself when manually assigning **jest.fn()**

### Mock Function Implementation

Function's actual implementation can be mocked in test using

- **mockImplementation(fn)** - it allows to change the implementation for testing
- **mockImplementationOnce(fn)** - it allows changing the implementation only once in the entire testing process

### Mock Function Implementation Example

This Example explains the usage of **_mockImplementation_** and **_mockImplementationOnce_**

```
function real(){
  return "real";
}

test('Mock Implementation', () => {
    mocked = jest.fn();

    mocked.mockImplementation(function () {
    return "mocked";
    });

    mocked.mockImplementationOnce(function () {
    return "mocked_once";
    });

    console.log(real()); //real
    console.log(mocked()); //mocked_once
    console.log(mocked(),mocked()); //mocked mocked
});
```

### Mock Return Values

Mock functions can be used to inject test values into your code during a test using following functions

- **mockReturnValue(value)** returns the value when mock function is called
- **mockReturnValueOnce(value)** returns the value only once when mock function is called

### Mock Return Values Example

This Example explains the usage of **_mockReturnValueOnce_** and **_mockReturnValue_**

```
test('Mock Returns',()=>{
    const myMock = jest.fn();

    myMock.mockReturnValueOnce("only once : mocked return ").mockReturnValue('mocked return');

    console.log(myMock()); //only once : mocked return
    console.log(myMock()); //mocked return
    console.log(myMock()); //mocked return
});
```

## Synchronous and Asynchornous Code

- The **Synchronous Code** will wait for first to finish before moving on to another task
- But, when you execute an **Asynchronous Code**, it will move on to another task before it finishes

## Testing Asynchronous Code Using Jest

As you test your **Asynchronous code**, Jest needs to know when the code testing has been completed, before it can move on to different test

Common asynchronous patterns are

- Callbacks
- Promieses etc

## What is Callback Function?

**Callback** _is a function that is passed to another function as a parameter, and the callback function is called inside the function_

Consider a function **fetchData(Callback)**, which fetches status information and calls **callback(status)**, when it is complete

```
function fetchData(callback) {
  setTimeout(function () {
    callback({status: 'completed'});
  }, 2000);
}
```

## Callbacks: Handling Asynchronous Tests

Instead of placing the test in a function with an empty argument, employ a single argument called **done**

Jest will wait until **done** callback is called before finishing the test

```
test('fetch data returns status completed', done => {
  function callback(data) {
    expect(data.status).toBe('completed');
    done();
 }
  fetchData(callback);
});
```

## Promises: Handling Asynchronous Tests

If your code uses promises, just return a promise, and Jest will wait for that promise to resolve. The test will fail automatically if the promise is rejected.

Consider the following functions which return promises.

```
function first() {
   var promise = new Promise(function(resolve, reject){
       setTimeout(function() {
         console.log('first');
         resolve('first');}, 2000);
   });
   return promise;
}
```

```
function second() {
   var promise = new Promise(function(resolve, reject){
       setTimeout(function() {
         console.log('second');
         resolve('second');}, 2000);
   });
   return promise;
};
```

## .resolves: Handling Asynchronous Tests

You can also use the **.resolves** matcher in your expect statement, and Jest will wait for that promise to resolve. If the promise is rejected, the test will automatically fail

```
test('Promise to be resolved', () => {
  expect(first)
   .then(second)
   .resolves.toBe('second');
});
```

## .rejects: Handling Asynchronous Tests

If you expect a promise to be rejected use the **.rejects** matcher. If the promise if fulfilled, the test will automatically fail

```
function second() {
   var promise = new Promise(function(resolve, reject){
       setTimeout(function() {
         console.log('second');
         reject('error in second');}, 2000);
   });
   return promise;
};
```

```
test('Promise to be rejected', () => {
  expect(first)
   .then(second)
   .rejects.toBe('error');
});
```
