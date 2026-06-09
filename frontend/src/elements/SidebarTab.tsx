const SidebarTab = ({ tabName }) => {
  return (
    <>
      <div className="flex justify-center items-center p-2.5 px-8 rounded-2xl bg-white border border-stone-200 shadow-sm text-stone-600 font-medium hover:text-[#F05A42] hover:border-[#F05A42]/50 hover:shadow-md hover:bg-stone-50 cursor-pointer active:scale-95 transition-all duration-300">
        {tabName}
      </div>
    </>
  );
};

export default SidebarTab;
