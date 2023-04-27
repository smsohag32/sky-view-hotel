import React from "react";
import SingleRoom from "./SingleRoom";
import Marquee from "react-fast-marquee";

const FevRooms = ({ rooms }) => {
  return (
    <Marquee>
      <div className="flex gap-32">
        {rooms?.map((room) => (
          <SingleRoom key={room.id} room={room}></SingleRoom>
        ))}
      </div>
    </Marquee>
  );
};

export default FevRooms;
