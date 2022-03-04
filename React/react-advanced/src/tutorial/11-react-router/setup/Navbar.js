import React from 'react';
import { Link } from 'react-router-dom';
// Here we have used a special Link component to display the link
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/people">People</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
