export class Buy {
  private static COUNT_ID: number = 0;
  protected id: number;
  protected name: string = "";
  protected price: number = 0;

  constructor(name: string) {
    this.name = name;
    this.id = ++Buy.COUNT_ID;
  }

  public setPrice(price: number): void {
    this.price = price;
  }

  public getInfo(): string {
    return `ID: ${this.id} - Store: ${this.name} - Price: ${this.price}`;
  }
}
