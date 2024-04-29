import { Item } from "./Item";

export class Cart {
  private items: Item[] = [];

  add(item: Item): void {
    this.items.push(item);
  }

  remove(item: Item): void {
    this.items = this.items.filter((i) => i.id !== item.id);
  }

  modify(item: Item, qtd: number): number {
    const previousQtd = item.quantity;
    item.quantity = qtd;
    return previousQtd;
  }
}
