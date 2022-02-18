// async await
// consume/use promises

// Pending, Rejected, Fulfilled
// Promises returns a value which is expected to return in the future
// We generally use the promises with the HTTP requests/response in JS
// In order to create a promise where we use a constructor function which accepts two parameters

// Setting up promise based on the condition
const value = 2;

const promise = new Promise((resolve, reject) => {
  // The function will give the value 0, 1, or 2
  const random = Math.floor(Math.random() * 3);

  // Here if we console.log the promise object and uncomment the line below then we get: [[PromiseState]]: "fulfilled" [[PromiseResult]]: "hello world"
  // resolve("hello world");
  // Here if we console.log the promise object and uncomment the line below then we get: [[PromiseState]]: "rejected" [[PromiseResult]]: "there was an error"
  // reject("there was an error");

  if(random === value) {
    resolve("you guessed correctly");
  } else {
    reject("wrong number");
  }
});

console.log(promise);
// Here to access the value of the  resolve() or reject() in the promise object we can't use the promise.value method as given below
// console.log(console.value);
// In order to access the resolve() value we will use the then() method, while in order to access the reject() value we will use the catch() method on the promise object
promise.then((data) => console.log(data)).catch((err) => console.log(err));