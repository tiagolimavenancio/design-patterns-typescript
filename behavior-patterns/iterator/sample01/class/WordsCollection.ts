/**
 * Concrete Collections provide one or several methods for retrieving fresh
 * iterator instances, compatible with the collection class.
 */

import { IAggregator } from "../interface/IAggregator";
import { IIterator } from "../interface/IIterator";
import { AlphabeticalOrderIterator } from "./AlphabeticalOrderIterator";

export class WordsCollection implements IAggregator {
  private items: string[] = [];

  public getItems(): string[] {
    return this.items;
  }

  public getCount(): number {
    return this.items.length;
  }

  public addItem(item: string): void {
    this.items.push(item);
  }

  public getIterator(): IIterator<string> {
    return new AlphabeticalOrderIterator(this);
  }

  public getReverseIterator(): IIterator<string> {
    return new AlphabeticalOrderIterator(this, true);
  }
}
