// eslint-disable-next-line no-unused-vars
import React from "react";
import "flowbite";
import { Button, Navbar } from "flowbite-react";
import logo from "/skylogo.png";
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
            <Button>Get started</Button>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link href="/navbars" active={true}>
              Home
            </Navbar.Link>
            <Navbar.Link href="/navbars">About</Navbar.Link>
            <Navbar.Link href="/navbars">Services</Navbar.Link>
            <Navbar.Link href="/navbars">Pricing</Navbar.Link>
            <Navbar.Link href="/navbars">Contact</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
