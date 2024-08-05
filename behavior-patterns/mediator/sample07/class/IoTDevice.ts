import { IIoTMediator } from "../interface/IIoTMediator";

export abstract class IoTDevice {
  constructor(public id: string, protected mediator: IIoTMediator) {
    mediator.registerDevice(this);
  }

  sendMessage(receiverId: string, message: string): void {
    this.mediator.sendMessage(this, receiverId, message);
  }

  sendMeasurement(receiverId: string, data: any): void {
    this.mediator.sendMeasurement(this, receiverId, data);
  }

  receiveMessage(senderId: string, message: string): void {
    this.mediator.receiveMessage(this, senderId, message);
  }

  receiveMeasurement(senderId: string, data: any): void {
    this.mediator.receiveMeasurement(this, senderId, data);
  }
}
