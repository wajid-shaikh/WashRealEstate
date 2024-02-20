import React from "react";
import { footerSection } from "../Constants";

const Footer = () => {
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-3 gap-10 justify-items-center mx-5 md:mx-20 lg:mx-20 xl:mx-20 font-sans  text-white z-20 pt-10">
        <div className=" grid grid-cols-1 gap-y-5">
          <div className=" font-extrabold text-3xl">
            {footerSection.footerHeading}
          </div>
          <div className=" font-medium text-xl ">
            {footerSection.footerDescription}
          </div>
          <div className="">
            {footerSection.footerContact.map((item) => (
              <div className=" flex  items-center   " key={item.id}>
                <div>
                  <img src={item.icon} alt="" width={15} />
                </div>
                <div className=" ml-3">{item.textName}</div>
              </div>
            ))}
          </div>
          <div className=" flex">
            {footerSection.footerSocialIcons.map((item) => (
              <div key={item.id} className=" mr-8 cursor-pointer">
                <img src={item.icon} alt="" width={20} />
              </div>
            ))}
          </div>
        </div>
        <div className=" md:col-span-2  lg:col-span-2 xl:col-span-2 w-full">
          <div className=" grid grid-cols-1 gap-y-12 md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-3 ">
            {footerSection.footerLinks.map((item) => (
              <div key={item.id} className=" grid grid-cols-1 gap-y-5">
                <div className=" font-bold text-2xl">{item.footerColHead}</div>
                <div className=" grid grid-cols-2 md:grid-cols-1  lg:grid-cols-1 xl:grid-cols-1 gap-y-2 md:gap-y-5  lg:gap-y-5 xl:gap-y-5">
                  {item.footerCol.map((newItem) => (
                    <div
                      key={newItem.id}
                      className=" font-semibold  hover:text-black cursor-pointer w-fit"
                    >
                      {newItem.textName}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#05445E] h-16 mt-10 flex justify-center items-center text-white">
        <p className=" mx-5 w-52 md:w-full  lg:w-full xl:w-full text-center">
          © 2024 Real Estate Web App - Developed By Wajid Shaikh
        </p>
      </div>
    </>
  );
};

export default Footer;
