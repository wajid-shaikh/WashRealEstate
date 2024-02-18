import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { useParams } from "react-router-dom";
import axios from "axios";

const UpdateProperty = () => {
  const API = import.meta.env.VITE_API_URL;
  const { id } = useParams();

  const [propertyData, setPropertyData] = useState({
    propertyType: "",
    images: [],
    price: "",
    propertyName: "",
    description: "",
    bedrooms: "",
    bathrooms: "",
    garage: "",
    squareFeet: "",
    propertyCategory: "",
    address: "",
    floorNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyData({
      ...propertyData,
      [name]: value,
    });
    // console.log(name, value);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    console.log("image selected", files);
    // Check if any files are selected
    if (files.length > 0) {
      setPropertyData({
        ...propertyData,
        images: files,
      });
    } else {
      // Handle case when no files are selected
      console.log(files);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in propertyData) {
      if (key === "images") {
        console.log("Entered into the images", propertyData[key]);
        propertyData[key].forEach((image, index) => {
          formData.append("images", image, `${index}-${image.name}`);
        });
      } else {
        formData.append(key, propertyData[key]);
      }
    }

    try {
      const response = await axios.put(
        `${API}/api/updateproperty/${id}`,

        formData
      );
      setPropertyData({
        propertyType: "",
        price: "",
        propertyName: "",
        description: "",
        bedrooms: "",
        bathrooms: "",
        garage: "",
        squareFeet: "",
        propertyCategory: "",
        address: "",
        floorNumber: "",
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getPropertyData = async (id) => {
    try {
      const response = await axios.get(`${API}/api/readproperty/${id}`);
      console.log(response);
      setPropertyData(response.data);
      // setUpdate({
      //   name: response.data.data.name,
      //   email: response.data.data.email,
      //   contact: response.data.data.contact,
      // });
    } catch (error) {
      // Handle error from the read request, if needed
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getPropertyData(id);
    // eslint-disable-next-line
  }, [id]);

  return (
    <>
      <div className="grid grid-cols-5 bg-[#05445E]">
        <div className="col-span-1">
          <SideBar />
        </div>
        <div className="col-span-4 mt-5 mb-10">
          <h1 className="font-bold text-[30px] text-white mx-5">
            Update a property
          </h1>
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col mx-5 mt-5 font-semibold text-white"
          >
            <div className=" bg-slate-300 rounded-t-lg px-5 pt-5 shadow-black shadow-xl">
              <div className=" grid grid-cols-2 gap-4">
                <div className=" bg-gradient-to-r from-[#F0A529] to-[#E18222] px-4 py-5 rounded-md mb-8 shadow-black shadow-lg">
                  <div className=" grid grid-cols-1 ">
                    <div className=" mb-2">
                      <label htmlFor="propertyName">Property Name:</label>
                      <input
                        type="text"
                        id="propertyName"
                        name="propertyName"
                        value={propertyData.propertyName}
                        onChange={handleChange}
                        className=" w-full rounded-lg py-1 px-2 bg-slate-200 text-gray-700"
                        placeholder="Enter your property name"
                      />
                    </div>
                    <div className=" grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="price">Price:</label>
                        <input
                          type="text"
                          id="price"
                          name="price"
                          value={propertyData.price}
                          onChange={handleChange}
                          className=" w-full rounded-lg py-1 px-2 bg-slate-200 text-gray-700"
                          placeholder="Enter your price"
                        />
                      </div>
                      <div>
                        <label htmlFor="squareFeet">Square Ft.:</label>
                        <input
                          type="text"
                          id="squareFeet"
                          name="squareFeet"
                          value={propertyData.squareFeet}
                          onChange={handleChange}
                          className=" w-full rounded-lg py-1 px-2 bg-slate-200 text-gray-700"
                          placeholder="Enter property square ft."
                        />
                      </div>
                    </div>
                  </div>
                  {/* <div className=" invisible">-</div> */}
                </div>
                <div className=" bg-gradient-to-r from-[#F0A529] to-[#E18222] px-4 py-5 rounded-md mb-8 shadow-black shadow-lg">
                  <div className=" grid grid-cols-2 gap-4">
                    <div className=" mb-2">
                      <label htmlFor="propertyType">Property Type:</label>
                      <select
                        id="propertyType"
                        name="propertyType"
                        value={propertyData.propertyType}
                        onChange={handleChange}
                        className=" w-full rounded-lg py-1 px-2 bg-slate-200 text-gray-700"
                        placeholder="Enter your property type"
                      >
                        <option value="">Select...</option>
                        <option value="Rent">Rent</option>
                        <option value="Sale">Sale</option>
                      </select>
                    </div>
                    <div className=" mb-2">
                      <label htmlFor="propertyCategory">
                        Property Category
                      </label>
                      <select
                        id="propertyCategory"
                        name="propertyCategory"
                        value={propertyData.propertyCategory}
                        onChange={handleChange}
                        className=" w-full rounded-lg py-1 px-2 bg-slate-200 text-gray-700"
                        placeholder="Enter your property category"
                      >
                        <option value="">Select...</option>
                        <option value="house">House</option>
                        <option value="bungalow">Bungalow</option>
                        <option value="rowHouse">Row house</option>
                        <option value="flat">Flat</option>
                      </select>
                    </div>
                  </div>
                  <div className=" grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="Bedrooms">Bedrooms:</label>
                      <input
                        type="text"
                        id="bedrooms"
                        name="bedrooms"
                        value={propertyData.bedrooms}
                        onChange={handleChange}
                        className=" w-full rounded-lg py-1 px-2 bg-slate-200 text-gray-700"
                        placeholder="Enter count of bedrooms"
                      />
                    </div>
                    <div>
                      <label htmlFor="bathrooms">Bathrooms:</label>
                      <input
                        type="text"
                        id="bathrooms"
                        name="bathrooms"
                        value={propertyData.bathrooms}
                        onChange={handleChange}
                        className=" w-full rounded-lg py-1 px-2 bg-slate-200 text-gray-700"
                        placeholder="Enter count of bathrooms"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className=" grid grid-cols-2 gap-4">
                <div className=" bg-gradient-to-r from-[#F0A529] to-[#E18222] px-4 py-5 rounded-md mb-8 shadow-black shadow-lg">
                  <div className=" grid grid-cols-1">
                    <div className=" mb-2">
                      <label htmlFor="description">Description:</label>
                      <input
                        type="text"
                        id="description"
                        name="description"
                        value={propertyData.description}
                        onChange={handleChange}
                        className=" w-full rounded-lg py-1 px-2 bg-slate-200 text-gray-700"
                        placeholder="Enter your description"
                      />
                    </div>
                    <div>
                      <label htmlFor="address">Address:</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={propertyData.address}
                        onChange={handleChange}
                        className=" w-full rounded-lg py-1 px-2 bg-slate-200 text-gray-700"
                        placeholder="Enter your address"
                      />
                    </div>
                  </div>
                  {/* <div className=" invisible">-</div>
                  <div className="grid grid-cols-2 gap-4">
                    
                  </div> */}
                </div>

                <div className=" bg-gradient-to-r from-[#F0A529] to-[#E18222] px-4 py-5 rounded-md mb-8 shadow-black shadow-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div className=" mb-2">
                      <label htmlFor="garage">Garage:</label>
                      <input
                        type="text"
                        id="garage"
                        name="garage"
                        value={propertyData.garage}
                        onChange={handleChange}
                        className=" w-full rounded-lg py-1 px-2 bg-slate-200 text-gray-700"
                        placeholder="Enter garage"
                      />
                    </div>
                    <div className=" mb-2">
                      <label htmlFor="floorNumber">Floor No.:</label>
                      <input
                        type="text"
                        id="floorNumber"
                        name="floorNumber"
                        value={propertyData.floorNumber}
                        onChange={handleChange}
                        className=" w-full rounded-lg py-1 px-2 bg-slate-200 text-gray-700"
                        placeholder="Enter you apt. floor no."
                      />
                    </div>
                  </div>
                  {/* <div className=" invisible">-</div> */}
                  <div className="grid grid-cols-1">
                    <div>
                      <label htmlFor="images">Images:</label>
                      <input
                        type="file"
                        id="images"
                        name="images"
                        multiple
                        onChange={handleImageChange}
                        className=" w-full rounded-lg py-1 px-2 bg-slate-200 text-gray-700"
                        placeholder="Enter your property images"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="bg-orange-700 hover:bg-orange-600 rounded-b-lg py-4 px-2 w-full text-white shadow-black shadow-xl transition-all ease-in-out duration-500"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateProperty;
