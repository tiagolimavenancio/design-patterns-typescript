import { Color } from "../types/Color";

export class Writer {
  constructor(public tagName: string, public color: Color) {}

  write(content: string) {
    console.log("<" + this.tagName + " style='color:" + Color[this.color] + "'>" + content + "");
  }
}
