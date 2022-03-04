import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
// Here we will use the useParams hook to access the url parameters that we have setup in the index.js file and coming from our Link
const Person = () => {
  // Here note that we will have the id in the form of the string
  // console.log(useParams)
  const [name, setName] = useState("default name");
  const {id} = useParams();

  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt(id));
    setName(newPerson.name);
  }, []);

  return (
    <div>
      <h1>{name}</h1>
      <Link to="/people" className="btn">
        Back To People
      </Link>
    </div>
  );
};

export default Person;
