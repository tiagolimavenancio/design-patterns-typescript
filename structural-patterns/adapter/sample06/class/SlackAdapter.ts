import { IMessageClient } from "../interface/IMessageClient";
import { SlackClient } from "./SlackClient";

export class SlackAdapter implements IMessageClient {
  constructor(private slackClient: SlackClient) {}

  sendMessage(channel: string, user: string, message: string): void {
    this.slackClient.postMessageToUserInChannel(channel, user, message);
  }
}
