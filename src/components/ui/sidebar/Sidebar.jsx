import "./style.scss";
import { NavLink } from "react-router-dom";
import {
  DASHBOARD_PAGE,
  PROFILE_PAGE,
  UPLOAD_PAGE,
  NOTIFICATION_PAGE,
} from "../../../routes";
import { MdDashboard, MdFolder, MdNotifications } from "react-icons/md";
import { ImUser } from "react-icons/im";
import { useState } from "react";
import { message } from "antd";

const navLinks = [
  {
    name: "Dashboard",
    linkUrl: DASHBOARD_PAGE,
    icon: <MdDashboard />,
  },
  {
    name: "Upload",
    linkUrl: UPLOAD_PAGE,
    icon: <MdFolder />,
  },
  {
    name: "Notification",
    linkUrl: NOTIFICATION_PAGE,
    icon: <MdNotifications />,
  },
  {
    name: "Profile",
    linkUrl: PROFILE_PAGE,
    icon: <ImUser />,
  },
];

const Sidebar = () => {
  const activeStyle = {
    color: "#699334",
    background: "#f6f6f6",
    borderRadius: "12px",
  };
  const [loading, setLoading] = useState(false);

  const removeToken = () => {
    setLoading(true);
    const emptyLS = localStorage.removeItem("userToken");
    if (!emptyLS) {
      message.success("Logout success!");
      setLoading(false);
      window.location.replace("/");
    } else {
      message.error("Logout failed!");
      setLoading(false);
      return;
    }
  };
  return (
    <div className="sidebar_container">
      <div className="sidebar_contents">
        {navLinks.map(({ name, linkUrl, icon }, index) => (
          <NavLink
            to={linkUrl}
            key={name}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {icon} {name}
          </NavLink>
        ))}
        <div className="sidebar_logout">
          {!loading && (
            <p onClick={removeToken} style={{ cursor: "pointer" }}>
              LogOut
            </p>
          )}
          {loading && <p>Logging Out...</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
