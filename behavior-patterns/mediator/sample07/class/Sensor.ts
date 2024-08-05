import { IIoTMediator } from "../interface/IIoTMediator";
import { IoTDevice } from "./IoTDevice";

export class Sensor extends IoTDevice {
  constructor(id: string, mediator: IIoTMediator) {
    super(id, mediator);
  }
}
