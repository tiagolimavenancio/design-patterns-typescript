import { IXml } from "../interface/IXML";

//Target
export class XmlData implements IXml {
  recieveXml(): void {
    console.log("Recieve XML data");
  }
}
