import { Logger } from "../interface/Logger";

export class FileLogger implements Logger {
  info(message: string): Promise<void> {
    return Promise.resolve(console.log(`FileLogger: ${message}`));
  }
}
