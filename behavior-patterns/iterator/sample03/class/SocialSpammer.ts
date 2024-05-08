import { ISocialNetwork } from "../interface/ISocialNetwork";

export class SocialSpammer {
  public network: ISocialNetwork;

  public constructor(network: ISocialNetwork) {
    this.network = network;
  }

  public sendSpamToFriends(profileEmail: string, message: string): void {
    console.log("\nIterating over friends...\n");
    const iterator = this.network.createFriendsIterator(profileEmail);
    while (iterator.hasNext()) {
      const profile = iterator.getNext();
      this.sendMessage(profile.email, message);
    }
  }

  public sendSpamToCoworkers(profileEmail: string, message: string): void {
    console.log("\nIterating over coworkers...\n");
    const iterator = this.network.createCoworkersIterator(profileEmail);
    while (iterator.hasNext()) {
      const profile = iterator.getNext();
      this.sendMessage(profile.email, message);
    }
  }

  private sendMessage(email: string, message: string): void {
    console.log("Sent message to: '" + email + "'. Message body: '" + message + "'");
  }
}
