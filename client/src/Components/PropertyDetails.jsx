import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PropertyDetails = () => {
  return (
    <>
      <Navbar />
      <div className=" h-screen mx-20 mt-24 bg-purple-700">PropertyDetails</div>
      <div className=" bg-[#D05301] z-20">
        <Footer />
      </div>
    </>
  );
};

export default PropertyDetails;
