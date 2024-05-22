import { AndroidColleague } from "./class/AndroidColleague";
import { IosColleague } from "./class/IosColleague";
import { MessageMediator } from "./class/MessageMediator";
import { SybiamColleague } from "./class/SybiamColleague";

(function main() {
  const mediator = new MessageMediator();

  const android = new AndroidColleague(mediator);
  const ios = new IosColleague(mediator);
  const sybiam = new SybiamColleague(mediator);

  mediator.addColleague(android);
  mediator.addColleague(ios);
  mediator.addColleague(sybiam);

  sybiam.sendMessage("Hi, I am Sybiam!");
  console.log("==========");
  android.sendMessage("Hi Sybiam. I am Android!");
  console.log("==========");
  ios.sendMessage("Hi Sybiam. I am iOS!");
})();
