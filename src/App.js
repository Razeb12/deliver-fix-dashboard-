import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Signin, DashboardPage } from "./pages";
import { SIGNIN, DASHBOARD_PAGE } from "./routes";
import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={SIGNIN} element={<Signin />} />
        <Route element={<DashboardLayout />}>
          <Route path={DASHBOARD_PAGE} element={<DashboardPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
