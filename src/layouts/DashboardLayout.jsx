import { Outlet } from "react-router-dom";
import Sidebar from "../components/ui/sidebar/Sidebar";
import TopNavigation from "../components/ui/top-navigation/TopNavigation";
import "./style.scss";

const DashboardLayout = () => {
  return (
    <div className="dashboard_container">
      <div className="side_nav">
        <Sidebar />
      </div>
      <div className="side_body">
        <div className="side_body_container">
          <TopNavigation />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
