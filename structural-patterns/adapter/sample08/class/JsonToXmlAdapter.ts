import { IJson } from "../interface/IJson";
import { IXml } from "../interface/IXML";

export class JsonToXmlAdapter implements IXml {
  private data: IJson;

  constructor(data: IJson) {
    this.data = data;
  }

  recieveXml(): void {
    this.data.recieveJson();
  }
}
