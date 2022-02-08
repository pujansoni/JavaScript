import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

// Here a component is just like a normal function which can have multiple returns
// Here in this example we are just returning an h2 element, but we can return components comprising of other components and whole application can be returned in this way. One use case may be that of a user where in if a user is logged in then we can return the appropriate content or else we can use the other part of the app to display the appropriate content to the user
// Here we are using three useState() hooks which contains three possibilities where if something is loading then there is an error or it's possible that the loading operation(whatever it is) is successful

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  useEffect(() => {
    // Here in the fetch() method we are overriding the user by using the setUser() method and setting the user. After setting up the user we will setIsLoading(false) as now we have our user. So after the first re-render the useEffect() will be executed once and the name of the user will be displayed instead of Loading
    
    fetch(url).then((resp) => resp.json()).then((user) => {
      const {login} = user;
      setUser(login);
      setIsLoading(false);
    }).catch(error => console.log(error));
  }, []);

  if(isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if(isError) {
    return (
      <div>
        <h1>Error...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default MultipleReturns;
