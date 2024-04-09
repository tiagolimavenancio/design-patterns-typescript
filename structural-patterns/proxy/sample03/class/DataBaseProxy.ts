import { UserDataBase } from "./UserDataBase";

export class DataBaseProxy extends UserDataBase {
  protected user: string;
  protected password: string;

  constructor(user: string, password: string) {
    super();
    this.user = user;
    this.password = password;
  }

  private hasPermission(): boolean {
    return this.user === "admin" && this.password === "admin";
  }

  public getUsersConnected(): string {
    if (this.hasPermission()) {
      return super.getUsersConnected();
    }

    return "You don't have permission to see the users connected";
  }

  public getUsersLength(): string {
    if (this.hasPermission()) {
      return super.getUsersLength();
    }

    return "You don't have permission to see the users length";
  }
}
