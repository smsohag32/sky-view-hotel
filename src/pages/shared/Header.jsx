// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import "flowbite";
import { Button, Navbar } from "flowbite-react";
import logo from "/skylogo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaBeer, FaUserCircle } from "react-icons/fa";
const Header = () => {
  const { user, logoutUser } = useContext(AuthContext);
  // handle logout user
  const handleLogout = () => {
    logoutUser();
    // const navigate = useNavigate();
  };

  return (
    <div className="shadow-md bg-transparent">
      <div className="max-w-[1200px] bg-transparent mx-auto w-full">
        <Navbar fluid={true} className="bg-inherit" rounded={true}>
          <Navbar.Brand>
            <img src={logo} className="mr-1 h-6 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              ViewHotel
            </span>
          </Navbar.Brand>
          <div className="flex items-center md:order-2">
            <Link to="/dashboard">
              {user && (
                <FaUserCircle className="text-3xl text-red-600 transform duration-500 mr-5" />
              )}
            </Link>
            <Link to="/book">
              <Button>Book Online</Button>
            </Link>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/rooms">Rooms</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            {user ? (
              <span className="transform duration-500" onClick={handleLogout}>
                <NavLink>Logout</NavLink>
              </span>
            ) : (
              <NavLink to="/login">Login</NavLink>
            )}
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
