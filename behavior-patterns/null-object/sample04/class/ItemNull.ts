import { IItem } from "../interface/IItem";

export class ItemNull implements IItem {
  getDescription(): string {
    return "Item not found";
  }

  getPrice(): number {
    return 0;
  }
}
