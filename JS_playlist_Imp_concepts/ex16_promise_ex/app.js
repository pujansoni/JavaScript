// .first - after 1s first red
// .second - after 3s second blue
// .third - after 2s third green

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    addColor()
});

function addColor() {
    console.log("add color");
}