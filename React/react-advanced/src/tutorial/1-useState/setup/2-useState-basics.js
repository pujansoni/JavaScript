import React, { useState } from 'react';

const UseStateBasics = () => {
  // The first argument of the useState function will contain the default value and the useState() function will return an array
  // // console.log(useState('hello world'));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  // Here note that we can use the spread operator to assign the values as shown below
  // The common convention is to name the first variable to whatever we want variableName (i.e. text in this case) and the second variable is setvariableName (i.e. setText in this case)
  const [text, setText] = useState('random title');

  // Here we have used the setText() function which is provided by the useState() function which we have used to change the title on the onClick event
  const handleClick = () => {
    if(text === "random title") {
      setText("hello world");
    } else {
      setText("random title");
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;


// React Hooks conventions
// The react hooks are prefixed using the work "use"
// Moreover, the components where we invoke these hooks must be in uppercase i.e. UseStateBasics in the above example
// The hook itself must in the function/component body 
// i.e. const [text, setText] = useState('random title'); in this case
// We cannot call the hooks conditionally. It includes all the custom hooks and the hooks provided by react. We will see this later on in the useEffect React hook
