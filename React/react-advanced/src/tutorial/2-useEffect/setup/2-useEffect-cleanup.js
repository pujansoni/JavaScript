import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    // Here each time we evoke the listener we are triggering the checkSize function which in turn invoke the setSize function which will trigger a re-render.
    console.log("useEffect"); 
    window.addEventListener('resize', checkSize);
    // Here every time we have a useEffect we have an option to return a function as shown below. In this case, we will use the return option to cleanup the function by using the removeEventListener cause if we keep on adding the event listener it will add unnecessary overhead on the application. So before, we add an event listener we will cleanup the old one:
    return () => {
      console.log("cleanup");
      window.removeEventListener('resize', checkSize);
    }
    // The cleanup function are useful in conditional rendering
  });

  console.log("render");

  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
