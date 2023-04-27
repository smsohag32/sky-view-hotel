import { useLoaderData } from "react-router-dom";
import Contact from "../../components/Contact";
import FevRooms from "../../components/FevRooms/FevRooms";
import HeaderBanner from "../../components/HeaderBanner";
import bg from "/bg.jpg";
const Home = () => {
  const rooms = useLoaderData();
  console.log(rooms);
  return (
    <>
      <div
        className=" bg-blue-300 bg-blend-overlay"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
        }}
      >
        <HeaderBanner />
      </div>
      <div>
        <FevRooms rooms={rooms} />
      </div>
      <div className="max-w-[1200px] mx-auto px-5 py-5">
        <div>
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Home;
