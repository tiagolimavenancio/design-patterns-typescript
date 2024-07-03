import { IState } from "../interface/IState";

export class UserState implements IState {
  viewDashboard(): void {
    console.log("Basic User viewing dashboard");
  }

  editContent(): void {
    console.log("Basic User does not have permission to edit content");
  }
}
