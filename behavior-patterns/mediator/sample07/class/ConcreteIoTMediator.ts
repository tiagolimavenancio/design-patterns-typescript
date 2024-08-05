import { IIoTMediator } from "../interface/IIoTMediator";
import { Actuator } from "./Actuator";
import { IoTDevice } from "./IoTDevice";

export class ConcreteIoTMediator implements IIoTMediator {
  private devices: Map<string, IoTDevice> = new Map();

  private findOrError(id: string): IoTDevice {
    const device = this.devices.get(id);

    if (!device) {
      throw new Error(`Device with id ${id} not found`);
    }

    return device;
  }

  registerDevice(device: IoTDevice): void {
    this.devices.set(device.id, device);
  }

  sendMessage(sender: IoTDevice, receiverId: string, message: string): void {
    const receiver = this.findOrError(receiverId);

    console.log(`[${sender.id}] Sending message to ${receiverId}: ${message}`);
    receiver.receiveMessage(sender.id, message);
  }

  sendMeasurement(sender: IoTDevice, receiverId: string, data: any): void {
    const receiver = this.findOrError(receiverId);

    console.log(
      `[${sender.id}] Sending measurement data to ${receiverId}: ${JSON.stringify(data)}`
    );

    if (!(receiver instanceof Actuator)) {
      console.log("Error: Measurement data can only be sent to an Actuator.");
      return;
    }

    receiver.receiveMeasurement(sender.id, data);
  }

  receiveMessage(receiver: IoTDevice, senderId: string, message: string): void {
    const sender = this.findOrError(senderId);
    console.log(`[${receiver.id}] Message received from ${sender.id}: ${message}`);
  }

  receiveMeasurement(receiver: IoTDevice, senderId: string, data: any): void {
    const sender = this.findOrError(senderId);
    console.log(`[${receiver.id}] Measurement received from ${sender.id}: ${JSON.stringify(data)}`);
  }

  receiveControlSignal(receiver: IoTDevice, senderId: string, signal: string): void {
    const sender = this.findOrError(senderId);
    console.log(`[${receiver.id}] Receiving control signal from ${sender.id}: ${signal}`);
  }
}
