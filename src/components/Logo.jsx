import React from "react";
import { useItems } from "./ItemContext";

const Logo = () => {
  const { sortBy, setSortBy } = useItems();

  return (
    <div className="flex items-center justify-between mb-12">
      <div className="uppercase text-4xl text-gray-700/80 font-bold tracking-wider font-serif ">
        ListiFy
      </div>

      <div className="flex items-center gap-6 my-auto">
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-3"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by input</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed</option>
        </select>
      </div>
    </div>
  );
};

export default Logo;
