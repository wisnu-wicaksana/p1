"use client";

import Link from "next/link";
import InputSearch from "./InputSearch.js"


const Navbar = () => {
  
  return (
    <nav className="bg-transparent backdrop-blur-md shadow-md fixed w-full h-16 z-10 flex items-center">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Brand / Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-900">
          Brand
        </Link>

        {/* Search Bar */}
        <div className="w-1/2 md:w-1/3">
          <InputSearch /> 
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
