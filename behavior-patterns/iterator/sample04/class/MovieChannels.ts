import { Channel } from "../model/Channel";
import { IAggregateChannels } from "../interface/IAggregateChannels";
import { IIterator } from "../interface/IIterator";
import { ArrayIteratorChannels } from "../class/ArrayIteratorChannels";

export class MovieChannels implements IAggregateChannels {
  private channels: Channel[] = [];

  constructor() {
    this.channels[0] = new Channel("Cinemax");
    this.channels[1] = new Channel("HBO");
    this.channels[2] = new Channel("FOX");
    this.channels[3] = new Channel("Sony");
  }

  createIterator(): IIterator {
    return new ArrayIteratorChannels(this.channels);
  }
}
