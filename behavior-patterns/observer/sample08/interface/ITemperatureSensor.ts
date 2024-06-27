import { ISubject } from "./ISubject";

export interface ITemperatureSensor extends ISubject {
  getTemperature(): number;
}
