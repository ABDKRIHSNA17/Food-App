import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiBarStool } from "react-icons/gi";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { BiCart } from "react-icons/bi";
import { ImUserCheck } from "react-icons/im";
import { useSelector } from "react-redux";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  
  const currentUser = false;
  return (
    <header className="max-w-screen mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <GiBarStool className=" size-6" />
          </Link>
          <div className="relative sm:w-72 w-40 space-x-2">
            <IoSearchSharp className="absolute inline-block left-4 top-2 " />
            <input
              type="text"
              placeholder="Search..."
              className="bg-[#c7c1c1] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none "
            />
          </div>
        </div>
        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div className="">
            {currentUser ? (
              <>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <ImUserCheck
                    className={`size-6 ${
                      currentUser ? "  ring-4 rounded-lg ring-green-500" : ""
                    }`}
                  />
                </button>
                {isDropdownOpen && (
                  <div className=" absolute right-0 mt-2 w-28 md:w-48 bg-white shadow-lg rounded-md z-40">
                    <ul className="py-2">
                      {navigation.map((item, i) => (
                        <li key={i} onClick={() => setIsDropdownOpen(false)}>
                          <Link
                            to={item.href}
                            className="block px-4 py-2 text-sm hover:bg-gray-500"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <FaRegCircleUser className="size-6" />
                <span className="text-sm font-semibold">Login</span>
              </Link>
            )}
          </div>
          <button className="hidden sm:block">
            <FaRegHeart className=" size-6" />
          </button>
          <Link
            to="/cart"
            className="bg-yellow-600 p-1 sm:px-6 px-2 flex items-center rounded-md"
          >
            <BiCart className="" />
            {cartItems.length > 0 ? (
              <span className="text-sm font-semibold sm:ml-1">
                {cartItems.length}
              </span>
            ) : (
              <span className="text-sm font-semibold sm:ml-1">0</span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;


