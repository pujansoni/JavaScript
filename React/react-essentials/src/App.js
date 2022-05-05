import React from "react";
import './App.css';
// import restaurant from "./restaurant.jpg";

// function Header(props) {
//   return (
//     <header>
//       <h1>{props.name}'s Kitchen</h1>
//     </header>
//   );
// }

// function Main(props) {
//   return (
//     <section>
//       <p>We serve the most {props.adjective} food around.</p>
//       <img src={restaurant} height={200} alt="silverware at a restaurant table"/>
//       <ul style={{textAlign: "left"}}>
//         {props.dishes.map((dish) => <li key={dish.id}>{dish.title}</li>)}
//       </ul>
//     </section>
//   );
// }

// function Footer(props) {
//   return (
//     <footer>
//       <p>Copyright {props.year}</p>
//     </footer>
//   )
// }

// const dishes = [
//   "Macaroni and Cheese",
//   "Salmon",
//   "Tofu with Vegetables",
//   "Minestrone"
// ];

// In the key property of the li tag while iterating over the dishes it's mandatory for each key to be unique which can be achieved by tracking the index of the array and using that as the key but it's not advisable. So it achieve this we will create a transformation function which will create an object for each dish and whenever we return an object we have to include those in the curly braces as shown below. Here we are building the object with the key before we are passing it to the object as the property.
// const dishObjects = dishes.map((dish, i) => ({id: i, title: dish}));

function SecretComponent() {
  return <h1>Secret information for authorized users only</h1>;
}

function RegularComponent() {
  return <h1>Everyone can see this component.</h1>;
}

// function App(props) {
//   if(props.authorized) {
//     return <SecretComponent />;
//   } else {
//     return <RegularComponent />;
//   }
// }

// Alternatively we can also use the syntax given below for the conditional rendering

function App(props) {
  return (
    <>
      {props.authorized ? <SecretComponent /> : <RegularComponent />}
    </>
  )
}

export default App;
