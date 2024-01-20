// Navbar.jsx

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center py-4 bg-gray-800 text-white">
      <Link to="/" className="text-xl font-semibold">
        Home
      </Link>
    </nav>
  );
};

export default Navbar;
