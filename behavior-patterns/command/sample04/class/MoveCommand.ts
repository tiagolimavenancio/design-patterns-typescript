import { Command } from "./Command";
import { R2D2Service } from "../services/R2D2Service";

export class MoveCommand extends Command {
  public constructor(private r2d2Service: R2D2Service) {
    super();
  }

  execute({ direction }: { direction: string }): void {
    console.log(`MoveCommand: Executing move command with direction ${direction}`);
    this.r2d2Service.move(direction);
  }
}
