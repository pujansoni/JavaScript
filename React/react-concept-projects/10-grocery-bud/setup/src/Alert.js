import React, { useEffect } from 'react'

const Alert = ({type, msg, removeAlert, list}) => {
  useEffect(() => {
    // Here we are using the useEffect() function in order to remove the alert message on the screen after some seconds and we are using the removeAlert prop passed in the Alert component from the App.js
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    // We will also setup the cleanup function as shown below
    return () => clearTimeout(timeout);
  }, [list]);

  return (
    <p className={`alert alert-${type}`}>{msg}</p>
  );
}

export default Alert
