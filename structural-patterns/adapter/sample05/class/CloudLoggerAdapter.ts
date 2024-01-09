import { Logger } from "../interface/Logger";
import { CloudLogger } from "../interface/CloudLogger";

export class CloudLoggerAdapter implements Logger {
  protected cloudLogger: CloudLogger;

  constructor(cloudLogger: CloudLogger) {
    this.cloudLogger = cloudLogger;
  }

  public async info(message: string): Promise<void> {
    return await this.cloudLogger.sendToServer(message, "info");
  }
}
