export class UserDataBase {
  private usersConnected: number;
  private usersLength: number;

  constructor() {
    this.usersConnected = Math.floor(Math.random() * 100);
    this.usersLength = Math.floor(Math.random() * 10);
  }

  public getUsersLength(): string {
    return `Users length: ${this.usersLength}`;
  }

  public getUsersConnected(): string {
    return `Users connected: ${this.usersConnected}`;
  }
}
