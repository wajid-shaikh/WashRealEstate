import React, { useState } from "react";
import Navbar from "./Navbar";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <>
      <Navbar />
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className="max-w-md">
          <label className="block mb-2" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="w-full p-2 border border-gray-300 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="block mt-4 mb-2" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="block mt-4 mb-2" htmlFor="message">
            Message:
          </label>
          <textarea
            id="message"
            className="w-full p-2 border border-gray-300 rounded"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default ContactUs;
