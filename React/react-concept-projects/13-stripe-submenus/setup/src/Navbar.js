import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

// Here the navbar is transparent and we will use the Hero to achieve that
const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    // Here in order to display the submenu below each navbar items we will get the button text along with the dimensions of the navbar button
    // Here in order to get the text of the button we use the line given below
    const page = e.target.textContent;
    // Here to get the dimensions we will use the getBoundingClientRect() function
    const tempBtn = e.target.getBoundingClientRect();
    // console.log(tempBtn);
    // So here we need to get the center of the button which we can calculate by (left+right)/2 and if we want to display the submenu on top of the button then we will subtract 3px from the bottom of the button
    const center = (tempBtn.left + tempBtn.right)/2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, {center, bottom});
  }

  const handleSubmenu = (e) => {
    // Here we want to close the navbar anywhere we hover over the navbar excluding the button area on the navbar
    if(!e.target.classList.contains("link-btn")) {
      closeSubmenu();
    }
  }

  return (
    <>
      <nav className="nav" onMouseOver={handleSubmenu}>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="stripe" />
            <button className="btn toggle-btn" onClick={openSidebar}>
              <FaBars />
            </button>
          </div>
          <ul className="nav-links">
            {/* Here the values in the button must match the text values where we have the object in the data */}
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                products
              </button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                developers
              </button>
            </li>
            <li>
              <button className="link-btn" onMouseOver={displaySubmenu}>
                company
              </button>
            </li>
          </ul>
          <button className="btn signin-btn">
            Sign in
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar
