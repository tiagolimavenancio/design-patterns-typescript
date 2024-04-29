export abstract class Order {
  protected uid = Math.floor(Math.random() * 100000);
  protected type: string = "";

  public toString(): string {
    return `Order: ${this.uid} - ${this.type}`;
  }

  abstract execute(): void;
}
