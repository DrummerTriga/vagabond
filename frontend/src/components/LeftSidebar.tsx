import { Settings } from "lucide-react";
import SidebarTab from "../elements/SidebarTab";
import { useNavigate } from "react-router";

const LeftSidebar = ({ sidebarContent, className = "", ...props }) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`hidden md:flex flex-col items-center w-16 lg:w-1/5 shrink-0 border-x border-stone-400/30 px-1 lg:px-2 sticky top-20 sm:top-25 h-[calc(100vh-80px)] sm:h-[calc(100vh-100px)] overflow-y-auto ${className}`}
        {...props}
      >
        <div className="flex flex-col gap-1 mt-5 w-full">
          {sidebarContent.map((tab) => (
            <SidebarTab
              key={tab.name}
              tabName={tab.name}
              icon={tab.icon}
              isActive={tab.name === "Home"}
              onClick={() => navigate(`/${tab.name}`)}
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
