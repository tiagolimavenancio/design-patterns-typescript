import { Command } from "./Command";
import { R2D2Service } from "../services/R2D2Service";

export class CleanCommand extends Command {
  public constructor(private r2d2Service: R2D2Service) {
    super();
  }

  execute(): void {
    console.log("Clean Command: Executing...");
    this.r2d2Service.clean();
  }
}
