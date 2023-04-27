import React from "react";
import BookOnline from "./BookOnline";

const HeaderBanner = () => {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil vitae
        minima quod deserunt ab earum quaerat dignissimos, consectetur odit
        quibusdam a pariatur porro, illum atque et beatae, enim sed sit?
      </div>
      <BookOnline />
    </div>
  );
};

export default HeaderBanner;
