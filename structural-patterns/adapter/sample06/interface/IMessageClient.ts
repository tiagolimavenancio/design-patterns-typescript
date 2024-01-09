export interface IMessageClient {
  sendMessage(channel: string, user: string, message: string): void;
}
