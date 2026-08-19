import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <>
      <div className="hidden sm:flex group justify-start items-center w-full max-w-xs md:max-w-sm lg:w-1/3 border rounded-2xl border-stone-300 bg-stone-100 hover:bg-stone-50 focus-within:bg-white focus-within:ring-2 focus-within:ring-[#F05A42]/20 focus-within:border-[#F05A42] transition-all duration-300 shadow-sm">
        <Search
          className="text-stone-400 group-focus-within:text-[#F05A42] mx-3 transition-colors duration-300 shrink-0"
          size={20}
        />
        <input
          className="pr-6 py-2.5 flex-1 min-w-0 bg-transparent outline-none text-stone-700 placeholder-stone-400"
          placeholder="Search for trips, friends, or whatever"
        />
      </div>
    </>
  );
};

export default SearchBar;
