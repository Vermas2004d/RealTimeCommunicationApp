import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

function Layout() {
  return (
    <div className="bg-gray-950">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
