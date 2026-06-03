import { Outlet } from "react-router";
import Sidebar from "../../components/Sidebar";

const FeedLayout = () => {
  return (
    <>
      <div className="flex justify-around min-h-dvh min-w-dvw bg-slate-50">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default FeedLayout;
