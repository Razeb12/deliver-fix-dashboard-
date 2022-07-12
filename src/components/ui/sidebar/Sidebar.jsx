import "./style.scss";
import { NavLink } from "react-router-dom";
import {
  DASHBOARD_PAGE,
  PROFILE_PAGE,
  UPLOAD_PAGE,
  DESTINATION_PAGE,
  NOTIFICATION_PAGE,
} from "../../../routes";

const navLinks = [
  {
    name: "Dashboard",
    linkUrl: DASHBOARD_PAGE,
  },
  {
    name: "Upload",
    linkUrl: PROFILE_PAGE,
  },
  {
    name: "Destination",
    linkUrl: UPLOAD_PAGE,
  },
  {
    name: "Notification",
    linkUrl: DESTINATION_PAGE,
  },
  {
    name: "Profile",
    linkUrl: NOTIFICATION_PAGE,
  },
];

const Sidebar = () => {
  const activeStyle = {
    color: "#699334",
    width: "200px",
    height: "52px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: "#f6f6f6",
    borderRadius: "12px",
  };
  return (
    <div className="sidebar_container">
      <div className="sidebar_contents">
        {navLinks.map(({ name, linkUrl, index }) => (
          <NavLink
            to={linkUrl}
            key={index}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {name}
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
