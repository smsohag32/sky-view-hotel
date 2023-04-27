import React from "react";
import BookOnline from "../../components/BookOnline";

const Book = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-5 py-5 w-full">
      <div className="md:max-w-[50%] shadow-md border-2 py-10 px-5 mx-auto">
        <h3 className="text-center mb-6 font-bold text-xl">Book Now Online</h3>
        <BookOnline></BookOnline>
      </div>
    </div>
  );
};

export default Book;
