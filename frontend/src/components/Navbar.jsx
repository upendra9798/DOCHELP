import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { GiTwirlyFlower } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#efffbe] shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-bold text-gray-900 hover:text-red-500 transition-transform duration-200 transform hover:scale-105"
        >
          <GiTwirlyFlower className="text-2xl" />
          DOCHELP
        </Link>

        {/* Nav Links */}
        <nav
          className={`flex flex-col md:flex-row gap-4 md:gap-6 font-medium text-gray-700 items-center absolute md:static top-16 left-0 w-full md:w-auto bg-[#efffbe] md:bg-transparent px-4 py-2 md:p-0 z-40 transition-all duration-300 ${
            isMenuOpen ? "block" : "hidden md:flex"
          }`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-red-500 transition-colors ${isActive ? "font-bold" : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/welcome"
            className={({ isActive }) =>
              `hover:text-red-500 transition-colors ${isActive ? "font-bold" : ""}`
            }
          >
            Welcome
          </NavLink>
          <NavLink
            to="/more"
            className={({ isActive }) =>
              `hover:text-red-500 transition-colors ${isActive ? "font-bold" : ""}`
            }
          >
            More
          </NavLink>
          <NavLink
            to="/join"
            className="text-sm px-3 py-1 rounded bg-black text-white hover:bg-gray-800 transition-colors"
          >
            Join Us
          </NavLink>
        </nav>

        {/* Right Side: Cart + Hamburger */}
        <div className="flex items-center gap-4">
          <FaShoppingCart className="text-gray-700 cursor-pointer text-lg" />
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="text-2xl">{isMenuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
