import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import useSignup from "../../hooks/useSignup";

const CreateUser = () => {
  const API = import.meta.env.VITE_API_URL;
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    contact: "",
    country: "",
    city: "",
    zipCode: "",
    address: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    console.log(name, value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API}/api/signup`, userData);
      setUserData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        contact: "",
        country: "",
        city: "",
        zipCode: "",
        address: "",
      });
      console.log("------------>", res); // Handle success response
    } catch (err) {
      console.error(err); // Handle error response
    }
  };

  return (
    <>
      <div className="bg-[#05445E] grid grid-cols-1 content-center h-full">
        <div className=" pt-5">
          <h1 className="font-bold text-[30px] text-white mx-5 md:mx-20  lg:mx-20 xl:mx-20 text-center">
            Create a User
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className=" grid grid-cols-1 mx-5 md:mx-20  lg:mx-20 xl:mx-20 mt-5 font-semibold text-white"
        >
          <div className=" bg-slate-300 rounded-t-lg px-5 pt-5 shadow-black shadow-xl">
            <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-2  md:gap-4 lg:gap-4 xl:gap-4">
              <div className=" bg-gradient-to-r from-[#F0A529] to-[#E18222] px-4 py-5 rounded-md mb-5 shadow-black shadow-lg">
                <div className=" grid grid-cols-1">
                  <div className=" mb-2">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={userData.firstName}
                      onChange={handleChange}
                      className=" w-full rounded-lg py-1 px-2 bg-slate-200 text-gray-700"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={userData.lastName}
                      onChange={handleChange}
                      className=" w-full rounded-lg py-1 px-2 bg-slate-200 text-gray-700"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#F0A529] to-[#E18222] px-4 py-5 rounded-md mb-5 shadow-black shadow-lg">
                <div className=" grid grid-cols-1 ">
                  <div className=" mb-2">
                    <label htmlFor="email">Email:</label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={userData.email}
                      onChange={handleChange}
                      className=" w-full rounded-lg py-1 px-2 bg-slate-200 text-gray-700"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className=" grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="password">Password:</label>
                      <input
                        type="text"
                        id="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                        className=" w-full rounded-lg py-1 px-2 bg-slate-200 text-gray-700"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div>
                      <label htmlFor="cpassword">Confirm Password:</label>
                      <input
                        type="text"
                        id="cpassword"
                        name="cpassword"
                        //   value={propertyData.cpassword}
                        //   onChange={handleChange}
                        className=" w-full rounded-lg py-1 px-2 bg-slate-200 text-gray-700"
                        placeholder="Confirm your password"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-2  md:gap-4 lg:gap-4 xl:gap-4">
              <div className=" bg-gradient-to-r from-[#F0A529] to-[#E18222] px-4 py-5 rounded-md mb-5 shadow-black shadow-lg">
                <div className=" grid grid-cols-2 gap-4">
                  <div className=" mb-2">
                    <label htmlFor="contact">Contact:</label>
                    <input
                      type="text"
                      id="contact"
                      name="contact"
                      value={userData.contact}
                      onChange={handleChange}
                      className=" w-full rounded-lg py-1 px-2 bg-slate-200 text-gray-700"
                      placeholder="Enter your contact"
                    />
                  </div>
                  <div className=" mb-2">
                    <label htmlFor="country">Country:</label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={userData.country}
                      onChange={handleChange}
                      className=" w-full rounded-lg py-1 px-2 bg-slate-200 text-gray-700"
                      placeholder="Enter your country"
                    />
                  </div>
                </div>
                {/* <div className=" invisible">-</div> */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="city">City:</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={userData.city}
                      onChange={handleChange}
                      className=" w-full rounded-lg py-1 px-2 bg-slate-200 text-gray-700"
                      placeholder="Enter your city"
                    />
                  </div>
                  <div>
                    <label htmlFor="zipCode">Zip Code:</label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={userData.zipCode}
                      onChange={handleChange}
                      className=" w-full rounded-lg py-1 px-2 bg-slate-200 text-gray-700"
                      placeholder="Enter count of zipCode"
                    />
                  </div>
                </div>
              </div>
              <div className=" bg-gradient-to-r from-[#F0A529] to-[#E18222] px-4 py-5 rounded-md mb-5 shadow-black shadow-lg">
                <div>
                  <label htmlFor="address">Address:</label>
                  <textarea
                    type="text"
                    id="address"
                    name="address"
                    value={userData.address}
                    onChange={handleChange}
                    className=" w-full rounded-lg py-1 px-2 bg-slate-200 text-gray-700 resize-none"
                    placeholder="Enter your address"
                    rows={3}
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-orange-700 hover:bg-orange-600 rounded-b-lg py-4 px-2 w-full text-white shadow-black shadow-xl transition-all ease-in-out duration-500 cursor-pointer"
          >
            Sign Up
          </button>
        </form>

        <div className="grid grid-cols-2 gap-x-4 mx-5 md:mx-20  lg:mx-20 xl:mx-20 pt-5 ">
          <Link to={"/api/login"}>
            <div className=" bg-yellow-600 py-4 px-2 w-full cursor-pointer rounded-lg text-center font-bold text-white mb-5">
              <button>Login</button>
            </div>
          </Link>
          <Link to="/api/propertieslist">
            <div className=" bg-blue-600 py-4 px-2 w-full cursor-pointer rounded-lg text-center font-bold text-white mb-5">
              <button>Go Back ?</button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
