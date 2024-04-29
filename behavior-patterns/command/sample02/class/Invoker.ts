import { ICommand } from "../interface/ICommand";

/**
 * The Invoker is associated with one or several commands. It sends a request to
 * the command.
 */
export class Invoker {
  private onStart!: ICommand;
  private onFinish!: ICommand;

  public setOnStart(command: ICommand): void {
    this.onStart = command;
  }

  public setOnFinish(command: ICommand): void {
    this.onFinish = command;
  }

  public doSomethingImportant(): void {
    console.log("Invoker: Does anybody want something done before I begin?");
    if (this.isCommand(this.onStart)) {
      this.onStart.execute();
    }

    console.log("Invoker: ...doing something really important...");

    console.log("Invoker: Does anybody want something done after I finish?");
    if (this.isCommand(this.onFinish)) {
      this.onFinish.execute();
    }
  }

  private isCommand(object: ICommand): object is ICommand {
    return object.execute !== undefined;
  }
}
