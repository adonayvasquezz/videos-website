"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const SearchBar = () => {
  const [searchParam, setSearchParam] = useState<string>("");
  const navigate = useRouter();

  const handleSearch = (): void => {
    navigate.push(`/search/${searchParam}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="bg-slate-400 w-3/4 md:w-1/3 mt-2 flex">
      <input
        className="w-full px-2 text-black"
        value={searchParam}
        onKeyDown={handleKeyDown}
        onChange={(e) => setSearchParam(e.target.value)}
        placeholder="Search videos"
        type="text"
      />
      <button
        className="bg-blue-900 hover:bg-gray-800 px-3 py-1"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};
