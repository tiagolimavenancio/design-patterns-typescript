import { Specialization } from "./Specialization";

export class Realization extends Specialization {
  // 4. Derived classes can override placeholder methods
  stepTwo(): void {
    console.log("Realization.stepTwo");
  }

  protected step3_2(): void {
    console.log("Realization.step3_2");
  }

  // 5. Derived classes can override implemented methods
  // 6. Derived classes can override and "call back to" base class methods
  stepFor(): void {
    console.log("Realization.stepFor");
    super.stepFor();
  }
}
