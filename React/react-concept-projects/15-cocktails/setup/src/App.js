import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'
// Here we need to wrap the router around the App() component. Alternatively we can also introduce the router around the App component in the index.js file as the router needs the context.js Provider details in order to process information so the router's code should be either between the Provider and the App component in index.js or around the App component in the App.js
// Here the Navbar is above the Switch component as it's fixed
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Router exact path="/">
          <Home />
        </Router>
        <Router path="/about">
          <About />
        </Router>
        <Router path="/cocktail/:id">
          <SingleCocktail />
        </Router>
        <Router path="*">
          <Error />
        </Router>
      </Switch>
    </Router>
  )
}

export default App
