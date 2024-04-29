export abstract class Command {
  protected uid = Math.floor(Math.random() * 100000);

  public toString(): string {
    return "R2D2: Command uid: " + this.uid;
  }

  abstract execute(args: any): void;
}
