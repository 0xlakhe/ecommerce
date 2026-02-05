import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { LinkIcon, Menu, Search, ShoppingCart, User, X } from "lucide-react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex items-center justify-between pt-4 text-gray-800">
      <img src={assets.logo} alt="logo" />
      <ul className="middle-side hidden text-gray-700 sm:flex text-sm gap-5">
        <NavLink
          to="/"
          className="uppercase flex flex-col items-center gap-1 w-1/2 "
        >
          Home
          <hr className="line w-1/2 h-0.5 bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/collection"
          className="uppercase flex flex-col items-center gap-1 w-1/2 "
        >
          Collection
          <hr className="line w-1/2 h-0.5 bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/about"
          className="uppercase flex flex-col items-center gap-1 w-1/2 "
        >
          About
          <hr className="line w-1/2 h-0.5 bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/contact"
          className="uppercase flex flex-col items-center gap-1 w-1/2 "
        >
          Contact
          <hr className="line w-1/2 h-0.5 bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="righ-side flex gap-4">
        <Search className="cursor-pointer" size={28} />
        <div className="group relative">
          <User className="cursor-pointer" size={28} />
          <div className="dropdown-menu absolute right-0 group-hover:block hidden gap-5 whitespace-nowrap pt-4">
            <div className="cursor-pointer hover:text-black">My Profile</div>
            <div className="cursor-pointer hover:text-black">Orders</div>
            <div className="cursor-pointer hover:text-black">Logout</div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <ShoppingCart size={28} />
          <div className="absolute  -right-1.5 -bottom-1.5 text-[12px] flex justify-center items-center bg-black rounded-xl text-white w-5 h-5">
            10
          </div>
        </Link>
        <div>
          <Menu
            onClick={() => {
              setVisible(true);
            }}
            size={28}
            className="sm:hidden cursor-pointer"
          />
        </div>
      </div>

      {/* Sidebar menu for small screenss */}
      <div
        className={`${visible ? "w-1/2" : "w-0"} flex flex-col gap-3  absolute top-0 right-0 bottom-0 overflow-hidden transition-all bg-white`}
      >
        <X
          size={28}
          onClick={() => {
            setVisible(false);
          }}
          className="cursor-pointer mt-5 ml-5"
        />
        <NavLink
          onClick={() => {
            setVisible(false);
          }}
          className="py-2 pl-6 border-b border-gray-200"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => {
            setVisible(false);
          }}
          className="py-2 pl-6 border-b border-gray-200"
          to="/collection"
        >
          Collection
        </NavLink>
        <NavLink
          onClick={() => {
            setVisible(false);
          }}
          className="py-2 pl-6 border-b border-gray-200"
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          onClick={() => {
            setVisible(false);
          }}
          className="py-2 pl-6"
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
