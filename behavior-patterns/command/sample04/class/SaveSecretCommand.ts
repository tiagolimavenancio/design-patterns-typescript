import { Command } from "./Command";
import { StoreService } from "../services/StoreService";

export class SaveSecretCommand extends Command {
  public constructor(private storeService: StoreService) {
    super();
  }

  public execute({ message }: { message: string }): void {
    console.log(`Saving secret message: ${message}`);
    this.storeService.storeMessage(message);
  }
}
