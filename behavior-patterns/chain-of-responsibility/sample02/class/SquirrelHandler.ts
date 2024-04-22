import { AbstractHandler } from "./AbstractHandler";

export class SquirrelHandler extends AbstractHandler {
  public handle(request: string): string {
    if (request === "nut") {
      return `Squirrel: I'll eat the ${request}.`;
    }

    return super.handle(request);
  }
}
