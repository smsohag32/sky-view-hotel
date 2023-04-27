import React from "react";
import BookOnline from "./BookOnline";
import { Button } from "flowbite-react";
import { FaArrowCircleRight } from "react-icons/fa";

const HeaderBanner = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-5 py-5">
      <div className="grid items-center md:grid-cols-3">
        <div className="col-span-2 flex flex-col gap-5 w-full">
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
          <Button className="max-w-[40%]" gradientMonochrome="info">
            LATEST NEWS & EVENTS{" "}
            <FaArrowCircleRight className="ml-3"></FaArrowCircleRight>
          </Button>
        </div>
        <div className="w-full mx-auto">
          <BookOnline />
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
