import { IMediator } from "../interface/IMeditator";
import { AndroidColleague } from "./AndroidColleague";
import { Colleague } from "./Colleague";
import { IosColleague } from "./IosColleague";
import { SybiamColleague } from "./SybiamColleague";

export class MessageMediator implements IMediator {
  protected contacts: Colleague[] = [];

  constructor() {
    this.contacts = [];
  }

  public addColleague(colleague: Colleague) {
    this.contacts.push(colleague);
  }

  private defineProtocol(contact: Colleague) {
    if (contact instanceof IosColleague) {
      console.log("Ios Protocol");
    } else if (contact instanceof SybiamColleague) {
      console.log("Sybiam Protocol");
    } else if (contact instanceof AndroidColleague) {
      console.log("Android Protocol");
    }
  }

  send(message: string, colleague: Colleague) {
    for (const contact of this.contacts) {
      if (contact !== colleague) {
        contact.sendMessage(message);
      }
    }
  }
}
