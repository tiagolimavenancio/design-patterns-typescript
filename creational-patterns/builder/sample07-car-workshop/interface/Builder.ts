import { ProductCar } from "../class/ProductCar";

export abstract class Builder {
  protected car: ProductCar;

  constructor() {
    this.car = new ProductCar();
  }

  public getCar(): ProductCar {
    return this.car;
  }

  public abstract buildPrice(): void;
  public abstract buildDscMotor(): void;
  public abstract buildYear(): void;
  public abstract buildModel(): void;
  public abstract buildAutomaker(): void;
}
