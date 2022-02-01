import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };

  // Here in the complex increase example we will use the setTimeout() function to invoke the function after 2 seconds
  const complexIncrease = () => {
    setTimeout(() => {
      // Here if we uncomment the line below and click the increase later button continuously then it will increase the value only once and won't consider the most recent value as the function is asynchronous
      // setValue(value + 1);
      
      // So here we will use the functional approach so instead of passing in the value directly we will use the functional approach as shown below
      // So here the setValue() will contain the most recent value. Whatever we return from this function will be the new value
      setValue((prevState) => {
        return prevState + 1;
      }); 
    }, 2000);
  };

  return (
    <>
      <section style={{margin: '4rem 0'}}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>decrease</button>
        <button className="btn" onClick={reset}>reset</button>
        <button className="btn" onClick={() => setValue(value + 1)}>increase</button>
      </section>
      <section style={{margin: '4rem 0'}}>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>increase later</button>
      </section>
    </>
  );
};

export default UseStateCounter;
