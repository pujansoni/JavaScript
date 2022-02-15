import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

// Controlling multiple inputs
const ControlledInputs = () => {
  // const [firstName, setFirstName] = useState('');
  // const [email, setEmail] = useState('');
  // const [age, setAge] = useState('');

  // Here instead of setting up multiple values we can setup one single state value as shown below
  const [person, setPerson] = useState({firstName: '', email: '', age: ''});
  const [people, setPeople] = useState([]);

  // Here we are removing the onChange function on individual input elements and declaring a comming handleChange function instead to handle the change event on all the inputs 
  const handleChange = (e) => {
    // Here we need two properties from the event object i.e. name and value
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name, value);
    // Here when we are setting the person to the updated value onChange event of the input we need to make sure to keep the old values by using the spread operator and after the comma we can use the property that we want to update. So here we are gettting the name of the property dynamically by using the event object's name value and setting it to the value of the event object as shown below:  
    setPerson({...person, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here we will only submit the form if all the 3 values are present
    if(person.firstName && person.email && person.age) {
      // Here we will copy the person value from the state as it will contain the most updated value and then we will set the id
      const newPerson = {...person, id: new Date().getTime().toString()};
      // Here after creating the newPerson we will add that to the existing people array. Initially we will copy all the existing people and then we can add the new person at the end
      setPeople([...people, newPerson]);
      // After setting the people array we have to reset the form which we can do by setting all the fields to the empty value 
      setPerson({firstName: '', email: '', age: ''});
    }
  };

  return (
    <>
      <article>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='text'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          {/* In the previous example we saw the onSubmit option on the form and in this example we have used the onClick option on the button in order to submit the form. We can use either one option to submit the form */}
          <button type='submit' onClick={handleSubmit}>add person</button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email, age } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{age}</p>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
