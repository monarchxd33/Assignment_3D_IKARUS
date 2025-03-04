import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">ShoeBox</h1>

       
        {/* Search Bar */}
        <div className="flex border border-gray-300 rounded-lg overflow-hidden w-72">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 w-full outline-none"
          />
          <button className="bg-blue-500 text-white px-4">🔍</button>
        </div>

      </div>
    </header>
  );
};

export default Header;
