const SidebarTab = ({ tabName }) => {
  return (
    <>
      <div className="flex justify-center items-center bg-orange-300 border w-60 h-10 rounded-md">
        {tabName}
      </div>
    </>
  );
};

export default SidebarTab;
