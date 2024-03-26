import { Color } from "../types/Color";
import { Writer } from "./Writer";

export class InlineWriter extends Writer {
  constructor(color: Color) {
    super("span", color);
  }
}
