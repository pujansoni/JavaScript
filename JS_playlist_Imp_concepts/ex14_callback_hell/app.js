const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");

const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    // Here if we follow the sequence below then all the timeout will start at the same time
    // setTimeout(() => {
    //     first.style.color = "red";
    // }, 1000);
    // setTimeout(() => {
    //     second.style.color = "blue";
    // }, 3000);
    // setTimeout(() => {
    //     third.style.color = "green";
    // }, 2000);

    // But if we want to allow the timeout to execute one after the other we have to follow the nested syntax as given below
   setTimeout(() => {
        first.style.color = "red";
        setTimeout(() => {
            second.style.color = "blue";
            setTimeout(() => {
                third.style.color = "green";
            }, 2000);
        }, 3000);
    }, 1000);
    // Here using promises and using async/await makes our code more readable
});