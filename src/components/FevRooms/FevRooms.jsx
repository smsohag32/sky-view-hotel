import React from "react";
import SingleRoom from "./SingleRoom";
import Marquee from "react-fast-marquee";

const FevRooms = ({ rooms }) => {
  return (
    <div className="py-10">
      <Marquee>
        <div className="flex gap-20">
          {rooms?.map((room) => (
            <SingleRoom key={room.id} room={room}></SingleRoom>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default FevRooms;
