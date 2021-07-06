// const grandparent = document.getElementById("grandparent-id");
// const grandparent = document.querySelector("#grandparent-id");
const grandparent = document.querySelector(".grandparent");
const parents = Array.from(grandparent.children);
const parentOne = parents[0];
const children = parentOne.children;
const childOne = document.querySelector("#child-one");
const grandparentChildOne = childOne.closest(".grandparent");
const childTwo = childOne.nextElementSibling;

// const parents = Array.from(document.getElementsByClassName("parent"));
// const parent = document.querySelectorAll(".parent");

// changeColor(grandparent);

// parents.forEach(changeColor);

// changeColor(children[0]);

// changeColor(childOne);

// changeColor(grandparentChildOne);

// changeColor(childTwo);

changeColor(childTwo.previousElementSibling);

function changeColor(element) {
    element.style.backgroundColor = "#333";
}