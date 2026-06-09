const SidebarTab = ({ tabName }) => {
  return (
    <>
      <div className="flex justify-center items-center p-2 px-8 rounded-xl bg-stone-200 border border-stone-300 text-stone-700 font-medium hover:bg-stone-300 cursor-pointer transition-colors">
        {tabName}
      </div>
    </>
  );
};

export default SidebarTab;
