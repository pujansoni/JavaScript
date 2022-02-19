import fetch from "node-fetch";
// Fetch API - Browser API for HTTP (AJAX) Requests
// Default - GET Requests, supports other methods as well
// Returns Promse

const url = 'https://www.course-api.com/react-tours-project';

// The fetch() will return a promise
// console.log(fetch(url));

// Here we will convert the response to json() which in turn will also return a promise, meaning that we can use then() statement for chaining 
fetch(url).then((resp) => resp.json()).then(data => console.log(data)).catch((err) => console.log(err));

// We can setup the same fetch() function using async/await
const getTours = async () => {
  try {
    const resp = await fetch(url);
    // Here as the json() method also returns a promise we can use the await keyword as given below
    const data = await resp.json();
    // console.log(resp);
    return data;
  } catch(error) {
    console.log(error);      
  }
}

// Here as we return the json() response from the getTours() function which itself is a Promise we will need to use then() method in order to access the data
console.log(getTours().then((data) => console.log(data)));