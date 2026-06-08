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
      <div className="flex flex-col items-center w-[15%] border border-red-600">
        <div>
          {sidebarContent.map((tab) => (
            <SidebarTab tabName={tab} />
          ))}{" "}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
