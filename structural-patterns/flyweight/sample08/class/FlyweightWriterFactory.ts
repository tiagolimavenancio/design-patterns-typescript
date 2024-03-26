import { Style } from "../types/Style";
import { Color } from "../types/Color";
import { IWriter } from "../interface/IWriter";
import { BlockWriter } from "./BlockWriter";
import { InlineWriter } from "./InlineWriter";
import { Writer } from "./Writer";

export class FlyweightWriterFactory {
  static elements: { [key: string]: Writer } = {};

  static getWriter(style: Style, color: Color): IWriter {
    const key = style.toString() + color.toString();

    if (!this.elements[key]) {
      switch (style) {
        case Style.Block:
          this.elements[key] = new BlockWriter(color);
          break;
        case Style.Inline:
          this.elements[key] = new InlineWriter(color);
          break;

        default:
          break;
      }
    }

    const retVal = this.elements[key];
    return retVal;
  }
}
