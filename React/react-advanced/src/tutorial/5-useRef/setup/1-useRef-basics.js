import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

// Here useRef is used for un-controlled inputs of form
// useRef works a lot like useState. It preserves the value between the re-render just like useState. However, unlike useState, useRef does not trigger re-render. One of the most popular use cases is targetting the DOM elements
const UseRefBasics = () => {
  // Here we will pass an initial value to the useRef. Now we will use this value and set it equal to a ref attribute.
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here when we submit the form the refContainer's current value will contain the value of the input. Here we are not using the e.target.value
    console.log(refContainer.current.value);
    // Here we are not using the controlled input. In this case we don't have the state value that reflects the value of the input and we don't call onChange each and every time we type something in the input. Instead, we use ref and set it to the refContainer and use the current value. We can use this with any html element. In order to access it we can use the current attribute of refContainer
    console.log(refContainer.current);
  };

  // Here we don't need to pass the dependency array(second parameter) in useEffect() as useRef() does not trigger re-render
  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
          <button type="submit">submit</button>
        </div>
      </form>
      <div ref={divContainer}>hello world</div>
    </>
  )
};

export default UseRefBasics;
