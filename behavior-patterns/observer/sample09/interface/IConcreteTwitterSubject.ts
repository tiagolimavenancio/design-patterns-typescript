import { Tweets } from "../model/Tweets";
import { ISubject } from "./ISubject";

export interface IConcreteTwitterSubject extends ISubject<Tweets> {
  username: string;
}
