import React, { useState } from 'react';

const UseStateObject = () => {
  // We can also pass an object as the first argument in the useState React hook
  const [person, setPerson] = useState({
    name: "peter", 
    age: 24, 
    message: "random message"
  });
  // Alternatively, we can also set 3 different state values as shown below
  // const [name, setName] = useState("peter");
  // const [age, setAge] = useState(24);
  // const [message, setMessage] = useState("random message");
  const changeMessage = () => {
    // Here we want to change the message than the line below will override the whole object and it will also remove the name and age
    // setPerson({message: "hello world"});
    // To overcome this and to be able to just change one element of the object we will use the spread operator as shown below in order to use a new message
    setPerson({...person, message: "hello world"});

    // Alternatively, instead of using the objects we can also use new variables in order to create 3 different variables under the name, age, and message values
    // setMessage("hello world");
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
