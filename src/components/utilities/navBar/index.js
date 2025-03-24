"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [search, setSearch] = useState("");

  return (
    <nav className="bg-transparent backdrop-blur-md shadow-md fixed w-full h-16 z-10 flex items-center">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Brand / Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-900">
          Brand
        </Link>

        {/* Search Bar */}
        <div className="w-1/2 md:w-1/3">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
