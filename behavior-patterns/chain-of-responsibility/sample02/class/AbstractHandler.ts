import { IHandler } from "../interface/IHandler";

/**
 * The default chaining behavior can be implemented inside a base handler class.
 */
export class AbstractHandler implements IHandler {
  private nextHandler!: IHandler;

  setNext(handler: IHandler): IHandler {
    this.nextHandler = handler;
    return handler;
  }

  handle(request: string): string {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }

    return "";
  }
}
