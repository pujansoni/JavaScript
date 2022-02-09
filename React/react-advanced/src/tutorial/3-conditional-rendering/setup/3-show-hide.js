import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        show/hide
      </button>
      {/* Here as we can see that we are not limited to just the html elements, we can also use the components in order to toggle with the short-circuit and ternary operators */}
      {show && <Item />}
    </>
  );
};

// In this example we will toggle the react component
const Item = () => {
  // Here we will also set up a side effect which will be cleaned up. We can use the event listener on the window for this
  // Here we will need to set up a cleanup function cause even if the empty array(in the dependency parameter) saved us before, in this case the event will be called multiple times as we are toggling the whole component
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', checkSize)
    return () => {
      window.removeEventListener('resize', checkSize);
    }
  }, []);
  return (
    <div style={({marginTop: '2rem'})}>
      <h1>window</h1>
      <h2>size : </h2>
    </div>
  );
}

export default ShowHide;
