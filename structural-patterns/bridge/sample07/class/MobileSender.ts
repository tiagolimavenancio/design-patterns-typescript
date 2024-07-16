import { IMessageSender } from "../interface/IMessageSender";

export class MobileSender implements IMessageSender {
  sendMessage(message: string): void {
    console.log("Sending message from a mobile device: " + message);
  }

  receiveMessage(): string {
    return "Message received on a mobile device.";
  }
}
