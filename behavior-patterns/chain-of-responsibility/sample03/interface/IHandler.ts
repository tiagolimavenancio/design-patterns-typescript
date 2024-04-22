import { IUser } from "./IUser";

export interface IHandler {
  setNext(handler: IHandler): IHandler;
  handle(user: IUser): boolean;
}
