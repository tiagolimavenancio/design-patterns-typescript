import { IIterator } from "./IIterator";

export interface IAggregator {
  // Retrieve an external iterator.
  getIterator(): IIterator<string>;
}
