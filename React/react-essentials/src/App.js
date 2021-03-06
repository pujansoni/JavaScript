import React from "react";
import './App.css';
import {Routes, Route} from "react-router-dom";
import {
  Home,
  About,
  Events,
  Contact,
  Whoops404,
  Services,
  CompanyHistory,
  Location
} from "./pages";

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

// function SecretComponent() {
//   return <h1>Secret information for authorized users only</h1>;
// }

// function RegularComponent() {
//   return <h1>Everyone can see this component.</h1>;
// }

// function App(props) {
//   if(props.authorized) {
//     return <SecretComponent />;
//   } else {
//     return <RegularComponent />;
//   }
// }

// Alternatively we can also use the syntax given below for the conditional rendering

// function App({authorized}) {
//   return (
//     <>
//       {authorized ? <SecretComponent /> : <RegularComponent />}
//     </>
//   )
// }

// https://api.github.com/users/pujansoni

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} >
          <Route path="services" element={<Services />} />
          <Route path="history" element={<CompanyHistory />} />
          <Route path="location" element={<Location />} />
        </Route>
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </div>
  );
// function App({login}) {
  // const [emotion, setEmotion] = useState("happy", );
  // const [secondary, setSecondary] = useState("tired");

  // useEffect(() => {
  //   console.log(`It's ${emotion} around here!`);
  // }, [emotion]);

  // useEffect(() => {
  //   console.log(`It's ${secondary} around here!`);
  // }, [secondary]);

  // const [checked, toggle] = useReducer(
  //   (checked) => !checked,
  //   false
  // );

  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   if(!login) return;
  //   setLoading(true);
  //   fetch(`https://api.github.com/users/${login}`).then(response => response.json()).then(setData).then(() => setLoading(false)).catch(setError);
  // }, [login]);

  // if (loading) return <h1>Loading...</h1>;
  // if (error) 
  //   return <pre>{JSON.stringify(error, null, 2)}</pre>;
  // if (!data) return null;

  
  // return (
  //   <div>
  //     <h1>{data.name}</h1>
  //     <p>{data.location}</p>
  //     <img alt={data.login} src={data.avatar_url} />
  //   </div>
  // );
  

  // return (
  //   <>
  //     {/* <h1>Current emotion is {emotion} and {secondary}.</h1>
  //     <button onClick={() => setEmotion("happy")}>
  //       Make Happy
  //     </button>
  //     <button onClick={() => setSecondary("crabby")}>
  //       Make Crabby
  //     </button>
  //     <button onClick={() => setEmotion("frustrated")}>
  //       Frustrate
  //     </button>
  //     <button onClick={() => setEmotion("enthusiastic")}>
  //       Enthuse
  //     </button> */}
  //     {/* <input type="checkbox" value={checked} onChange={() => toggle} />
  //     <p>{checked ? "checked" : "not checked"}</p> */}
  //     <div>No User Available</div>
  //   </>
  // );
}

export default App;
