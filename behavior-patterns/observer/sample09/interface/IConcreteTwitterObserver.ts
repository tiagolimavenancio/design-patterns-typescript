import { IObserver } from "./IObserver";
import { Tweets } from "../model/Tweets";

export interface IConcreteTwitterObserver extends IObserver<Tweets> {
  username: string;
}
