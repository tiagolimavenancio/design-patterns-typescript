import { Builder } from "../interface/Builder";

export class Director {
  private builder: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public getPizza(): void {
    this.builder.getPizza();
  }

  public constructorPizza(): void {
    this.builder.createNewPizzaProduct();
    this.builder.buildDough();
    this.builder.buildSauce();
    this.builder.buildTopping();
  }
}
