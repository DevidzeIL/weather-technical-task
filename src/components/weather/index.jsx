import WeatherActions from "./WeatherActions";
import { WeatherContextProvider } from "./WeatherContext";

const WeatherTable = () => {
    return (
        <WeatherContextProvider>
            <WeatherActions />
        </WeatherContextProvider>
    )
}

export default WeatherTable;
