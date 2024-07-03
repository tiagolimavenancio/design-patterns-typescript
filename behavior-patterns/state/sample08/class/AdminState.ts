import { IState } from "../interface/IState";

export class AdminState implements IState {
  viewDashboard(): void {
    console.log("Admin viewing dashboard");
  }

  editContent(): void {
    console.log("Admin editing content");
  }
}
