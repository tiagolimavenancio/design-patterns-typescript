import { IMediator } from "../interface/IMeditator";
import { Colleague } from "./Colleague";

export class AndroidColleague extends Colleague {
  constructor(mediator: IMediator) {
    super(mediator);
  }

  public receiveMessage(message: string) {
    console.log("Android received: ", message);
  }
}
