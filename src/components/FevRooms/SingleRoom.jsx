import { Card } from "flowbite-react";
import React from "react";

const SingleRoom = ({ room }) => {
  const { id, roomNumber, roomType, price, img, features } = room;

  return (
    <div className="w-full h-full">
      <Card horizontal={true} imgSrc={img} className="object-fill">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {roomType}
        </h5>
        <span className="font-normal text-gray-700 dark:text-gray-400">
          {features.map((fe) => (
            <p>{fe}</p>
          ))}
        </span>
      </Card>
    </div>
  );
};

export default SingleRoom;
