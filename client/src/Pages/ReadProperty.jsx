import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SideBar from "./SideBar";

const ReadProperty = () => {
  const API = import.meta.env.VITE_API_URL;
  const [readProperty, setReadProperty] = useState({});

  const { id } = useParams();

  const fetchSingleData = async () => {
    try {
      const response = await axios.get(`${API}/api/readproperty/${id}`);
      setReadProperty(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchSingleData();
    // eslint-disable-next-line
  }, [id]);
  console.log(readProperty);

  return (
    <>
      <div className="bg-[#05445E] text-white grid grid-cols-5">
        <div className="col-span-1">
          <SideBar />
        </div>
        <div className="col-span-4 mt-5 mb-10">
          <h1 className=" font-bold text-[30px] text-white mx-5 ">
            Property Details
          </h1>
          <div className=" bg-slate-300  rounded-lg  shadow-xl shadow-black flex flex-col mx-5 mt-5">
            <p className="text-black mt-5 font-bold text-center text-[20px] border-b-[2px] ">
              {readProperty.propertyName}
            </p>
            <div className=" grid grid-cols-1 mx-5 gap-5 mt-5">
              {/* Row 1 */}
              <div className=" grid grid-cols-3 gap-4">
                <div className=" flex justify-between bg-gradient-to-r from-[#F0A529] to-[#E18222] px-5 py-5 rounded-lg shadow-lg shadow-black">
                  <p className=" text-black font-semibold " htmlFor="name">
                    Property Name
                  </p>
                  <p className=" text-black font-semibold " htmlFor="name">
                    {readProperty.propertyName}
                  </p>
                </div>
                <div className="flex justify-between bg-gradient-to-r from-[#F0A529] to-[#E18222] px-5 py-5 rounded-lg shadow-lg shadow-black">
                  <p className=" text-black font-semibold" htmlFor="name">
                    Price
                  </p>
                  <p className=" text-black font-semibold" htmlFor="name">
                    {readProperty.price} $
                  </p>
                </div>
                <div className="flex justify-between bg-gradient-to-r from-[#F0A529] to-[#E18222] px-5 py-5 rounded-lg shadow-lg shadow-black">
                  <p className=" text-black font-semibold " htmlFor="name">
                    Bathrooms
                  </p>
                  <p className=" text-black font-semibold " htmlFor="name">
                    {readProperty.bathrooms}
                  </p>
                </div>
              </div>
              {/* Row 2 */}
              <div className="grid grid-cols-3 gap-4">
                <div className="flex justify-between bg-gradient-to-r from-[#F0A529] to-[#E18222] px-5 py-5 rounded-lg shadow-lg shadow-black">
                  <p className=" text-black font-semibold " htmlFor="name">
                    Bedrooms
                  </p>
                  <p className=" text-black font-semibold " htmlFor="name">
                    {readProperty.bedrooms}
                  </p>
                </div>
                <div className="flex justify-between bg-gradient-to-r from-[#F0A529] to-[#E18222] px-5 py-5 rounded-lg shadow-lg shadow-black">
                  <p className=" text-black font-semibold " htmlFor="name">
                    Garage
                  </p>
                  <p className=" text-black font-semibold " htmlFor="name">
                    {readProperty.garage}
                  </p>
                </div>
                <div className="flex justify-between bg-gradient-to-r from-[#F0A529] to-[#E18222] px-5 py-5 rounded-lg shadow-lg shadow-black">
                  <p className=" text-black font-semibold " htmlFor="name">
                    Property Category
                  </p>
                  <p className=" text-black font-semibold " htmlFor="name">
                    {readProperty.propertyCategory}
                  </p>
                </div>
              </div>
              {/* Row 3 */}
              <div className=" grid grid-cols-3 gap-4">
                <div className="flex justify-between bg-gradient-to-r from-[#F0A529] to-[#E18222] px-5 py-5 rounded-lg shadow-lg shadow-black">
                  <p className=" text-black font-semibold " htmlFor="name">
                    Property Type
                  </p>
                  <p className=" text-black font-semibold " htmlFor="name">
                    {readProperty.propertyType}
                  </p>
                </div>
                <div className="flex justify-between bg-gradient-to-r from-[#F0A529] to-[#E18222] px-5 py-5 rounded-lg shadow-lg shadow-black">
                  <p className=" text-black font-semibold " htmlFor="name">
                    Square Feet
                  </p>
                  <p className=" text-black font-semibold " htmlFor="name">
                    {readProperty.squareFeet} sq.ft.
                  </p>
                </div>
                <div className="flex justify-between bg-gradient-to-r from-[#F0A529] to-[#E18222] px-5 py-5 rounded-lg shadow-lg shadow-black">
                  <p className=" text-black font-semibold " htmlFor="name">
                    Floor Number
                  </p>
                  <p className=" text-black font-semibold " htmlFor="name">
                    {readProperty.floorNumber}{" "}
                    {readProperty.floorNumber === "N/A" ? "" : "th"}
                  </p>
                </div>
              </div>
              {/* Row 4 */}
              <div className=" grid grid-cols-2 gap-4">
                <div className=" grid grid-cols-3 bg-gradient-to-r from-[#F0A529] to-[#E18222] px-5 py-5 rounded-lg shadow-lg shadow-black">
                  <p
                    className=" text-black font-semibold col-span-1"
                    htmlFor="name"
                  >
                    Address
                  </p>
                  <p
                    className=" text-black font-semibold col-span-2"
                    htmlFor="name"
                  >
                    {readProperty.address}
                  </p>
                </div>
                <div className=" grid grid-cols-3 bg-gradient-to-r from-[#F0A529] to-[#E18222] px-5 py-5 rounded-lg shadow-lg shadow-black">
                  <p
                    className=" text-black font-semibold col-span-1"
                    htmlFor="name"
                  >
                    Description
                  </p>
                  <p
                    className=" text-black font-semibold col-span-2"
                    htmlFor="name"
                  >
                    {readProperty.description}
                  </p>
                </div>
              </div>
              <div className=" grid grid-cols-6 bg-gradient-to-r from-[#F0A529] to-[#E18222] px-5 py-5 rounded-lg shadow-lg shadow-black">
                <p
                  className=" text-black font-semibold col-span-1"
                  htmlFor="name"
                >
                  Images
                </p>
                <div className=" col-span-5">
                  <div className=" flex justify-around">
                    {readProperty.images &&
                      readProperty.images.map((image, index) => (
                        <div
                          key={index}
                          className="overflow-hidden inline-block rounded-md border-white border-2"
                          style={{ height: "90px", width: "160px" }}
                        >
                          <img
                            src={`${API}/${image}`}
                            alt="https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            className="object-cover hover:scale-125 transition-all ease-in-out duration-500"
                            style={{ width: "100%", height: "100%" }}
                            width={120}
                          />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>

            <Link to={"/api/propertieslist"}>
              <div className=" font-bold rounded-b-md py-4 mt-10 bg-orange-700 hover:bg-orange-600 w-full text-center transition-all ease-in-out duration-500 cursor-pointer">
                Go Back?
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadProperty;
