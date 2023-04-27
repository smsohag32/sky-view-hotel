import React from "react";

const SingleRoom = ({ room }) => {
  const { id, roomType, price, features, capacity, img } = room;
  return (
    <div className="p-5 bg-green-200 mr-3 border-2">
      <p>{roomType}</p>
      <p>{capacity}</p>
      <p>{price}</p>
    </div>
  );
};

export default SingleRoom;
