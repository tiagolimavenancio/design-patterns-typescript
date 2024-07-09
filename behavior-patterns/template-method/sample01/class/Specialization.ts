import { Generalization } from "./Generalization";

export abstract class Specialization extends Generalization {
  // 4. Derived classes can override placeholder methods
  // 1. Standardize the skeleton of an algorithm in a "template" method
  stepThr(): void {
    this.step3_1();
    this.step3_2();
    this.step3_3();
  }

  // 2. Common implementations of individual steps are defined in base class
  private step3_1(): void {
    console.log("Specialization.step3_1");
  }

  // 3. Steps requiring peculiar implementations are "placeholders" in the base class
  protected abstract step3_2(): void;

  private step3_3(): void {
    console.log("Specialization.step3_3");
  }
}
