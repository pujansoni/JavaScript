import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';
const ReactRouterSetup = () => {
  // Here when we visit the about or the people route we will see both the Home page and the About or the People page as technically the path pattern matches both the routes. But in order to display the exact path we will use the exact prop as shown below
  return ( 
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        {/* Here we have used the URL parameter and we have also used the id in order to get that particular Person's data */}
        <Route path="/person/:id" children={<Person />}>
        </Route>
        {/* Here if we enter any incorrect link in the domain then we will redirect the user to the Error component but if we were to go back to the Home page then it would give us an error as the page matches both the Error component path and the Home component path. So we will put all the Route in the Switch component */}
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
