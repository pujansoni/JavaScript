import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  // Here we will set the state value by using useState and we use two attributes on the input i.e. value which will reference the state value and onChange event listener which will fire the callback function each and every time we type something on the input
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    // Here after submitting the form by clicking the button we won't see "hello world" in the console log cause when we submit the form the browser will try to submit the form and refresh the page and we want to prevent this default behavior. So we will use the preventDefault() method available on the event object as shown below. So, here we are not refreshing the page when we submit the form
    e.preventDefault();
    // console.log("hello world");
    // After setting up the states on the form fields now we have access to those fields directly as shown below
    console.log(firstName, email);
    // Here we will only add the item in the array if both of the items are true i.e. firstName and email
    if(firstName && email) {
      // In ES6 if the key matches the variable name then we can use the variable name directly in the object to assign the value 
      // Here we will add an id parameter which is unique. There is a uuid package provided by the npm which is generally used to create unique id
      const person = {id: new Date().getTime().toString(), firstName, email};
      // Here the above line is equivalent to const person = {firstName: firstName, email: email}
      console.log(people);
      // Now we will add the firstName and email to the people array as shown below
      setPeople((people) => {
        return [...people, person];
      });
      // Now after adding the person we also have to make sure that the firstName and email fields in the form are empty again and ready to take new input
      setFirstName("");
      setEmail("");
    } else {
      console.log("empty values");
    }
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            {/* If we want to connect a label to the input then we have to use htmlFor as shown below */}
            <label htmlFor="firstName">Name : </label>
            {/* Here we will use both of the properties of useState as shown below. Here if we have already initialized a value in the useState then we can see that value being displayed on the form. We will also set up the onChange event on the input to which will be triggered while we are filling up the form and we will use the event method to access the data on the actual input */}
            <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          {/* For the form submit we can either setup onSubmit on the form or onClick on the button to submit the form. Here we can also add the property onClick={handleSubmit} on the button given below instead of using the onSubmit property of the form in order to submit the form */}
          <button type="submit">add person</button>
        </form>
        {
          people.map((person) => {
            const {id, firstName, email} = person;
            return (
              <div className="item" key={id}>
                <h4>{firstName}</h4>
                <p>{email}</p>
              </div>
            );
          })
        }
      </article>
    </>
  );
};

export default ControlledInputs;
