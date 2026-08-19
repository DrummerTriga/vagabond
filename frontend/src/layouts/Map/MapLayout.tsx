import { Outlet } from "react-router";
import Header from "../../components/Header";

const MapLayout = () => {
  return (
    <div className="h-dvh flex flex-col bg-stone-50 overflow-hidden">
      <Header />
      <main className="flex-1 overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default MapLayout;
