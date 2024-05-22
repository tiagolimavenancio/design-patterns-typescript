import { IMediator } from "../interface/IMeditator";
import { Colleague } from "./Colleague";

export class IosColleague extends Colleague {
  constructor(mediator: IMediator) {
    super(mediator);
  }

  public receiveMessage(message: string) {
    console.log("Ios received: ", message);
  }
}
