import { createContext, useState, useContext } from "react";
import WeatherStore from "../store/weather";

const WeatherContext = createContext();

export const WeatherContextProvider = (props) => {
  const { children } = props;
  const [weatherStore] = useState(() => new WeatherStore());

  return (
    <WeatherContext.Provider value={weatherStore}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => {
  return useContext(WeatherContext);
};

export default WeatherContext;
