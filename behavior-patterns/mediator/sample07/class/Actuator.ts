import { IIoTMediator } from "../interface/IIoTMediator";
import { IoTDevice } from "./IoTDevice";

export class Actuator extends IoTDevice {
  constructor(id: string, mediator: IIoTMediator) {
    super(id, mediator);
  }

  receiveControlSignal(senderId: string, signal: string): void {
    this.mediator.receiveControlSignal(this, senderId, signal);
  }
}
