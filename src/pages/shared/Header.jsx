// eslint-disable-next-line no-unused-vars
import React from "react";
import "flowbite";
import { Button, Navbar } from "flowbite-react";
import logo from "/skylogo.png";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="max-w-[1200px] mx-auto w-full">
        <Navbar fluid={true} className="bg-inherit" rounded={true}>
          <Navbar.Brand>
            <img src={logo} className="mr-1 h-6 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              ViewHotel
            </span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Link to="/book">
              <Button>Book Online</Button>
            </Link>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/rooms">Rooms</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            <NavLink to="/login">Login</NavLink>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
