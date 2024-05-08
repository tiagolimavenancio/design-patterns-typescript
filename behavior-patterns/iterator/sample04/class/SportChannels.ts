import { Channel } from "../model/Channel";
import { IAggregateChannels } from "../interface/IAggregateChannels";
import { IIterator } from "../interface/IIterator";
import { ListIteratorChannels } from "../class/ListIteratorChannels";

export class SportChannels implements IAggregateChannels {
  private channels: Array<Channel>;

  constructor() {
    this.channels = new Array<Channel>();

    this.channels.push(new Channel("ESPN"));
    this.channels.push(new Channel("Fox Sports"));
    this.channels.push(new Channel("Sky Sports"));
  }

  createIterator(): IIterator {
    return new ListIteratorChannels(this.channels);
  }
}
