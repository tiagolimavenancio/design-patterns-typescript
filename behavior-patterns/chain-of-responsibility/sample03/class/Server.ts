import { IUser } from "../interface/IUser";
import { Middleware } from "../middlewares/Middleware";

export class Server {
  private users: Map<string, IUser> = new Map<string, IUser>();
  private middleware!: Middleware;

  public setMiddleware(middleware: Middleware) {
    this.middleware = middleware;
  }

  public logIn(email: string, password: string): boolean {
    if (this.middleware.handle({ email, password })) {
      console.log("Authorization have been successful!");
      return true;
    }

    return false;
  }

  public register(email: string, password: string) {
    const user: IUser = { email, password };
    this.users.set(email, user);
  }

  public hasEmail(email: string): boolean {
    return this.users.has(email);
  }

  public isValidPassword(email: string, password: string): boolean {
    const user = this.users.get(email);
    return user?.password === password;
  }
}
