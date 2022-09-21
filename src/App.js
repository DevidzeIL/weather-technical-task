import "./App.css";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import { Container } from "@material-ui/core";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { observer } from "mobx-react";
import WeatherTable from "./components/weather";

const getMyToken = () => localStorage.getItem("access");

const App = observer(() => {
  console.log("app");
  const token = getMyToken();
  console.log("token:", token ? "yes" : "no");

  return (
    <Router>
      <Container disableGutters={true} maxWidth="xl">
        <div className="App">
          <Routes>
            <Route path="/app/weather" element={<WeatherTable />} />
            <Route exact path="/app/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/app/login" />} />
          </Routes>
        </div>
      </Container>
    </Router>
  );
});

export default App;
