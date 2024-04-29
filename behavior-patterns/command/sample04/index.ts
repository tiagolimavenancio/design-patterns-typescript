import { StoreService } from "./services/StoreService";
import { R2D2Service } from "./services/R2D2Service";

import { SaveSecretCommand } from "./class/SaveSecretCommand";
import { CleanCommand } from "./class/CleanCommand";
import { MoveCommand } from "./class/MoveCommand";
import { R2D2 } from "./model/R2D2";

(function main() {
  const storeService = new StoreService();
  const r2d2Service = new R2D2Service();

  const saveSecretCommand = new SaveSecretCommand(storeService);
  const cleanCommand = new CleanCommand(r2d2Service);
  const moveCommand = new MoveCommand(r2d2Service);

  const r2d2 = new R2D2();
  r2d2.executeCommand(saveSecretCommand, { message: "I am a robot" });
  r2d2.executeCommand(cleanCommand);
  r2d2.executeCommand(moveCommand, { direction: "left" });

  console.log(r2d2.listCommands());
})();
