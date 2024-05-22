import { IMediator } from "../interface/IMeditator";
import { Colleague } from "./Colleague";

export class SybiamColleague extends Colleague {
  constructor(mediator: IMediator) {
    super(mediator);
  }

  public receiveMessage(message: string) {
    console.log("Sybiam received: ", message);
  }
}
