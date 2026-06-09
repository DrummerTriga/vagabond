import SidebarTab from "../elements/SidebarTab";

const Sidebar = () => {
  const sidebarContent = [
    "Home",
    "Discover",
    "Friends",
    "Saved Trips",
    "Trending",
    "My Calendar",
    "Gallery",
  ];

  return (
    <>
      <div className="flex flex-col items-center w-[15%] border-r border-stone-400/30">
        <div className="flex flex-col gap-4 mt-5">
          {sidebarContent.map((tab) => (
            <SidebarTab tabName={tab} />
          ))}{" "}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
