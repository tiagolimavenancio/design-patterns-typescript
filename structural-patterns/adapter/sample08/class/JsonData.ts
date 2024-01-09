import { IJson } from "../interface/IJson";

// Adaptee
export class JsonData implements IJson {
  recieveJson(): void {
    console.log("Receiving Json Data");
  }
}
