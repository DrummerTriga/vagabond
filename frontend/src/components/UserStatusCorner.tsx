import { Bell, MessageCircleIcon, Plus, Globe } from "lucide-react";
import userIcon from "../assets/userIcon.png";
import Button from "../elements/Button";
import { useNavigate } from "react-router";

const UserStatusCorner = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-end items-center gap-1 sm:gap-2 md:gap-3 shrink-0">
        <Button
          icon={<Plus size={18} />}
          children="Post new Trip"
          className="py-2 sm:py-3 px-2.5 sm:px-4 [&>span:last-child]:hidden sm:[&>span:last-child]:inline"
          onClick={() => navigate("/create")}
        />
        <button className="hidden sm:inline-flex p-2.5 rounded-full text-stone-500 hover:bg-stone-200 hover:text-[#F05A42] cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F05A42]/40">
          <Bell size={22} />
        </button>
        <button
          className="p-2 sm:p-2.5 rounded-full text-stone-500 hover:bg-stone-200 hover:text-[#F05A42] cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F05A42]/40"
          onClick={() => navigate("/map")}
        >
          <Globe size={22} />
        </button>
        <button
          className="p-2 sm:p-2.5 rounded-full text-stone-500 hover:bg-stone-200 hover:text-[#F05A42] cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F05A42]/40"
          onClick={() => navigate("/messages")}
        >
          <MessageCircleIcon size={22} />
        </button>
        <img
          src={userIcon}
          className="w-9 h-9 sm:w-12 sm:h-12 p-0.5 rounded-full bg-white border-2 border-stone-300 hover:border-[#F05A42] hover:shadow-md cursor-pointer transition-all duration-300 shadow-sm object-cover shrink-0"
          alt="User Avatar"
          onClick={() => navigate("profile/me/")}
        />
      </div>
    </>
  );
};

export default UserStatusCorner;
