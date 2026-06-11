import { Settings } from "lucide-react";
import SidebarTab from "../elements/SidebarTab";

const Sidebar = ({ sidebarContent, className = "", ...props }) => {
  return (
    <>
      <div
        className={`flex flex-col items-center w-1/5 border-x border-stone-400/30 px-2 sticky top-25 h-[calc(100vh-100px)] overflow-y-auto ${className}`}
        {...props}
      >
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
