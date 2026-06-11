import SearchBar from "./SearchBar";
import logoTerra from "../assets/logo_coral.png";
import UserStatusCorner from "./UserStatusCorner";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center w-full h-25 px-6 border-b border-stone-400/30 sticky top-0 z-50 bg-stone-50/80 backdrop-blur-md">
        <div className="group flex justify-center items-center gap-2 cursor-pointer active:scale-95 transition-all duration-300">
          <img
            src={logoTerra}
            alt="logo"
            className="h-15 group-hover:drop-shadow-md transition-all duration-300"
          />
          <h1 className="font-montserrat font-bold text-shadow-neutral-800 text-xl tracking-widest text-stone-800 group-hover:text-[#F05A42] transition-colors duration-300">
            Vagabond
          </h1>
        </div>
        <SearchBar />
        <UserStatusCorner />
      </div>
    </>
  );
};

export default Header;
