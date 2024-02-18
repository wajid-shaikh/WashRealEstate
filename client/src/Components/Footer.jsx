import React from "react";
import { footerSection } from "../Constants";

const Footer = () => {
  return (
    <>
      <div className=" grid grid-cols-3 justify-items-center mx-20 font-sans gap-10 text-white z-20 pt-10">
        <div className="">
          <div className=" font-extrabold text-3xl">
            {footerSection.footerHeading}
          </div>
          <div className=" font-medium text-xl mt-3">
            {footerSection.footerDescription}
          </div>
          <div className=" mt-5">
            {footerSection.footerContact.map((item) => (
              <div className=" flex  items-center mt-3  " key={item.id}>
                <div>
                  <img src={item.icon} alt="" width={15} />
                </div>
                <div className=" ml-3">{item.textName}</div>
              </div>
            ))}
          </div>
          <div className=" flex mt-10">
            {footerSection.footerSocialIcons.map((item) => (
              <div key={item.id} className=" mr-8 cursor-pointer">
                <img src={item.icon} alt="" width={20} />
              </div>
            ))}
          </div>
        </div>
        <div className=" col-span-2 w-full">
          <div className=" grid grid-cols-3 ">
            {footerSection.footerLinks.map((item) => (
              <div key={item.id} className="">
                <div className=" font-bold text-2xl">{item.footerColHead}</div>
                {item.footerCol.map((newItem) => (
                  <div
                    key={newItem.id}
                    className=" font-semibold mt-5 hover:text-black cursor-pointer"
                  >
                    {newItem.textName}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#05445E] h-16 mt-10 flex justify-center items-center text-white">
        © 2024 Real Estate Web App - Developed By Wajid Shaikh
      </div>
    </>
  );
};

export default Footer;
