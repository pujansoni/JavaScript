import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import StyledNavbar from "../components/StyledNavbar";

const Home = () => {
  return (
    <>
        <StyledNavbar />
        {/* Here the code before the Outlet will be available to all the nested pages of the Home i.e. all the Routes that are defined in the Home page */}
        <Outlet />
    </>
  );
};

export default Home;
