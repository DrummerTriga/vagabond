import { Outlet } from "react-router";
import Header from "../../components/Header";

const UserProfileLayout = () => {
  return (
    <div className="flex flex-col min-h-dvh min-w-dvw bg-stone-50 overflow-x-hidden">
      <Header />
      <div className="flex flex-col items-center w-full pb-20 pt-8 px-4">
        <Outlet />
      </div>
    </div>
  );
};

export default UserProfileLayout;
