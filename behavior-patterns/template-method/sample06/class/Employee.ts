export abstract class Employee {
  public onboard(): void {
    this.completePersonalInformation();
    this.provideTrainingMaterials();
    this.performRoleSpecificTasks();
    this.setInitialGoals();
  }

  protected abstract completePersonalInformation(): void;
  protected abstract provideTrainingMaterials(): void;
  protected abstract performRoleSpecificTasks(): void;
  protected abstract setInitialGoals(): void;
}
