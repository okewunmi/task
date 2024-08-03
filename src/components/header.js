import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FiSearch, FiMenu } from "react-icons/fi";
import { HiHomeModern } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <Router>
      <div className="h-10 w-full flex items-center justify-between md:px-40 py-12 px-8 border-b-2 border-x-cyan-950 mb-20 ">
        <Link to="#" className="flex items-center">
          <HiHomeModern className="text-3xl" />
          <h1 className="font-extrabold text-xl text-black ">FindHom</h1>
        </Link>
        <nav className="hidden md:flex gap-6 text-lg ">
          <Link className="hover:font-medium transition">Home</Link>
          <Link className="hover:font-medium transition">About</Link>
          <Link className="hover:font-medium transition">Properties</Link>
          <Link className="hover:font-medium transition">Contanct</Link>
        </nav>
        <form className="hidden md:flex items-center ">
          <input
            type="text"
            className="border border-gray-500 transition  focus:w-56 w-50 h-2 px-2 py-4 rounded-md outline-none "
          />
          <button className="bg-black h-8 px-2 border py-4 flex items-center -ml-2 rounded-md">
            <FiSearch className="text-white" />
          </button>
        </form>
        <button
          onClick={toggleMenu}
          className="md:hidden bg-black h-8 px-2 border py-4 flex items-center -ml-2 rounded-md"
        >
          {menuOpen ? (
            <IoMdClose className="text-white" />
          ) : (
            <FiMenu className="text-white" />
          )}
        </button>

        {menuOpen && (
          <div className="fixed top-20 left-0 w-full bg-white border-t-2 border-gray-200 md:hidden">
            <nav className="flex flex-col gap-4 p-4">
              <Link to="#" className="hover:font-medium transition">
                Home
              </Link>
              <Link to="#" className="hover:font-medium transition">
                About
              </Link>
              <Link to="#" className="hover:font-medium transition">
                Properties
              </Link>
              <Link to="#" className="hover:font-medium transition">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </Router>
  );
};

export default Header;
