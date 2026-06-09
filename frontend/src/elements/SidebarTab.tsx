const SidebarTab = ({ tabName, icon, isActive = false }) => {
  return (
    <>
      <div
        className={`group flex items-center gap-4 w-full p-3 pl-6 rounded-2xl font-medium cursor-pointer transition-all duration-300 active:scale-95 ${
          isActive
            ? "bg-[#FEF1EE] text-[#F05A42]"
            : "text-stone-700 bg-transparent hover:bg-stone-100"
        }`}
      >
        <div
          className={`transition-colors duration-300 ${
            isActive
              ? "text-[#F05A42]"
              : "text-stone-600 group-hover:text-stone-800"
          }`}
        >
          {icon}
        </div>
        <span className="text-md tracking-wide">{tabName}</span>
      </div>
    </>
  );
};

export default SidebarTab;
