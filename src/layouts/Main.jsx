// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Header from "../pages/shared/Header";

import { Outlet } from "react-router-dom";
import Footers from "../pages/shared/Footer";

const Main = () => {
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 90) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };
  window.addEventListener("scroll", handleScroll);
  return (
    <>
      <div
        className={`sticky top-0 z-40 ${
          isScroll ? "bg-white duration-500" : "bg-inherit duration-200"
        }`}
      >
        <Header></Header>
      </div>
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
