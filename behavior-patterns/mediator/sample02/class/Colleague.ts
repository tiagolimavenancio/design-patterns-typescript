import { IMediator } from "../interface/IMeditator";

export abstract class Colleague {
  protected mediator: IMediator;

  constructor(mediator: IMediator) {
    this.mediator = mediator;
  }

  public sendMessage(message: string) {
    this.mediator.send(message, this);
  }

  public abstract receiveMessage(message: string): void;
}
