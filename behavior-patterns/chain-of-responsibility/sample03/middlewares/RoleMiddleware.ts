import { USERS } from "../constants/userConstants";
import { IUser } from "../interface/IUser";
import { Middleware } from "./Middleware";

export class RoleMiddleware extends Middleware {
  public handle({ email, password }: IUser): boolean {
    if (email === USERS.ADMIN.email) {
      console.log("Hello, Admin!");
      return true;
    }

    console.log("Hello, User!");
    return this.checkNext({ email, password });
  }
}
