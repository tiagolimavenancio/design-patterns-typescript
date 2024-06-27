import { Gates } from "./class/Gates";
import { Lighting } from "./class/Lighting";
import { SensorSystem } from "./class/SensorSystem";
import { Surveillance } from "./class/Surveillance";

(function main() {
  const sensorSystem = new SensorSystem();

  sensorSystem.register(new Gates());
  sensorSystem.register(new Lighting());
  sensorSystem.register(new Surveillance());

  sensorSystem.soundTheAlarm();
})();
