import { IConcreteTwitterSubject } from "../interface/IConcreteTwitterSubject";
import { IConcreteTwitterObserver } from "../interface/IConcreteTwitterObserver";
import { IObserver } from "../interface/IObserver";
import { Tweets } from "../model/Tweets";

export class TwitterUserSubject implements IConcreteTwitterSubject {
  private observers: IConcreteTwitterObserver[] = [];

  constructor(public username: string) {}

  subscribe(observer: IConcreteTwitterObserver): void {
    console.log(`${observer.username} subscribed to ${this.username} tweets.`);

    const isAlreadyObserver = this.observers.includes(observer);
    if (isAlreadyObserver) return;

    this.observers.push(observer);
    this.logSubscribers();
  }

  unsubscribe(observer: IConcreteTwitterObserver): void {
    console.log(`${observer.username} unsubscribed from ${this.username} tweets.`);

    this.observers = this.observers.filter((other) => other !== observer);
    this.logSubscribers();
  }

  notify(tweets: Tweets): void {
    console.log(
      `${this.username} notifies its ${this.observers.length} subscribers of the new tweet.`
    );
    this.observers.map((observer) => observer.update(this, tweets));
  }

  public publishNewTweet(tweets: Tweets): void {
    console.log(`${this.username} published a new tweet: '${tweets.post}'`);
    this.notify(tweets);
  }

  private logSubscribers(): void {
    console.log(`${this.username} now has ${this.observers.length} subscribers.`);
  }
}
