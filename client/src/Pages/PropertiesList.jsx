import {
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";

const PropertiesList = () => {
  const API = import.meta.env.VITE_API_URL;
  const [allProperties, setAllProperties] = useState([]);

  const getAllProperties = async () => {
    const response = await axios.get(`${API}/api/properties`, {
      headers: { "Content-Type": "application/json" },
    });
    setAllProperties(response.data);
  };

  const deleteProperty = (id) => {
    if (window.confirm("Are you Sure to delete?")) {
      axios.delete(`${API}/api/deleteproperty/${id}`);
      setTimeout(() => {
        getAllProperties();
      }, 1000);
    }
  };

  useEffect(() => {
    getAllProperties();
  }, []);

  return (
    <div className=" grid grid-cols-5 bg-[#05445E]">
      <div className="col-span-1">
        <SideBar />
      </div>
      <div className="col-span-4 mt-5 mb-10">
        <h1 className="font-bold text-[30px] text-white mx-5">
          Properties List
        </h1>
        <div className="flex flex-col mx-5 mt-5">
          <div className="">
            <Link to={"/api/createproperties"}>
              {/* Make Create button full-width */}
              <button className=" w-full px-3 py-4 bg-orange-700 hover:bg-orange-600 text-white rounded-t-md shadow-2xl shadow-black transition-all ease-in-out duration-500">
                Create a property
              </button>
            </Link>
          </div>
          <table className="w-full  bg-slate-300 rounded-b-md shadow-xl shadow-black ">
            <thead className="border-b-2">
              <tr>
                <th className=" px-3 py-3  text-left">Sr.no.</th>
                <th className=" px-3 py-3  text-left">Property Name</th>
                {/* Hide Email and Contact columns on smaller devices */}
                <th className="   px-3 py-3  text-left">Price</th>
                <th className="   px-3 py-3  text-left">Property Type</th>
                <th className=" px-3 py-3  text-left">Bedrooms</th>
                <th className=" px-3 py-3  text-left">Bathrooms</th>
                <th className=" px-3 py-3  text-left">Square Feet</th>
                <th className=" px-3 py-3  text-left">Property Category</th>
                <th className=" px-3 py-3  text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {allProperties.map((item, index) => (
                <tr key={index}>
                  <td className=" px-3 py-2  text-left">{index + 1}</td>
                  <td className=" px-3 py-2  text-left truncate max-w-[20ch]">
                    {item.propertyName}
                  </td>
                  {/* Hide Email and Contact columns on smaller devices */}
                  <td className="   px-3 py-2  text-left truncate max-w-[25ch]">
                    {item.price}
                  </td>
                  <td className=" px-3 py-2  text-left truncate max-w-[20ch]">
                    {item.propertyType}
                  </td>
                  <td className="   px-3 py-2  text-left">{item.bedrooms}</td>
                  <td className="   px-3 py-2  text-left">{item.bathrooms}</td>
                  <td className="   px-3 py-2  text-left">{item.squareFeet}</td>
                  <td className="   px-3 py-2  text-left">
                    {item.propertyCategory}
                  </td>
                  <td className=" px-3 py-2  text-left space-x-1 flex flex-row">
                    <button
                      className="px-2 bg-[#E4021B] rounded-md text-white"
                      onClick={() => deleteProperty(item._id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <Link to={`/api/updateproperty/${item._id}`}>
                      <button className="px-2 bg-[#381333] rounded-md text-white">
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </button>
                    </Link>
                    <Link to={`/api/readproperty/${item._id}`}>
                      <button className="px-2 bg-[#AB0552] rounded-md text-white">
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PropertiesList;
