export class Session {
  private userId: string;
  private actions: string[] = [];

  constructor(userId: string) {
    this.userId = userId;
  }

  addAction(action: string) {
    this.actions.push(action);
  }

  getActions() {
    return this.actions;
  }

  getUserId() {
    return this.userId;
  }
}
