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
  const handleSubmit = (e) => {
    // Here after submitting the form by clicking the button we won't see "hello world" in the console log cause when we submit the form the browser will try to submit the form and refresh the page and we want to prevent this default behavior. So we will use the preventDefault() method available on the event object as shown below. So, here we are not refreshing the page when we submit the form
    e.preventDefault();
    // console.log("hello world");
    // After setting up the states on the form fields now we have access to those fields directly as shown below
    console.log(firstName, email);
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
      </article>
    </>
  );
};

export default ControlledInputs;
