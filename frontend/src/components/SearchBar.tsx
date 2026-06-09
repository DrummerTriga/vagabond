import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <>
      <div className="flex justify-start items-center w-1/3 border rounded-2xl border-stone-300 bg-stone-100">
        <Search className="text-gray-400 mx-3" />
        <input
          className="pr-6 py-2 flex-1"
          placeholder="search for trips, friends, or whatever"
        />
      </div>
    </>
  );
};

export default SearchBar;
