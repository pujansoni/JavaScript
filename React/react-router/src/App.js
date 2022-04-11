import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Here in order to have a common layout among all the elments we create a shared layout */}
        <Route path="/" element={<SharedLayout />} >
          {/* Here the index routes always matches the parent route */}
          <Route index element={<Home />} />
          {/* The route below will be reached from localhost:3000/testing */}
          {/* <Route path="testing" element={<div>
            <h2>testing</h2>
          </div>} /> */}
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="*" element={<Error />} />
        </Route>
        {/* <Route path="dashboard" element={<div>dashboard</div>}>
          <Route path="stats" element={<div>stats</div>} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*
Index Routes
- Index routes render in the parent routes outlet at the parent route's path
- Index routes match when a parent routes matches but none of the other children match
- Index routes are the default child route for a parent route
- Index routes render when the user hasn't clicked on e of the items in a navigation list yet
*/
