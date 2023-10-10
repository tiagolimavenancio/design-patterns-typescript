import { Builder } from "../interface/Builder";

export class FiatBuilder extends Builder {
  public buildPrice() {
    this.car.price = 25000;
  }

  public buildModel() {
    this.car.model = "Palio";
  }

  public buildYear(): void {
    this.car.year = 2011;
  }

  public buildDscMotor() {
    this.car.dscMotor = "Fire Flex 1.0";
  }

  public buildAutomaker(): void {
    this.car.automaker = "Fiat";
  }
}
