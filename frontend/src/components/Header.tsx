import SearchBar from "./SearchBar";
import logoTerra from "../assets/logo_coral.png";
import UserStatusCorner from "./UserStatusCorner";

const Header = () => {
  return (
    <>
      <div className="flex  justify-between items-center w-full h-25 px-6 border-b border-stone-400/30">
        <div className="flex justify-center items-center gap-2">
          <img src={logoTerra} alt="logo" className="h-15" />
          <h1 className="font-montserrat font-bold text-shadow-neutral-800 text-xl tracking-widest">
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
