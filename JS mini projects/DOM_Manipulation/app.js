// index.html

// DOM Manipulation

// GetElementById()
// const title = document.getElementById('main-heading');
// console.log(title);

// getElementsByClassName()
// const listItems = document.getElementsByClassName('list-items');
// console.log(listItems);

// getElementsByTagName()
// const listItems = document.getElementsByTagName('li');
// console.log(listItems);

// querySelector()
// const container = document.querySelector('div');
// console.log(container);

// querySelectorAll()
// const containers = document.querySelectorAll('div');
// console.log(containers);

// --------------------------------------------

// Styling Elements

// const title = document.querySelector("#main-heading");
// title.style.color = "red";

// const listItems = document.querySelectorAll(".list-items");

// This won't work as listItmes is a list
// listItems.style.fontSize = "2rem";

// for (i = 0; i < listItems.length; i++) {
//   listItems[i].style.fontSize = "5rem";
// }

// console.log(listItems);

// --------------------------------------------

// Creating Elements

// const ul = document.querySelector("ul");
// const li = document.createElement("li");

// Adding Elements

// ul.append(li);

// Before we add the text to the newly created list item let's check out how to add text to HTML elements

// Modifying the text - innerText, innerHTML, textContent

// const firstListItem = document.querySelector(".list-item");

// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// innerHTML is not advised to use due to security issues
// console.log(firstListItem.innerHTML);

// li.innerText = "X-men";

// Modifying Attributes

// li.setAttribute("id", "main-heading");
// li.removeAttribute("id");

// To get any attribute of an HTML element, first we will select the element and then we will use the getAttribute() method and pass in the attrbute name as the argument whose value we want to get
// const title = document.querySelector("#main-heading");

// console.log(title.getAttribute("id"));

// Modifying Classes

// li.classList.add("list-items");
// li.classList.remove("list-items");

// console.log(li.classList.contains("list-items"));

// Remove Elements

// li.remove();

// --------------------------------------------

// The DOM object is actually a property of the Window object which represents a tab in the browser. Window object has access to many things like toolbar, dimensions of a window, even things like prompt and alert. The document object handles things inside the inner window

// Traversing the DOM

// Parent Node Traversal

// let ul = document.querySelector("ul");
// console.log(ul);

// Parent Node
// console.log(ul.parentNode);
// console.log(ul.parentElement);

// Grand Parent Node
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// Difference between Node and Element: The Node will also include any text nodes between the elements. It is more evident when we see the child node traversal

// const html = document.documentElement;
// console.log(html.parentNode);
// console.log(html.parentElement);

// Child Node Traversal

// Nodes

// let ul = document.querySelector("ul");
// console.log(ul);
// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.backgroundColor = "blue";

// Elements

// let ul = document.querySelector("ul");
// console.log(ul);
// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);

// Sibling Node Traversal

// let ul = document.querySelector("ul");
// const div = document.querySelector("div");

// console.log(div.childNodes);

// console.log(ul);
// console.log(ul.previousSibling);
// console.log(ul.nextSibling);

// Sibling Element Traversal

// let ul = document.querySelector("ul");

// console.log(ul);
// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);

// ------------------------------------

// indexEvent.html

// Event Listeners

// element.addEventListener("click", function);

// const buttonTwo = document.querySelector(".btn-2");

// function alertBtn() {
//   alert("I also love JavaScript");
// }

// element.addEventListener("click", alertBtn);

// // Mouseover

// const newBackgroundColor = document.querySelector(".box-3");

// function changeBgColor() {
//   newBackgroundColor.style.backgroundColor = "blue";
// }

// newBackgroundColor.addEventListener("mouseover", changeBgColor);

// Reveal Event

// const revealBtn = document.querySelector(".reveal-btn");

// const hiddenContent = document.querySelector(".hidden-content");

// function revealContent() {
//   if (hiddenContent.classList.contains("reveal-btn")) {
//     hiddenContent.classList.remove("reveal-btn");
//   } else {
//     hiddenContent.classList.add("reveal-btn");
//   }
// }

// revealBtn.addEventListener("click", revealContent);

// Event Propagation:
// 1. Event Capturing (The third parameter in addEventListener when set to true will enable event capturing)
// 2. Target
// 3. Event Bubbling (The third parameter in addEventListener when set to false (default value) will enable event capturing)

// Event propagation

// window.addEventListener(
//   "click",
//   function () {
//     console.log("Window");
//   },
//   true
// );

// document.addEventListener(
//   "click",
//   function () {
//     console.log("Document");
//   },
//   true
// );

// document.querySelector(".div2").addEventListener(
//   "click",
//   function (e) {
//     // We can stop the Event Bubbling using the stopPropagation method. To fire off the event only once we will use the property once and set it to true
//     // e.stopPropagation();
//     console.log("DIV 2");
//   },
//   { once: true }
// );

// document.querySelector(".div1").addEventListener(
//   "click",
//   function () {
//     console.log("DIV 1");
//   },
//   true
// );

// document.querySelector("button").addEventListener(
//   "click",
//   function (e) {
//     console.log(e.target.innerText = 'clicked!');
//   },
//   true
// );

// document.querySelector(".button").addEventListener(
//   "click",
//   function (e) {
//     e.preventDefault();
//     console.log((e.target.innerText = "clicked!"));
//   },
//   true
// );

// Event Delegation

// It allows users to append a SINGLE event listener to a parent element that adds it to all of its presend AND future descendants that match a selector

// document.querySelector("#football").addEventListener("click", function (e) {
//   console.log("football is clicked");
//   const target = e.target;
//   if (target.matches("li")) {
//     target.style.backgroundColor = "lightgrey";
//   }
// });

// document.querySelector("#basketball").addEventListener("click", function (e) {
//   console.log("basketball is clicked");
//   const target = e.target;
//   if (target.matches("li")) {
//     target.style.backgroundColor = "lightgrey";
//   }
// });

// document.querySelector("#boxing").addEventListener("click", function (e) {
//   console.log("boxing is clicked");
//   const target = e.target;
//   if (target.matches("li")) {
//     target.style.backgroundColor = "lightgrey";
//   }
// });

// document.querySelector("#tennis").addEventListener("click", function (e) {
//   console.log("tennis is clicked");
//   const target = e.target;
//   if (target.matches("li")) {
//     target.style.backgroundColor = "lightgrey";
//   }
// });

// document.querySelector("#golf").addEventListener("click", function (e) {
//   console.log("golf is clicked");
//   const target = e.target;
//   if (target.matches("li")) {
//     target.style.backgroundColor = "lightgrey";
//   }
// });

// Instead of writing the code as above for each li item to add an event listener we can use the Event Delegation to delgate the event to the parent which adds the listener to all the items reducing the code size as shown below, this will also add the listener to any future descendents of the parent:

document.querySelector("#sports").addEventListener("click", function (e) {
  console.log(e.target.getAttribute("id") + " is clicked");

  const target = e.target;

  if (target.matches("li")) {
    target.style.backgroundColor = "lightgrey";
  }
});

const sports = document.querySelector("#sports");
const newSport = document.createElement("li");

newSport.innerText = "Rugby";
newSport.setAttribute("id", "rugby");

sports.appendChild(newSport);
