var root = document.querySelector(":root");
console.log(root);
// The getComputedStyle() method returns the properties and values of the element which we pass
var rootStyles = getComputedStyle(root);
var red = rootStyles.getPropertyValue("--red");
console.log("red: ", red);

// Here we are just using the green color for the --red variable for example to understand how we can change the variable value
root.style.setProperty("--red", "green");
