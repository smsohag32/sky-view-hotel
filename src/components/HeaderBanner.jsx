import React from "react";
import BookOnline from "./BookOnline";

const HeaderBanner = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-5 py-5">
      <div className="grid md:grid-cols-3">
        <div className="col-span-2 w-full">
          <h1 className="text-3xl md:text-5xl font-bold">
            Welcome to Your Site
          </h1>
          <p className="md:max-w-[60%]">
            <small>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis minima, id nobis cupiditate, cumque assumenda eius
              vel inventore consequuntur, natus excepturi molestias deserunt
              sint recusandae fugiat nulla. Magnam, laboriosam expedita.
            </small>
          </p>
          <button>Learn More</button>
        </div>
        <div className="w-full mx-auto">
          <BookOnline />
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
