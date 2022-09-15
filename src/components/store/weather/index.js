import { makeAutoObservable } from "mobx";
import WeatherDataStore from "./WeatherDataStore";

class WeatherStore {
  constructor(
    weatherDataStore = new WeatherDataStore()
  ) {
    makeAutoObservable(this);
    this.weatherDataStore = weatherDataStore;
  }



  async fetchWeather() {
    return this.weatherDataStore.fetchWeather();
  }

  get weatherData() {
    return this.weatherDataStore.weatherData;
  }


  get isLoading() {
    return this.weatherDataStore.isLoading;
  }


  updateSearchInputValue(value) {
    return this.weatherDataStore.updateSearchInputValue(value);
  }

  get searchInputValue() {
    return this.weatherDataStore.searchInputValue;
  }

}

export default WeatherStore;
