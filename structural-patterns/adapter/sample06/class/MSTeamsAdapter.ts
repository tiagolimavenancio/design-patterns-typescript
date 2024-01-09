import { IMessageClient } from "../interface/IMessageClient";
import { MSTeamsClient } from "./MSTeamsClient";

export class MSTeamsAdapter implements IMessageClient {
  constructor(private msTeamsClient: MSTeamsClient) {}

  sendMessage(channel: string, user: string, message: string): void {
    this.msTeamsClient.postToChannel(channel, `${message} (send to ${user})`);
  }
}
