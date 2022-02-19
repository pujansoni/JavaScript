import fetch from "node-fetch";
// Fetch Errors
// Only throws an error if can't be resolved
// Error response still a response (400-500)

const url = 'https://www.course-api.com/react-tours-project';

const getTours = async () => {
  try {
    // Here the network errors will still trigger the catch while for the traditional errors from the fetch() method we will still get a response for it
    const resp = await fetch(url);
    // So here we need to manually throw the error if we have an error in the form of response. So we will examine the "ok" property of the response and check if it's true/false. If the "ok" property is false then we will throw the error ourselves
    if(!resp.ok) {
      // We will throw the error message
      const msg = `There was an error "${resp.status} ${resp.statusText}"`;
      throw new Error(msg);
    }
    const tours = await resp.json();
    console.log(tours);
  } catch(error) {
    // Used for Network errors
    console.log(error);
  }
}

const btn = document.querySelector(".btn");
btn.addEventListener("click", getTours);
