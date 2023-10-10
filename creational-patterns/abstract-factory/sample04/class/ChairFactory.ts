import { IChair } from "../interfaces/IChair";
import { BigChair, MediumChair, SmallChair } from "./Chair";

export class ChairFactory {
  static getChair(chair: string): IChair {
    switch (chair) {
      case "BigChair":
        return new BigChair();
      case "MediumChair":
        return new MediumChair();
      case "SmallChair":
        return new SmallChair();
      default:
        throw new Error("Chair not found");
    }
  }
}
