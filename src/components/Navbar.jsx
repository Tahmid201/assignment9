import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-4 py-3">
 
      <div className="navbar-start">
       
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[100px] p-2 shadow bg-base-100 rounded-box w-56 text-lg"
          >
            <li><a>Item 1</a></li>
            <li>
              <a>Parent</a>
              <ul className="p-2 text-base">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>

        <a className="btn btn-ghost text-2xl font-extrabold tracking-wide">
          WarmPaws
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-medium">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/services'>Services</Link></li>
          <li><Link to='/'>My Profile</Link></li>
        </ul>
      </div>

      <div className="navbar-end">
        <Link to='/login' className="btn btn-primary btn-md text-lg">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
