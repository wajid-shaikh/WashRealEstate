import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { propertiesSection } from "../Constants";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faCirclePlus,
  faHeart,
  faSquare,
  faUpRightAndDownLeftFromCenter,
} from "@fortawesome/free-solid-svg-icons";

const Property = () => {
  const API = import.meta.env.VITE_API_URL;
  // console.log(API);
  const [allProperties, setAllProperties] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Number of items to display per page

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allProperties.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getAllProperties = async () => {
    try {
      const response = await axios.get(`${API}/api/properties`);
      setAllProperties(response.data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    getAllProperties();
  }, [currentPage]);
  console.log(currentItems);
  // console.log(propertiesSection.properties);

  return (
    <>
      <Navbar />
      <div className=" mx-20 mt-24 text-center mb-10">
        <div className="font-extrabold text-[45px] text-[#05445E]">
          {propertiesSection.propertyHeading}
        </div>
        <div className="grid grid-cols-3 gap-4 text-gray-300">
          {currentItems.map((item) => (
            <div
              className="relative border-white border-2 h-96 bg-[#05445E] rounded-lg"
              key={item._id}
            >
              <div className=" overflow-hidden inline-block h-1/2 rounded-t-lg">
                {item.images.length > 0 && (
                  <img
                    src={`${API}/${item.images[0]}`}
                    alt="https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className=" w-full  rounded-t-lg hover:scale-125 transition-all ease-in-out duration-500 cursor-pointer"
                  />
                )}
              </div>
              <div
                className={`absolute top-0 right-0 text-white px-2 rounded-md mt-6 mr-6 text-[13px] ${
                  item.propertyType === "Rent"
                    ? "bg-[#05445E]"
                    : " bg-[#D05301]"
                }`}
              >
                For {item.propertyType}
              </div>
              <div className=" grid grid-cols-1 mx-5 justify-items-start">
                <div className=" font-extrabold text-[20px]">
                  {item.propertyType === "Rent" ? (
                    <span className=" font-semibold text-[15px]">
                      Rent Per month -{" "}
                    </span>
                  ) : (
                    <span className=" font-semibold text-[15px]">
                      Buy at Cost -{" "}
                    </span>
                  )}{" "}
                  {item.price} $
                </div>
                <div className=" font-medium text-[17px]">
                  {item.propertyName}
                </div>
                <div className=" font-normal text-start text-[14px] leading-none truncate inline-block w-full">
                  {item.description}
                </div>

                <div className=" grid grid-cols-1 w-full divide-y-2 mt-4">
                  <div className=" grid grid-cols-3 w-full  divide-x-[2px]">
                    <div className=" leading-none text-left">
                      <div className=" flex items-center">
                        <div>{item.bedrooms}</div>
                        <div className=" ml-2">
                          <FontAwesomeIcon icon={faBed} width={18} />
                        </div>
                      </div>
                      <div className=" mt-1">Bedrooms</div>
                    </div>
                    <div className=" leading-none text-left">
                      <div className=" flex ml-5 items-center">
                        <div>{item.bathrooms}</div>
                        <div className=" ml-2">
                          <FontAwesomeIcon icon={faBath} width={18} />
                        </div>
                      </div>
                      <div className=" ml-5 mt-1">Bathrooms</div>
                    </div>
                    <div className=" leading-none text-left">
                      <div className=" flex ml-5 items-center">
                        <div>{item.squareFeet}</div>
                        <div className=" ml-2">
                          <FontAwesomeIcon icon={faSquare} width={18} />
                        </div>
                      </div>
                      <div className=" ml-5 mt-1">Square ft.</div>
                    </div>
                  </div>
                  <div className="flex justify-center w-full absolute bottom-0 left-0">
                    <div className=" m-3">
                      <Link to={"/propertydetails"}>
                        <div className="bg-[#D05301] hover:bg-[#9F2B00] px-1 rounded-md  cursor-pointer">
                          <FontAwesomeIcon
                            icon={faUpRightAndDownLeftFromCenter}
                          />
                        </div>
                      </Link>
                    </div>
                    <div className=" m-3">
                      <div className="bg-[#D05301] hover:bg-[#9F2B00] px-1 rounded-md  cursor-pointer">
                        <FontAwesomeIcon icon={faHeart} />
                      </div>
                    </div>
                    <div className=" m-3">
                      <div className="bg-[#D05301] hover:bg-[#9F2B00] px-1 rounded-md  cursor-pointer">
                        <FontAwesomeIcon icon={faCirclePlus} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {Array.from(
            {
              length: Math.ceil(allProperties.length / itemsPerPage),
            },
            (_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={`mx-1 px-3 py-1 rounded-md focus:outline-none ${
                  currentPage === i + 1
                    ? "bg-[#05445E] text-white"
                    : "bg-gray-300 text-gray-800"
                }`}
              >
                {i + 1}
              </button>
            )
          )}
        </div>
      </div>
      <div className=" bg-[#D05301] z-20">
        <Footer />
      </div>
    </>
  );
};

export default Property;
