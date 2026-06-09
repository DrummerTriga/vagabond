import { Bell, MessageCircleIcon, Plus } from "lucide-react";
import userIcon from "../assets/userIcon.png";
import Button from "../elements/Button";

const UserStatusCorner = () => {
  return (
    <>
      <div className="flex justify-around items-center w-1/4 ">
        <Button icon={<Plus />} children="Create new Trip" />
        <button className="p-2.5 rounded-full text-stone-500 hover:bg-stone-200 hover:text-[#F05A42] cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F05A42]/40">
          <Bell size={22} />
        </button>
        <button className="p-2.5 rounded-full text-stone-500 hover:bg-stone-200 hover:text-[#F05A42] cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F05A42]/40">
          <MessageCircleIcon size={22} />
        </button>
        <img
          src={userIcon}
          className="w-12 h-12 p-0.5 rounded-full bg-white border-2 border-stone-300 hover:border-[#F05A42] hover:shadow-md cursor-pointer transition-all duration-300 shadow-sm object-cover"
          alt="User Avatar"
        />
      </div>
    </>
  );
};

export default UserStatusCorner;
