import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

// Here a component is just like a normal function which can have multiple returns
// Here in this example we are just returning an h2 element, but we can return components comprising of other components and whole application can be returned in this way. One use case may be that of a user where in if a user is logged in then we can return the appropriate content or else we can use the other part of the app to display the appropriate content to the user
const MultipleReturns = () => {
  const [loading, setLoading] = useState(false);

  if(loading) {
    return <h2>Loading...</h2>;
  }

  return <h2>multiple returns</h2>;
};

export default MultipleReturns;
