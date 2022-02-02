import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter

// The useEffect is generally used to do any work outside of the component that could be signing up for the subscription, fetching data, setting up event listener
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  // The useEffect hook take in a callback function whose functionality will run after every render
  // Here if we want to avoid render the useEffect on the initial render i.e. when we first enter the page we can check the value and proceed but note that we can't use the react hooks conditionally, as shown below
  // if(value > 0) {
  //   useEffect(()=>{
  //     console.log("call useEffect");
  //     document.title = `New Messages(${value})`;
  //   });  
  // }

  // Instead we will set if/else inside of the callback function
  // We can also pass the second argument which is an array also known as array/list of dependencies. If we leave it blank then it will only run on the initial render.
  // If we pass the parameter that is being changed then the useEffect will be triggered to run one more time i.e. in this case we have used the parameter value in the dependency array so when the value will be changed the useEffect will be triggered. If we have no dependency array then the useEffect will run each and every time we render including the initial render.
  useEffect(() => {
    console.log("call useEffect");
    if(value >= 1) {
      document.title = `New Messages(${value})`;
    }
  }, [value]);
  // We can add as many useEffect() hooks as required. The useEffect() function below will only run once during the initial render.
  useEffect(() => {
    console.log("hello world");
  }, []);

  // Here we will see the render component twice because of the strict mode used in the index.js
  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      {/* Here whenever we click the button we will see the render component and call useEffect print on the console every time we click on the button */}
      {/* Here every time we click the button we invoke setValue(), here useState() preserved the value between the renders and also triggered the re-render. And the useEffect will run after every re-render */}
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
