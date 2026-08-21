import { Outlet } from "react-router";
import LeftSidebar from "../../components/LeftSidebar";
import type { SidebarItem } from "../../components/LeftSidebar";
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
  const sidebarContent: SidebarItem[] = [
    { name: "Home", icon: <Home size={22} strokeWidth={2.5} />, path: "/" },
    {
      name: "Discover",
      icon: <Compass size={22} strokeWidth={2} />,
      path: "/discover",
    },
    {
      name: "Friends",
      icon: <Users size={22} strokeWidth={2} />,
      path: "/friends",
    },
    {
      name: "Saved Trips",
      icon: <Bookmark size={22} strokeWidth={2} />,
      path: "/saved-trips",
    },
    {
      name: "Trending",
      icon: <TrendingUp size={22} strokeWidth={2} />,
      path: "/trending",
    },
    {
      name: "My Calendar",
      icon: <CalendarDays size={22} strokeWidth={2} />,
      path: "/calendar",
    },
    {
      name: "Gallery",
      icon: <ImageIcon size={22} strokeWidth={2} />,
      path: "/gallery",
    },
    {
      name: "World Map",
      icon: <Map size={22} strokeWidth={2} />,
      path: "/map",
    },
    {
      name: "Sneak on Friends",
      icon: <Eye size={22} strokeWidth={2} />,
      path: "/sneak",
    },
  ];

  return (
    <>
      <div className="flex flex-col min-h-dvh w-full bg-stone-50">
        <Header />
        <div className="flex flex-1 justify-center md:justify-around w-full">
          <LeftSidebar sidebarContent={sidebarContent} />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default FeedLayout;
