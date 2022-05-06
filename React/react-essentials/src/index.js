import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   React.createElement("h1", {style: {color: "blue"}}, "Hello Everyone!")
// );

// root.render(
//   React.createElement("ul", 
//     null,
//     React.createElement("li", null, "Monday"),
//     React.createElement("li", null, "Tuesday"),
//     React.createElement("li", null, "Wednesday"),
//     React.createElement("li", null, "Thursday"),
//     React.createElement("li", null, "Friday"),
//     React.createElement("li", null, "Saturday"),
//     React.createElement("li", null, "Sunday")
//   )
// );

/* JSX, JavaScript as XML is a language extension that allows us to write tags directly into JavaScript */

// function AppTwo() {
//   return (
//     <h1>This is the Second App</h1>
//   );
// }

// Here by using <React.Fragment></React.Fragment> to wrap our components but it won't show up on the HTML side as it acts as a wrapper for our components. Alternatively, we can also use a shorter syntax <></>
// root.render(
//   <>
//     <App />
//     <AppTwo />
//   </>
// );

// const [,, light] = ["boots", "tent", "headlamp"];

// console.log(light);

root.render(
  <App />
);
