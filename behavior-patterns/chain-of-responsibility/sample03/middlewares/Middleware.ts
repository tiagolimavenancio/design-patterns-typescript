import { IHandler } from "../interface/IHandler";
import { IUser } from "../interface/IUser";

export abstract class Middleware implements IHandler {
  private next!: IHandler;

  protected checkNext(user: IUser) {
    if (!this.next) {
      return true;
    }

    return this.next.handle(user);
  }

  setNext(handler: IHandler): IHandler {
    this.next = handler;
    return handler;
  }

  public abstract handle(user: IUser): boolean;
}
