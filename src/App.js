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

const App = observer(() => {
  return (
    <Router>
      <Container disableGutters={true} maxWidth="xl">
        <div className="App">
          <Routes>
            <Route path="/app/login" element={<Login />} />
            <Route path="/app/weather" element={<WeatherTable />} />

            <Route path="*" element={<Navigate to="/app/login" />} />
          </Routes>
        </div>
      </Container>
    </Router>
  );
});

export default App;
