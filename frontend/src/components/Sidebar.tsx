import SidebarTab from "../elements/SidebarTab";
import logoTerra from "../assets/logo_terra.png";

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
      <div className="flex flex-col items-center justify-around w-[15%] border border-red-600">
        <div className="flex justify-center items-center gap-2">
          <img src={logoTerra} alt="logo" className="h-15" />
          <h1>Vagabond</h1>
        </div>
        {sidebarContent.map((tab) => (
          <SidebarTab tabName={tab} />
        ))}{" "}
      </div>
    </>
  );
};

export default Sidebar;
