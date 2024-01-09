export class SlackClient {
  postMessageToUserInChannel(channel: string, user: string, message: string) {
    console.log(`Posting message to ${user} in ${channel} through Slack: ${message}`);
  }
}
