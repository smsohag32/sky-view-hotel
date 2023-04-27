// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "../pages/shared/Header";

import { Outlet } from "react-router-dom";
import Footers from "../pages/shared/Footer";

const Main = () => {
  return (
    <>
      <Header></Header>
      <div className="min-h-[70vh]">
        <Outlet />
      </div>
      <div>
        <Footers />
      </div>
    </>
  );
};

export default Main;
