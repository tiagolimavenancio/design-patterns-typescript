export interface IMessageSender {
  sendMessage(message: string): void;
  receiveMessage(): string;
}
