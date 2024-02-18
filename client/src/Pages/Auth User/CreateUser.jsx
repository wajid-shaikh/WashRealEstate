import React from "react";

const CreateUser = () => {
  return (
    <>
      <div className="bg-[#05445E] h-screen">
        <div className=" pt-5">
          <h1 className="font-bold text-[30px] text-white mx-5">
            Create a User
          </h1>
        </div>
        <form
          //   onSubmit={handleSubmit}
          className=" flex flex-col mx-5 mt-5 font-semibold text-white"
        >
          <div className=" bg-slate-300 rounded-t-lg px-5 pt-5 shadow-black shadow-xl">
            <div className=" grid grid-cols-2 gap-4">
              <div className=" bg-gradient-to-r from-[#F0A529] to-[#E18222] px-4 py-5 rounded-md mb-5 shadow-black shadow-lg">
                <div className=" grid grid-cols-1">
                  <div className=" mb-2">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      //   value={propertyData.firstName}
                      //   onChange={handleChange}
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
                      //   value={propertyData.lastName}
                      //   onChange={handleChange}
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
                      //   value={propertyData.description}
                      //   onChange={handleChange}
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
                        //   value={propertyData.password}
                        //   onChange={handleChange}
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
            <div className=" grid grid-cols-2 gap-4">
              <div className=" bg-gradient-to-r from-[#F0A529] to-[#E18222] px-4 py-5 rounded-md mb-5 shadow-black shadow-lg">
                <div className=" grid grid-cols-2 gap-4">
                  <div className=" mb-2">
                    <label htmlFor="contact">Contact:</label>
                    <input
                      type="text"
                      id="contact"
                      name="contact"
                      //   value={propertyData.contact}
                      //   onChange={handleChange}
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
                      //   value={propertyData.country}
                      //   onChange={handleChange}
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
                      //   value={propertyData.city}
                      //   onChange={handleChange}
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
                      //   value={propertyData.zipCode}
                      //   onChange={handleChange}
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
                    //   value={propertyData.address}
                    //   onChange={handleChange}
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
            className="bg-orange-700 hover:bg-orange-600 rounded-b-lg py-4 px-2 w-full text-white shadow-black shadow-xl transition-all ease-in-out duration-500"
            disabled
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateUser;
