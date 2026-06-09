import {
  Home,
  Compass,
  Users,
  Bookmark,
  TrendingUp,
  CalendarDays,
  Image as ImageIcon,
  Map,
  Eye,
  Settings,
} from "lucide-react";
import SidebarTab from "../elements/SidebarTab";

const Sidebar = () => {
  const sidebarContent = [
    { name: "Home", icon: <Home size={22} strokeWidth={2.5} /> },
    { name: "Discover", icon: <Compass size={22} strokeWidth={2} /> },
    { name: "Friends", icon: <Users size={22} strokeWidth={2} /> },
    { name: "Saved Trips", icon: <Bookmark size={22} strokeWidth={2} /> },
    { name: "Trending", icon: <TrendingUp size={22} strokeWidth={2} /> },
    { name: "My Calendar", icon: <CalendarDays size={22} strokeWidth={2} /> },
    { name: "Gallery", icon: <ImageIcon size={22} strokeWidth={2} /> },
    { name: "World Map", icon: <Map size={22} strokeWidth={2} /> },
    { name: "Sneak on Friends", icon: <Eye size={22} strokeWidth={2} /> },
  ];

  return (
    <>
      <div className="flex flex-col items-center w-[15%] border-r border-stone-400/30 px-2">
        <div className="flex flex-col gap-1 mt-5 w-full">
          {sidebarContent.map((tab) => (
            <SidebarTab
              key={tab.name}
              tabName={tab.name}
              icon={tab.icon}
              isActive={tab.name === "Home"}
            />
          ))}
        </div>

        <div className="w-full h-px bg-stone-200 my-6"></div>

        <div className="w-full">
          <SidebarTab
            tabName="Settings"
            icon={<Settings size={22} strokeWidth={2} />}
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
