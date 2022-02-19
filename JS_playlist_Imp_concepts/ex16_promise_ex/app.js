// .first - after 1s first red;
// .second - after 3s second blue; 4s
// .third - after 2s third green; 6s

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  // Here for the className first we will have the time of 1s and the color is red. Here in then() method we are passing the function that we are suppose to execute if the current method call gets executed and promise gets resolved. Here is the promise is resolved then we will call the function again with the different parameters
  addColor(1000, ".first", "red").then(() => addColor(3000, ".second", "blue")).then(() => addColor(2000, ".third", "green")).catch((err) => console.log(err));
});

// from this function we will return a promise object
function addColor(time, selector, color) {
  const element = document.querySelector(selector);
  // Here we are checking if the element exists i.e. if we have correctly selected the element then we will set up the timeout and resolve the promise else we will reject it
  return new Promise((resolve, reject) => {
    if(element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(`There is no such element : "${selector}"`);
    }
  });
  // console.log("add color");
}