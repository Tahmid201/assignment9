import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      {/* Navbar Start */}
      <div className="navbar-start">
        
        {/* Mobile Hamburger */}
        <div className="relative lg:hidden">
          <button
            className="btn btn-ghost"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Mobile Dropdown */}
          {dropdownOpen && (
            <ul
              className="absolute left-0 mt-3 w-52 menu menu-sm bg-base-100 p-2 rounded-box shadow-lg z-[9999]"
            >
              <li>
                <Link to="/" onClick={() => setDropdownOpen(false)}>Home</Link>
              </li>

              <li>
                <Link to="/services" onClick={() => setDropdownOpen(false)}>Services</Link>
              </li>

              {user && (
                <li>
                  <Link to="/profile" onClick={() => setDropdownOpen(false)}>
                    My Profile
                  </Link>
                </li>
              )}

              {user ? (
                <li>
                  <button
                    onClick={() => {
                      logout();
                      setDropdownOpen(false);
                    }}
                    className="btn btn-ghost w-full text-left"
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <>
                  <li><Link to="/login" onClick={() => setDropdownOpen(false)}>Login</Link></li>
                  <li><Link to="/signup" onClick={() => setDropdownOpen(false)}>Register</Link></li>
                </>
              )}
            </ul>
          )}
        </div>

        {/* Logo */}
        <Link to="/" className="btn btn-ghost normal-case text-xl">PetCare</Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          {user && <li><Link to="/profile">My Profile</Link></li>}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center gap-3">
        {user ? (
          <>
            <img
              src={user.photoURL || "https://i.pravatar.cc/40"}
              className="w-10 h-10 rounded-full cursor-pointer"
              alt=""
              title={user.displayName || ""}
            />
            <button onClick={logout} className="btn btn-outline btn-sm">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-sm btn-primary">Login</Link>
            <Link to="/signup" className="btn btn-sm btn-secondary">Register</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
