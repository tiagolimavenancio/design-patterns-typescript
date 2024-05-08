import { IIterator } from "../interface/IIterator";

export interface IAggregateChannels {
  createIterator(): IIterator;
}
