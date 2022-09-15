import { useContext } from "react";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import WeatherContext from "./WeatherContext";
import { CircularProgress } from "@material-ui/core";
import { weatherStyles } from "./weatherStyles.js";

const WeatherActions = observer(() => {
  const classes = weatherStyles();
  const weatherStore = useContext(WeatherContext);

  const weatherData = weatherStore.weatherData;
  const data = toJS(weatherData);
  const isLoading = weatherStore.isLoading;

  const inputChangeHandler = (event) =>
    weatherStore.updateSearchInputValue(event.target.value);

  const handleSubmit = async () => {
    weatherStore.fetchWeather();
  };

  return (
    <div>
      <div className={classes.block__search}>
        <input
          className={classes.input__search}
          type="text"
          value={weatherStore.searchInputValue}
          onChange={inputChangeHandler}
        />
        <button className={classes.btn__search} onClick={handleSubmit}>Search</button>
      </div>

      <label> Results for City Name: {data?.city}</label>
      <br />

      {
        isLoading ?
          <>
            <div className={classes.loading}>
              <CircularProgress color="info" className={classes.circle} />
            </div>
          </> : <></>
      }

      {
        data.city && !isLoading ?
          <>
            <div style={{ whiteSpace: "pre", border: "1px solid black" }}>
              Temperature: {data.temperature} C° <br />
              Weather condition: {data.weatherCondition.type} <br /><br />
              Wind: {data.wind.speed} km/h <br />
              Wind direction: {data.wind.direction} <br />
              Pressure: {data.weatherCondition.pressure} <br />
              Humidity: {data.weatherCondition.humidity} <br />
            </div>
          </> : <></>
      }
    </div>
  );
})

export default WeatherActions;
