import { Settings } from "lucide-react";
import SidebarTab from "../elements/SidebarTab";
import { useLocation, useNavigate } from "react-router";
import type { ReactNode } from "react";

export interface SidebarItem {
  name: string;
  icon: ReactNode;
  path: string;
}

interface LeftSidebarProps {
  sidebarContent: SidebarItem[];
  className?: string;
}

const LeftSidebar = ({ sidebarContent, className = "" }: LeftSidebarProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      <div
        className={`hidden md:flex flex-col items-center w-16 lg:w-1/5 shrink-0 border-x border-stone-400/30 px-1 lg:px-2 sticky top-20 sm:top-25 h-[calc(100vh-80px)] sm:h-[calc(100vh-100px)] overflow-y-auto no-scrollbar ${className}`}
      >
        <div className="flex flex-col gap-1 mt-5 w-full">
          {sidebarContent.map((tab) => (
            <SidebarTab
              key={tab.name}
              tabName={tab.name}
              icon={tab.icon}
              isActive={pathname === tab.path}
              onClick={() => navigate(tab.path)}
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

export default LeftSidebar;
