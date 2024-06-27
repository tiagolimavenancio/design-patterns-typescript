import { IConcreteTwitterObserver } from "../interface/IConcreteTwitterObserver";
import { IConcreteTwitterSubject } from "../interface/IConcreteTwitterSubject";
import { Tweets } from "../model/Tweets";

export class TwitterUserObserver implements IConcreteTwitterObserver {
  constructor(public username: string) {}

  update(subject: IConcreteTwitterSubject, tweets: Tweets): void {
    if (subject instanceof TwitterUserObserver) {
      console.log(`${this.username} reads the tweet '${tweets.post}' of ${subject.username}`);
    }
  }
}
