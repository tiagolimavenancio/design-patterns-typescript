export class Pizza {
  private dough: string = "";
  private sauce: string = "";
  private topping: string = "";

  public setDough(dough: string): void {
    this.dough = dough;
  }

  public setSauce(sauce: string): void {
    this.sauce = sauce;
  }

  public setTopping(topping: string): void {
    this.topping = topping;
  }
}
