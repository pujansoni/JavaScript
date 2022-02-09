import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  // In JSX we always return an expression, so we will generally use the short-circuit evaluation and ternary operator to display something conditionally
  // We already saw multiple returns but what if we want to show/hide data based on some condition in the returning JSX expression. In this case we will use short-circuit evaluation/ternary operator
  return (
    <>
      {/*
      Here the line below will display "hello world"
      <h1>{firstValue}</h1>
      Here the line below will display "value :"
      <h1>value : {secondValue}</h1>
      */}
      {/*  The line below will give an error
      {if() {console.log("hello world")}} */}
      <h1>{text || 'john doe'}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>toggle error</button>
      {/* The && value is generally used to return the element i.e. showing/hiding of an element. In the example given below if we use the first value is true then we will execute the second value which is an h1 tag 
      {text && <h1>hello world</h1>} */}
      {isError && <h1>Error...</h1>}
      {/* We can also use a ternary operator */}
      {isError ? <p>there is an error...</p> : <div>
          <h2>there is no error...</h2>
        </div>}
    </>
  );
};

export default ShortCircuit;
