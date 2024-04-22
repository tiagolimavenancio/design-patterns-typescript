import { Server } from "../class/Server";
import { IHandler } from "../interface/IHandler";
import { IUser } from "../interface/IUser";
import { Middleware } from "./Middleware";

export class UserExistsMiddleware extends Middleware {
  constructor(private server: Server) {
    super();
  }

  public handle({ email, password }: IUser): boolean {
    if (!this.server.hasEmail(email)) {
      console.log("This email is not registered!");
      return false;
    }

    if (!this.server.isValidPassword(email, password)) {
      console.log("Wrong password!");
      return false;
    }

    return this.checkNext({ email, password });
  }
}
