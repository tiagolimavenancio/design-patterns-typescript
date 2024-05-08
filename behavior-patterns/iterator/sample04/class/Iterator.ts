import { IIterator } from "../interface/IIterator";
import { Channel } from "../model/Channel";

export abstract class Iterator {
  it!: IIterator;

  public iterateList() {
    for (this.it.first(); !this.it.isDone(); this.it.next()) {
      this.operation(this.it.currentItem());
    }
  }

  protected abstract operation(channel: Channel): void;
}
