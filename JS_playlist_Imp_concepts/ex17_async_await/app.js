// async/await
// async must be preset, always returns a promise
// await waits till promise is settled
// error handling - try/catch block

const example = async() => {
  return "hello there";
}

console.log(example()); // This will return a Promise {}

// traditional function as async. Once we use async we can also use await. Here we have an asynchronous code in a synchronous fashion and we will wait for the promise to be settled before we print "hello world" below
async function someFunc() {
  const result = await example();
  console.log(result);
  console.log("hello world");
}

someFunc();
