import { Outlet } from "react-router";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

const FeedLayout = () => {
  return (
    <>
      <div className="flex flex-col min-h-dvh min-w-dvw bg-slate-50">
        <Header />
        <div className="flex justify-around w-full h-full bg-slate-50">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default FeedLayout;
