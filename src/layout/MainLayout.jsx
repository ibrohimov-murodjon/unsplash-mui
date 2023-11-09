import { Outlet } from "react-router-dom";
import PrimarySearchAppBar from "../components/Navbar";

function MainLayout() {
  return (
    <div>
      <PrimarySearchAppBar />
      <Outlet />
    </div>
  );
}

export default MainLayout;
