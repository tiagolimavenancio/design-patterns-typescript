import { Colleague } from "../class/Colleague";

export interface IMediator {
  send(message: string, colleague: Colleague);
}
