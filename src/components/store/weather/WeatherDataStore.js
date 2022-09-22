import { makeAutoObservable } from "mobx";
import HttpRequestStore from "../httpRequestStore";
import { httpRequest } from "../storeRequest";

class WeatherDataStore {
  constructor() {
    makeAutoObservable(this);
  }

  httpRequestStore = new HttpRequestStore();

  weatherData = [];
  searchInputValue = "";
  isLoading = false;

  updateWeatherData = (weatherData = []) => {
    this.weatherData = weatherData;
  };

  async fetchWeather() {
    return this.httpRequestStore.executeRequest(async () => {
      this.isLoading = true;
      const searchValue = this.searchInputValue.trim().replace(/\s{2,}/g, " ");
      try {
        const response = await httpRequest(
          `/getcurrentweather?city=${searchValue}`,
          "GET",
          {}
        );
        this.isLoading = false;
        this.updateWeatherData(response.data);
      } catch (err) {
        this.updateWeatherData([]);
      }
      return this.weatherData;
    });
  }

  updateSearchInputValue(value) {
    this.searchInputValue = value;
  }

}
export default WeatherDataStore;
