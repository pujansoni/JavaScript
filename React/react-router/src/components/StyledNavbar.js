import { NavLink } from "react-router-dom";

// Here if we use the NavLink component in order to control how the links are displayed then we can see that the active links are different in color compared to the idle links/inactive links
const Navbar = () => {
    return (
        <nav className="navbar">
            {/* <NavLink to="/" style={(isActive) => {return {color:isActive? "red" : "grey"};}}>Home</NavLink> */}
            {/* Alternatively we can also use the classes approach when we want to set up the active/inactive links */}
            <NavLink to="/" className={({isActive}) => isActive ? "link active" : "link"}>Home</NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? "link active" : "link"}>About</NavLink>
            <NavLink to="/products" className={({isActive}) => isActive ? "link active" : "link"}>Products</NavLink>
        </nav>
    );
};

export default Navbar;
