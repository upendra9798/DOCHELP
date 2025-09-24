import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (path) => {
    if (location.pathname === path && path === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(path);
    }
    setIsMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-gradient-to-r from-lime-50 via-green-50 to-emerald-50 backdrop-blur-md shadow-lg fixed top-0 left-0 w-full z-50 border-b border-green-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between mr-50 ">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("/")}
          className="flex items-center gap-3 text-xl font-bold text-gray-800 hover:text-emerald-600 transition-all duration-300 transform hover:scale-105 group"
        >
          <div className="relative">
            <div className="text-3xl text-emerald-500 group-hover:rotate-12 transition-transform duration-300">🌸</div>
            <div className="absolute inset-0 bg-emerald-200 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>
          <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
            DOCHELP
          </span>
        </button>

        {/* Navigation Links */}
        <nav className={`flex flex-col md:flex-row gap-2 md:gap-8 font-medium text-gray-700 items-center absolute md:static top-20 left-0 w-full md:w-auto bg-white/95 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none rounded-b-2xl md:rounded-none px-6 py-6 md:p-0 z-40 shadow-xl md:shadow-none border-t border-green-100 md:border-none transition-all duration-500 ease-out ${
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 md:translate-y-0 md:opacity-100"
        }`}>
          {/* Home */}
          <button
            onClick={() => handleNavClick("/")}
            className={`relative px-4 py-2 rounded-full transition-all duration-300 hover:text-emerald-600 hover:bg-emerald-50 ${
              isActive("/") ? "text-emerald-600 bg-emerald-50 font-semibold shadow-sm" : "hover:shadow-sm"
            }`}
          >
            Home
            {isActive("/") && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-emerald-500 rounded-full"></div>
            )}
          </button>

          {/* Welcome */}
          <button
            onClick={() => handleNavClick("/")}
            className={`relative px-4 py-2 rounded-full transition-all duration-300 hover:text-emerald-600 hover:bg-emerald-50 ${
              isActive("/") ? "text-emerald-600 bg-emerald-50 font-semibold shadow-sm" : "hover:shadow-sm"
            }`}
          >
            Welcome
            {isActive("/") && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-emerald-500 rounded-full"></div>
            )}
          </button>

          {/* Analysis */}
          <button
            onClick={() => handleNavClick("/analysis")}
            className={`relative px-4 py-2 rounded-full transition-all duration-300 hover:text-emerald-600 hover:bg-emerald-50 ${
              isActive("/analysis") ? "text-emerald-600 bg-emerald-50 font-semibold shadow-sm" : "hover:shadow-sm"
            }`}
          >
            Analysis
            {isActive("/analysis") && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-emerald-500 rounded-full"></div>
            )}
          </button>

          {/* Join Us */}
          <button
            onClick={() => handleNavClick("/join")}
            className="relative overflow-hidden bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-emerald-700 hover:to-green-700 group"
          >
            <span className="relative z-10">Join Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </nav>

        {/* Right Side Icons */}
        {/* Right Side Icons */}
<div className="flex items-center space-x-4">
  {localStorage.getItem("user") && (
    <button
      onClick={() => {
        localStorage.removeItem("user");
        navigate("/");
      }}
      className="px-4 py-2 rounded-full bg-red-500 text-white font-medium hover:bg-red-600 transition duration-300"
    >
      Logout
    </button>
  )}
</div>

       
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
