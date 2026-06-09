import { Outlet } from "react-router";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

const FeedLayout = () => {
  return (
    <>
      <div className="flex flex-col min-h-dvh min-w-dvw bg-stone-50">
        <Header />
        <div className="flex flex-1 justify-around w-full">
          <Sidebar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default FeedLayout;
