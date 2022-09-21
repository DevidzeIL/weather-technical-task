import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WeatherActions from "./WeatherActions";
import { WeatherContextProvider } from "./WeatherContext";

const WeatherTable = observer(() => {
  const navigate = useNavigate();
  const token = localStorage.getItem("access");

  useEffect(() => {
    if (!token) {
      navigate("/app/login");
    }
  }, [navigate, token]);

  return (
    <WeatherContextProvider>
      <WeatherActions />
    </WeatherContextProvider>
  )
})

export default WeatherTable;
