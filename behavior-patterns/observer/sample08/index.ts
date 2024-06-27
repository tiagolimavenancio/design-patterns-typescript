import { ArduinoTemperatureSensor } from "./class/ArduinoTemperatureSensor";
import { TemperatureDisplay } from "./class/TemperatureDisplay";
import { Fan } from "./class/Fan";

(function main() {
  const arduinoTemperatureSensor = new ArduinoTemperatureSensor();

  const fan = new Fan(arduinoTemperatureSensor);
  const display = new TemperatureDisplay(arduinoTemperatureSensor);
})();
