import { Outlet } from "react-router";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
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
} from "lucide-react";

const FeedLayout = () => {
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
      <div className="flex flex-col min-h-dvh min-w-dvw bg-stone-50">
        <Header />
        <div className="flex flex-1 justify-around w-full">
          <Sidebar sidebarContent={sidebarContent} />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default FeedLayout;
