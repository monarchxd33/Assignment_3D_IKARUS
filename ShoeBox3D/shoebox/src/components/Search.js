import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="flex items-center border border-gray-300 rounded-lg p-3 w-full max-w-2xl mx-auto">
      <input
        type="text"
        className="w-full p-3 outline-none text-lg"
        placeholder="Search for models..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-5 py-3 rounded-lg text-lg">
        🔍
      </button>
    </div>
  );
};

export default SearchBar;
