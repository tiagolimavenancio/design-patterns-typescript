import { Builder } from "../interface/Builder";
import { ProductCar } from "./ProductCar";

export class Director {
  protected builder: Builder;

  constructor(builder: Builder) {
    this.builder = builder;
  }

  public builderCar() {
    this.builder.buildPrice();
    this.builder.buildYear();
    this.builder.buildDscMotor();
    this.builder.buildModel();
    this.builder.buildAutomaker();
  }

  public getCar(): ProductCar {
    return this.builder.getCar();
  }
}
