import React from "react";
import BookOnline from "../../components/BookOnline";

const Book = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-5 py-5 w-full">
      <div className="md:max-w-[50%] mx-auto">
        <BookOnline></BookOnline>
      </div>
    </div>
  );
};

export default Book;
