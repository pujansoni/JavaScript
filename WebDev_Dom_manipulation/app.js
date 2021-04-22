const body = document.body;
// const div = document.createElement("div");
// There are two ways to add text to an element
// div.innerText = "Hello World";
// div.textContent = "Hello World 2";

// To use the HTML we can use innerHTML: div.innerHTML = "<strong>Hello World</strong>"
// It is not advisable to add HTML with innerHTML as it makes the site vulnerable to injection of external JS and any code that can be entered through form input can be rendered in our site as innerHTML is the only method that takes string and HTML as input and render that. If we want to use the innerHTML make sure that any user input is escaped before it is passed to the innerHTML. We can use the code below instead
// const strong = document.createElement("strong");
// strong.innerText = "Hello World 2";
// div.append(strong);
// body.append(div);

const div = document.querySelector("div");
const spanHi = document.querySelector("#hi");
const spanBye = document.querySelector("#bye");

// spanBye.remove();
// div.removeChild(spanHi);

// Getting Attributes
// console.log(spanHi.getAttribute("id"));
// console.log(spanHi.id);
// console.log(spanHi.title);

// Setting Attributes
// console.log(spanHi.setAttribute("id", "sdfdfdf"));
// spanHi.id = "sdfdfdf";

// Removing Attributes
// spanHi.removeAttribute("id");

// Getting a dataset property
// console.log(spanBye.dataset.test);
// console.log(spanBye.dataset.longerName); Here the hyphens(-) are converted into CamelCase

// Setting a dataset property
// spanBye.dataset.newName = "hi"; Here the CamelCase version is converted into the hyphenated version

// spanHi.classList.add("new-class");
// spanHi.classList.remove("hi1");
// spanHi.classList.toggle("hi2");
// spanHi.classList.toggle("hi2", true);

// spanHi.style.backgroundColor = "red";
