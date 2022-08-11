import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./contexts/auth-context/AuthContext";

const PrivateRoutes = () => {
  const { userToken } = useContext(AuthContext);
  return userToken ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
