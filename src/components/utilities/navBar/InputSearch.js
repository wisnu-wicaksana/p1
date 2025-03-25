'use client'; 

import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation'; 
import { useState } from "react";

const InputSearch = () => {
    const [search, setSearch] = useState(""); 
    const router = useRouter();

    const handleSearch = () => {
        if (!search.trim()) return;
        router.push(`/Search/${search}`);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault(); 
            handleSearch();
        }
    };

    return (
        <div className="relative w-full">
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown} 
                className="w-full px-4 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
                className="absolute top-1/2 right-3 -translate-y-1/2"
                onClick={handleSearch} 
            >
                <Search className="size-4 sm:size-5 md:size-5 lg:size-7" />
            </button>
        </div>
    );
};

export default InputSearch;
