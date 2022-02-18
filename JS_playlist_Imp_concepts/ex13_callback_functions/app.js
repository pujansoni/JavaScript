function makeUppercase(value) {
  console.log(value.toUpperCase());
}

// makeUppercase("peter");

function reverseString(value) {
  console.log(value.split('').reverse().join(''));
}

// the we have passed the callback function as a parameter
function handleName(name, cb) {
  const fullName = `${name} smith`;
  cb(fullName);
}

// handleName("peter", makeUppercase);
// handleName("peter", reverseString);

handleName("susan", (value) => console.log(value));
