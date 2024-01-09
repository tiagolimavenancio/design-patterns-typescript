import { Logger } from "../interface/Logger";
import { FileLogger } from "./FileLogger";

export class NotificationService {
  protected logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;
  }

  public async send(message: string): Promise<void> {
    await this.logger.info(`Notification sended: ${message}`);
  }
}
