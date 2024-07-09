import { Employee } from "./Employee";

export class Developer extends Employee {
  protected completePersonalInformation(): void {
    console.log("Developer: Completing personal information");
  }

  protected provideTrainingMaterials(): void {
    console.log("Developer: Providing developer-specific training materials");
  }

  protected performRoleSpecificTasks(): void {
    console.log("Developer: Performing coding tasks");
  }

  protected setInitialGoals(): void {
    console.log("Developer: Setting initial coding goals");
  }
}
