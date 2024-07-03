import { IState } from "../interface/IState";

export class UserContext {
  private currentState: IState;

  constructor(initialState: IState) {
    this.currentState = initialState;
  }

  changeState(newState: IState) {
    this.currentState = newState;
  }

  viewDashboard() {
    this.currentState.viewDashboard();
  }

  editContent() {
    this.currentState.editContent();
  }
}
