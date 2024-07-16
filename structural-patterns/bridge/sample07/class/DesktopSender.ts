import { IMessageSender } from "../interface/IMessageSender";

export class DesktopSender implements IMessageSender {
  sendMessage(message: string): void {
    console.log("Sending message from a desktop: " + message);
  }

  receiveMessage(): string {
    return "Message received on a desktop.";
  }
}
