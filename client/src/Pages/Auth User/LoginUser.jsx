import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginUser = ({}) => {
  const API = import.meta.env.VITE_API_URL;
  const history = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API}/api/login`, {
        username,
        password,
      });
      console.log(response.data);

      const token = response.data.token;
      localStorage.setItem("token", token);
      setUsername("");
      setPassword("");
      setTimeout(() => {
        alert("Login successful");
        history("/api/properties");
      }, 1000);
    } catch (error) {
      setError("Invalid username or password");
      console.error("Login failed:", error);
    }
  };

  return (
    <>
      <div className="bg-[#05445E] grid grid-cols-1 content-center h-screen">
        <div className=" ">
          <h1 className="font-bold text-[30px] text-white mx-5 md:mx-20  lg:mx-20 xl:mx-20 text-center">
            Login a User
          </h1>
        </div>
        <form
          onSubmit={handleLogin}
          className=" mx-5 mt-5 font-semibold text-white md:w-1/3 lg:w-1/3 xl:w-1/3 md:mx-auto lg:mx-auto xl:mx-auto"
        >
          <div className=" bg-slate-300 rounded-t-lg px-5 pt-5 shadow-black shadow-xl">
            <div className=" grid grid-cols-1 ">
              <div className="bg-gradient-to-r from-[#F0A529] to-[#E18222] px-4 pt-5 rounded-md mb-5 shadow-black shadow-lg">
                <div className=" grid grid-cols-1 gap-y-4">
                  <div>
                    <label htmlFor="email">Email:</label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className=" w-full rounded-lg py-1 px-2 bg-slate-200 text-gray-700"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Password:</label>
                    <input
                      type="text"
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className=" w-full rounded-lg py-1 px-2 bg-slate-200 text-gray-700"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>
                {error ? (
                  <p className={`text-sm py-2 text-center text-white`}>
                    {error && <div>{error}</div>}
                  </p>
                ) : (
                  <p className=" text-sm invisible py-2 text-center">abc</p>
                )}
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-orange-700 hover:bg-orange-600 rounded-b-lg py-4 px-2 w-full text-white shadow-black shadow-xl transition-all ease-in-out duration-500"
          >
            Login
          </button>
        </form>

        <div className="grid grid-cols-2 gap-x-4 mx-5 pt-5 md:w-1/3 lg:w-1/3 xl:w-1/3 md:mx-auto lg:mx-auto xl:mx-auto">
          <Link to={"/api/createuser"}>
            <div className=" bg-yellow-600 py-4 px-2 w-full cursor-pointer rounded-lg text-center font-bold text-white mb-5">
              <button>Sign Up</button>
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

export default LoginUser;
