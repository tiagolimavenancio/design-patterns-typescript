import { Writer } from "./Writer";
import { Color } from "../types/Color";

export class BlockWriter extends Writer {
  constructor(color: Color) {
    super("div", color);
  }
}
