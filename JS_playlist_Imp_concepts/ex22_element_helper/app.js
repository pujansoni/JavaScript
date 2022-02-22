const heading = document.querySelector(".heading");
// console.log(heading);

const listItems = document.querySelectorAll(".list-item");
// console.log(listItems);

const getElement = (selector, isList) => {
  // if(isList) {
  //   const el = [...document.querySelectorAll(selector)];
  //   if(el.lenght < 1) {
  //     throw new Error(`Please double check selector: ${selector}`);
  //   }
  //   return el;
  // }

  // const el = document.querySelector(selector);
  // // Here we are checking if the element exists
  // if(el) return el;
  // Refactoring the above code as given below
  const el = isList ? [...document.querySelectorAll(selector)] : document.querySelector(selector);

  // not a list - exist or not
  // list - empty or not
  if(!isList && el) return el;
  if(isList && !el.length < 1) return el;
  
  throw new Error(`Please double check selector: ${selector}`);
};

console.log(getElement(".list-item"), true);
