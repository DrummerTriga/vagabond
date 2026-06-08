import SearchBar from "./SearchBar";
import logoTerra from "../assets/logo_terra.png";
import UserStatusCorner from "./UserStatusCorner";

const Header = () => {
  return (
    <>
      <div className="flex items-center w-full border border-red-600">
        <div className="flex justify-center border-2 border-green-400 items-center gap-2">
          <img src={logoTerra} alt="logo" className="h-15" />
          <h1>Vagabond</h1>
        </div>
        <SearchBar />
        <UserStatusCorner />
      </div>
    </>
  );
};

export default Header;
