// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../pages/shared/Header";
import Footer from "../pages/shared/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Header></Header>
      <div className="min-h-[70vh]">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Main;
