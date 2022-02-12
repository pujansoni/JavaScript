import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const handleSubmit = (e) => {
    // Here after submitting the form by clicking the button we won't see "hello world" in the console log cause when we submit the form the browser will try to submit the form and refresh the page and we want to prevent this default behavior. So we will use the preventDefault() method available on the event object as shown below. So, here we are not refreshing the page when we submit the form
    e.preventDefault();
    console.log("hello world");
  };

  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            {/* If we want to connect a label to the input then we have to use htmlFor as shown below */}
            <label htmlFor="firstName">Name : </label>
            <input type="text" id="firstName" name="firstName"/>
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input type="text" id="email" name="email"/>
          </div>
          {/* For the form submit we can either setup onSubmit on the form or onClick on the button to submit the form. Here we can also add the property onClick={handleSubmit} on the button given below instead of using the onSubmit property of the form in order to submit the form */}
          <button type="submit">add person</button>
        </form>
      </article>
    </>
  );
};

export default ControlledInputs;
