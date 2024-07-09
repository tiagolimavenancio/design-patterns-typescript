export abstract class Generalization {
  // 1. Standardize the skeleton of an algorithm in a "template" method
  findSolution(): void {
    this.stepOne();
    this.stepTwo();
    this.stepThr();
    this.stepFor();
  }

  // 2. Common implementations of individual steps are defined in base class
  private stepOne(): void {
    console.log("Generalization.stepOne");
  }

  // 3. Steps requiring peculiar implementations are "placeholders" in the base class
  abstract stepTwo(): void;
  abstract stepThr(): void;

  stepFor(): void {
    console.log("Generalization.stepFor");
  }
}
