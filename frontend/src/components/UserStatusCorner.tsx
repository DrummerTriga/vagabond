import { Bell, MessageCircleIcon, Plus } from "lucide-react";
import userIcon from "../assets/userIcon.png";
import Button from "../elements/Button";

const UserStatusCorner = () => {
  return (
    <>
      <div className="flex justify-around items-center w-1/4 ">
        <Button icon={<Plus />} children="Create new Trip" />
        <Bell />
        <MessageCircleIcon />
        <img
          src={userIcon}
          className="w-14 h-14 p-1 rounded-full color-red-500 bg-white border border-stone-400 opacity-70 hover:bg-stone-100"
          alt="User Avatar"
        />
      </div>
    </>
  );
};

export default UserStatusCorner;
