import { FileLogger } from "./class/FileLogger";
import { AwsLogger } from "./class/AwsLogger";
import { NotificationService } from "./class/NotificationService";
import { CloudLoggerAdapter } from "./class/CloudLoggerAdapter";

async function main() {
  const fileLogger = new FileLogger();
  let notificationService = new NotificationService(fileLogger);
  await notificationService.send("My Notification");

  const awsLogger = new AwsLogger();
  const cloudLoggerAdapter = new CloudLoggerAdapter(awsLogger);
  notificationService = new NotificationService(cloudLoggerAdapter);
  await notificationService.send("My Notification Adapter");
}

main();
