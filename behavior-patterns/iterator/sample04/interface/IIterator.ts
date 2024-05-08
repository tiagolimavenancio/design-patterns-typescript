import { Channel } from "../model/Channel";

export interface IIterator {
  first(): void;
  next(): void;
  isDone(): boolean;
  currentItem(): Channel;
}
