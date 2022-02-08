import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

// second argument

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async() => {
    const response = await fetch(url);
    const users = await response.json();
    // Here we use the setUsers() inside the getUsers() method then it will go in an infinite loop as the useState is responsible for preserving the previous state and triggering re-render. So we the component is rendered again it will trigger useEffect() which in turn trigger getUsers() and will call setUsers() and so on. So in order to stop this we will use the empty dependency array which will restrict the useEffect() to render only once
    // Note: As mentioned above, if we trigger a re-render in the callback function of the useEffect, we need to make sure to add the dependency array i.e. the second argument of the useEffect() function
    setUsers(users);
    // console.log(users);
  };

  useEffect(() => {
    // We can not use async-await in the useEffect as it return Promise object and the useEffect() return is used to return the cleanup function. We can setup the async-await inside the useEffect callback function or in a separate function
    getUsers();
  }, []);

  return (
    <>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          const {id, login, avatar_url, html_url} = user
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
