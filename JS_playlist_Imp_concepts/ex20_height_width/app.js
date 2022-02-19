// Width/Height - window, any element
// innerHeight - window
// innderWidth - window
// getBoundingClientRect() - any element

console.log("height", window.innerHeight);
console.log("width", window.innerWidth);

const btn = document.querySelector(".btn");
const box = document.querySelector(".box");

// Here we will get all the dimensions of the selected element(box) onclick
btn.addEventListener("click", () => {
    const dimensions = box.getBoundingClientRect();
    console.log(dimensions);
});
