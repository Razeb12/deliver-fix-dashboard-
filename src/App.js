import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Signin } from "./pages";
import { SIGNIN } from "./routes";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={SIGNIN} element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
