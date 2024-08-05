import { Actuator } from "./class/Actuator";
import { ConcreteIoTMediator } from "./class/ConcreteIoTMediator";
import { Sensor } from "./class/Sensor";

(function main() {
  const mediator = new ConcreteIoTMediator();

  const sensor1 = new Sensor("Sensor1", mediator);
  const sensor2 = new Sensor("Sensor2", mediator);
  const actuator = new Actuator("Actuator", mediator);

  sensor1.sendMessage("Sensor2", "How are you?");
  sensor2.sendMeasurement("Actuator", { temperature: 25, humidity: 60 });
  actuator.receiveControlSignal("Sensor2", "turn off");

  sensor1.sendMessage("Invalid-Sensor", "How are you?");
})();
