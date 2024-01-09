import { CloudLogger } from "../interface/CloudLogger";

export class AwsLogger implements CloudLogger {
  public async sendToServer(message: string, type: string): Promise<void> {
    return Promise.resolve(console.log(`AwsLogger: ${message}`));
  }
}
