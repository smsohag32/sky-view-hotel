import Contact from "../../components/Contact";
import HeaderBanner from "../../components/HeaderBanner";
import bg from "./bg.jpeg";
const Home = () => {
  return (
    <>
      <div
        className=" bg-slate-500 bg-blend-overlay"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
        }}
      >
        <HeaderBanner />
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
