/**
 * The Base Component provides the basic functionality of storing a mediator's
 * instance inside component objects.
 */

import { IMediator } from "../interface/IMediator";

export class BaseComponent {
  protected mediator: IMediator;

  constructor(mediator?: IMediator) {
    this.mediator = mediator!;
  }

  setMediator(mediator: IMediator): void {
    this.mediator = mediator;
  }
}
