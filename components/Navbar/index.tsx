import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <nav className="p-4 w-5/6 m-auto">
      <div className="flex justify-between items-center">
        <div className="flex items-center pl-8">
          <i className="text-2xl fas fa-campground"></i>
          <h1 className="font-serif tracking-wide font-bold text-xl pl-4">
            <span>
              Rea<span className="text-yellow ">c</span>t
            </span>
          </h1>
        </div>

        {/* <!-- NAVIGATION - LARGE SCREENS --> */}
        <div className="hidden md:flex">
          <ul className="hidden md:flex">
            <li className="text-lg pr-8 ">
              <a
                href=""
                className="transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
                // style="text-underline-offset: 8px;"
              >
                About us
              </a>
            </li>
            <li className="text-lg pr-8">
              <a
                href=""
                className="transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
                // style="text-underline-offset: 8px;"
              >
                What We do
              </a>
            </li>
            <li className="text-lg pr-8">
              <a
                href=""
                className="transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
                // style="text-underline-offset: 8px;"
              >
                Our work
              </a>
            </li>
            <li className="text-lg pr-8">
              <a
                href=""
                className="transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
                // style="text-underline-offset: 8px;"
              >
                Blog
              </a>
            </li>
            <li className="text-lg pr-8">
              <a
                href=""
                className="transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
                // style="text-underline-offset: 8px;"
              >
                Say hi
              </a>
            </li>
          </ul>
        </div>

        {/* <div className="md:flex">
          <a href="#">
            <i className="fab fa-facebook text-2xl pr-8 transition duration-300 focus:text-yellow-500 hover:text-yellow-500"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin text-2xl pr-8 transition duration-300 focus:text-yellow-500 hover:text-yellow-500"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram text-2xl pr-8 transition duration-300 focus:text-yellow-500 hover:text-yellow-500"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter text-2xl pr-8 transition duration-300 focus:text-yellow-500 hover:text-yellow-500"></i>
          </a>
        </div> */}

        {/* <!-- MOBILE NAV ICON --> */}
        <div className="">
          <button
            aria-label="navigation"
            type="button"
            onClick={() => setShow(!show)}
            // className="bg-gray-800 text-gray-200 transition duration-300 focus:outline-none focus:text-white hover:text-white"
          >
            <span className="bg-transparent">
              <FaBars />
            </span>{" "}
          </button>
        </div>
      </div>

      {/* <!-- MOBILE MENU --> */}
      {show && (
        <div
          id="mobileMenu"
          className="= lg:hidden flex w-full mx-auto py-8 text-center"
        >
          <div className="flex flex-col justify-center items-center w-full">
            <a
              href="#"
              className="block cursor-pointer py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
              // style="text-underline-offset: 8px;"
            >
              Home
            </a>
            <a
              href="#"
              className="block cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
              // style="text-underline-offset: 8px;"
            >
              About
            </a>
            <a
              href="#"
              className="block cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
              // style="text-underline-offset: 8px;"
            >
              Blog
            </a>
            <a
              href="#"
              className="block cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500"
              // style="text-underline-offset: 8px;"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
