import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-red-500 to-pink-500 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-shrink-0 text-white">
            <svg
              className="fill-current h-8 w-8 mr-4"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
              />
            </svg>
            <span className="font-semibold text-3xl tracking-tight">
              {props.navTitle || "Logo"}
            </span>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-right lg:w-auto">
            <div>
              <a
                href="#"
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-pink-500 hover:bg-white mt-4 lg:mt-0"
                onClick={openForm}
              >
                Form
              </a>
            </div>
          </div>
        </div>
      </nav>
      {isFormOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Amazing Form</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="block w-full mt-1 border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full mt-1 border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="block w-full mt-1 border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                />
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="inline-block px-6 py-2 text-base font-medium text-white bg-pink-600 border border-transparent rounded-md shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                  onClick={closeForm}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

Navbar.propTypes = {
  navTitle: PropTypes.string,
  Home: PropTypes.string,
};
