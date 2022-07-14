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
  return (
    <div className="sidebar_container">
      <div className="sidebar_contents">
        {navLinks.map(({ name, linkUrl, index, icon }) => (
          <NavLink
            to={linkUrl}
            key={index}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {icon} {name}
          </NavLink>
        ))}
        <div className="sidebar_logout">
          <p>LogOut</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
