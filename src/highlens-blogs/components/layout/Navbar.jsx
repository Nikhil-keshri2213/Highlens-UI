import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import avtar from "../../assets/icon/image.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Blogs", to: "/blogs" },
    { name: "Categories", to: "/categories" },
    { name: "About", to: "/about" }
  ];

  return (
    <nav className="bg-white/10 shadow-md fixed top-0 left-0 w-full z-50 text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Section */}
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold tracking-wide"
          >
            HighLens<span className="text-blue-500">Blog</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  ` hover:text-blue-500 transition font-medium ${
                    isActive ? "text-blue-600" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Search + Avatar (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              <FiSearch className="absolute left-2 top-2.5" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-8 pr-3 py-2 border rounded-full text-sm focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            {/* Avatar */}
            <img
              src={avtar}
              alt="User"
              className="w-10 h-10 rounded-full border shadow cursor-pointer"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-2xl text-gray-700"
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white pb-4 animate-slideDown">
            <div className="flex flex-col gap-3 px-2 pt-2">
              {navLinks.map(link => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="text-gray-700 py-2 px-3 rounded hover:bg-gray-100"
                >
                  {link.name}
                </NavLink>
              ))}

              {/* Search (Mobile) */}
              <div className="relative px-2">
                <FiSearch className="absolute left-4 top-3 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-9 pr-3 py-2 w-full border rounded-full text-sm focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>

              {/* Avatar */}
              <div className="px-2 flex items-center gap-2 mt-3">
                <img
                  src={avtar}
                  className="w-10 h-10 rounded-full border shadow"
                  alt="User"
                />
                <span className="font-medium text-gray-700">Profile</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;