import { Fan } from "./class/Fan";
import { TemperatureDisplay } from "./class/TemperatureDisplay";
import { WeatherStation } from "./class/WeatherStation";

(function main() {
  let weatherStation = new WeatherStation();

  let tempDisplay = new TemperatureDisplay(weatherStation);
  let fan = new Fan(weatherStation);

  weatherStation.setTemperature(20);
  weatherStation.setTemperature(30);
})();
