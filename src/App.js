import "./App.scss";
import { Routes, Route } from "react-router-dom";
import {
  Signin,
  DashboardPage,
  ProfilePage,
  UploadPage,
  DestinationPage,
  NotificationPage,
} from "./pages";
import {
  SIGNIN,
  DASHBOARD_PAGE,
  PROFILE_PAGE,
  UPLOAD_PAGE,
  DESTINATION_PAGE,
  NOTIFICATION_PAGE,
} from "./routes";
import DashboardLayout from "./layouts/DashboardLayout";
import PrivateRoutes from "./PrivateRoutes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={SIGNIN} element={<Signin />} />
        <Route element={<PrivateRoutes />}>
          <Route element={<DashboardLayout />}>
            <Route path={DASHBOARD_PAGE} element={<DashboardPage />} />
            <Route path={PROFILE_PAGE} element={<ProfilePage />} />
            <Route path={UPLOAD_PAGE} element={<UploadPage />} />
            <Route path={DESTINATION_PAGE} element={<DestinationPage />} />
            <Route path={NOTIFICATION_PAGE} element={<NotificationPage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
