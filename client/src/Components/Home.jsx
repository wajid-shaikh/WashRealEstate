import React from "react";
import Navbar from "./Navbar";
import { HomeSection } from "../Constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown, faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutUs from "./AboutUs";
import OurServices from "./OurServices";
import Aminities from "./Aminities";
import Footer from "./Footer";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const Home = () => {
  const containerStyle = {
    backgroundImage: `url(${HomeSection.BgImage})`,
    // backgroundSize: "cover",
    // backgroundPosition: "center",
    // height: "200vh", // Set the height as needed
  };

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <section id="home" className="relative h-screen">
        <div
          style={containerStyle}
          className={`bg-cover bg-no-repeat bg-bottom filter brightness-50 w-full absolute top-0 -z-[1] h-screen`}
        ></div>
        <div className=" mx-10 md:mx-20 lg:mx-20 xl:mx-20 absolute top-1/2 transform -translate-y-1/2">
          <div className=" font-sans font-bold flex items-baseline text-[20px]">
            <FontAwesomeIcon icon={faHouse} className=" text-white" />
            <div className=" px-5 text-white">{HomeSection.HomeTitleText}</div>
          </div>
          <div className="font-sans font-extrabold text-[60px] text-white w-[400px] md:w-[550px] lg:w-[600px] xl:w-[700px]  leading-none">
            {HomeSection.HomeBodyText}
          </div>
          <div className="font-sans text-white mt-9 w-[500px] grid grid-cols-1 divide-x-[3px]">
            <div className="  rounded-2xl "></div>
            <div className=" px-4 w-[350px] md:w-full lg:w-full xl:w-full">
              {" "}
              {HomeSection.HomeDescription}
            </div>
          </div>
          <div className=" mt-9">
            <Link
              to={"/property"}
              className=" bg-[#189AB4] text-white px-20 py-3 rounded-sm"
            >
              Explore
              <FontAwesomeIcon
                icon={faAnglesDown}
                className="animate-bounce transition-all ease-in-out duration-500 ml-2"
              />
            </Link>
          </div>
        </div>
      </section>
      <section
        id="aboutus"
        className="mx-10 md:mx-20 lg:mx-20 xl:mx-20 py-10 flex items-center"
      >
        <AboutUs />
      </section>
      <section id="ourServices" className=" bg-[#189AB4] py-10 ">
        <OurServices />
      </section>
      <section id="ourAminities" className=" py-10">
        <Aminities />
      </section>
      <section className=" bg-orange-700">
        <Footer />
      </section>
    </>
  );
};

export default Home;
