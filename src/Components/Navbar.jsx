import { useState, useRef, useEffect } from "react";
import {
  Bars3Icon,
  HeartIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProfileOpen(false);
      }
    }
    function handleEsc(e) {
      if (e.key === "Escape") setProfileOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const navLinks = ["Home", "Contact", "About", "Sign Up"];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide text-gray-800">
          Mocco <span className="text-red-600">Mart</span>
        </h1>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <Bars3Icon className="w-8 h-8" />
        </button>

        {/* Links */}
      <ul
  className={`
    absolute md:static top-full left-0 w-full md:w-auto 
    bg-white md:bg-transparent shadow md:shadow-none 

    md:flex md:flex-wrap md:items-center 
    md:gap-6 lg:gap-8   /* gap changes by screen size */
    md:justify-center

    transition-all duration-300
    ${mobileOpen ? "block" : "hidden"}
  `}
>
  {navLinks.map((link) => (
    <li key={link} className="md:whitespace-nowrap">
      <a
        href="#"
        className="block px-4 py-3 md:px-0 md:py-0 
        text-gray-700 hover:text-red-600 font-medium
        transition-all duration-200"
      >
        {link}
      </a>
    </li>
  ))}
</ul>


        {/* Right Icons */}
        <div className="flex items-center gap-4">

          {/* Search */}
          <div className="hidden md:flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-2 outline-none text-sm"
            />
            <MagnifyingGlassIcon className="w-5 h-5 mx-3 text-gray-600" />
          </div>

          {/* Wishlist */}
          <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-red-100 flex items-center justify-center transition">
            <HeartIcon className="w-6 h-6 text-gray-700" />
          </button>

          {/* Cart */}
          <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-red-100 flex items-center justify-center transition">
            <ShoppingCartIcon className="w-6 h-6 text-gray-700" />
          </button>

          {/* Profile */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="w-10 h-10 rounded-full bg-red-100 hover:bg-red-200 flex items-center justify-center transition"
            >
              <UserIcon className="w-6 h-6 text-red-600" />
            </button>

            {/* Dropdown */}
            {profileOpen && (
              <div className="absolute right-0 mt-3 w-56 bg-[#A09BA1] shadow-lg rounded-lg border z-50">
                <ul className="flex flex-col py-2">
                  <li>
                    <a className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      Manage My Account
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      My Orders
                    </a>
                  </li>
                  <li>
                    <a className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">
                      My Reviews
                    </a>
                  </li>
                  <hr className="my-2" />
                  <li>
                    <button className="w-full text-left px-4 py-2 text-red-600 font-semibold hover:bg-gray-100">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
