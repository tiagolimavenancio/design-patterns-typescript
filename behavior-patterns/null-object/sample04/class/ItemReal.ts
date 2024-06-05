import { IItem } from "../interface/IItem";

export class ItemReal implements IItem {
  constructor(private description: string, private price: number) {}

  getDescription(): string {
    return this.description;
  }

  getPrice(): number {
    return this.price;
  }
}
