import { IIterator } from "../interface/IIterator";
import { Channel } from "../model/Channel";
import { Iterator } from "./Iterator";

export class IteratorPrint extends Iterator {
  constructor(it: IIterator) {
    super();
    this.it = it;
  }

  protected operation(channel: Channel): void {
    console.log(channel.name);
  }
}
