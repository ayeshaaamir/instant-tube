import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-60 bg-white border-r border-gray-200">
        <Sidebar />
      </div>

      <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
