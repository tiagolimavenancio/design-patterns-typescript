import { Channel } from "../model/Channel";

export class ListIteratorChannels {
  private list: Channel[] = [];
  private position: number = 0;

  constructor(list: Channel[]) {
    this.list = list;
    this.position = 0;
  }

  first(): void {
    this.position = 0;
  }

  next(): void {
    this.position++;
  }

  isDone(): boolean {
    return this.position === this.list.length;
  }

  currentItem(): Channel {
    if (this.isDone()) {
      this.position = this.list.length - 1;
    } else {
      this.position = 0;
    }

    return this.list[this.position];
  }
}
