import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardCSS from "./Dashboard.module.scss";

const Dashboard = ({ openMenu, setOpenMenu, setIsLoggedIn }) => {
  return (
    <div className={DashboardCSS.dashboard}>
      <div className={DashboardCSS.inDashboard}>
        <div className="dSidebar">
          <Sidebar openMenu={openMenu} setOpenMenu={setOpenMenu} setIsLoggedIn={setIsLoggedIn} />
        </div>

        <div className={DashboardCSS.dContent}>
            <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
