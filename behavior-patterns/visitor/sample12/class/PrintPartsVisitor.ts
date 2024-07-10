import { IVisitor } from "../interfaces/IVisitor";
import { AbstractCarPart } from "./AbstractCarPart";

export class PrintPartsVisitor implements IVisitor {
  visit(part: AbstractCarPart): void {
    if (part.getSku()) {
      console.log(`${part.getName()}\t:${part.getSku()}\t:${part.getPrice()}`);
    }
  }
}
