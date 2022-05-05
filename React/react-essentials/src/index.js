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
root.render(
  <ul>
    <li>Monday</li>
    <li>Tuesday</li>
    <li>Wednesday</li>
    <li>Thursday</li>
    <li>Friday</li>
    <li>Saturday</li>
    <li>Sunday</li>
  </ul>
);
