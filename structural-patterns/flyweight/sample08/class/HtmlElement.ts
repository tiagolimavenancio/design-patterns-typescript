import { IWriter } from "../interface/IWriter";
import { FlyweightWriterFactory } from "./FlyweightWriterFactory";
import { Style } from "../types/Style";
import { Color } from "../types/Color";

export class HtmlElement {
  private writer: IWriter;
  private content: string = "";

  constructor(style: Style, color: Color) {
    this.writer = FlyweightWriterFactory.getWriter(style, color);
  }

  getContent() {
    return this.content;
  }

  setContent(value: string) {
    this.content = value;
  }

  public write() {
    this.writer.write(this.content);
  }
}
