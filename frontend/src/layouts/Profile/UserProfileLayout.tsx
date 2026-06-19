import { Outlet } from "react-router";
import Header from "../../components/Header";

const UserProfileLayout = () => {
  return (
    <div className="flex flex-col min-h-dvh min-w-dvw bg-stone-50">
      <Header />
      <div className="flex flex-col items-center w-full pb-20">
        <Outlet />
      </div>
    </div>
  );
};

export default UserProfileLayout;
