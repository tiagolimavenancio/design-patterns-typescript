import { AdvancedMessaging } from "./class/AdvancedMessaging";
import { DesktopSender } from "./class/DesktopSender";
import { MobileSender } from "./class/MobileSender";

(function main() {
  const mobileMessaging = new AdvancedMessaging(new MobileSender());
  mobileMessaging.send("Hello from Mobile!");
  console.log(mobileMessaging.receive());

  const desktopMessaging = new AdvancedMessaging(new DesktopSender());
  desktopMessaging.send("Hello from Desktop!");
  console.log(desktopMessaging.receive());
})();
