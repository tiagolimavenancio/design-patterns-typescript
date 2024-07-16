import { IMessageSender } from "../interface/IMessageSender";

export abstract class MessagingService {
  protected sender: IMessageSender;

  constructor(sender: IMessageSender) {
    this.sender = sender;
  }

  abstract send(message: string): void;
  abstract receive(): string;
}
