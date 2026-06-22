import { Outlet } from "react-router";
import Header from "../../components/Header";

const MessagesLayout = () => {
  return (
    <div className="flex flex-col h-dvh w-dvw bg-stone-50 overflow-hidden">
      <Header />
      <div className="flex flex-1 w-full overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default MessagesLayout;
