import { IProfileIterator } from "../interface/IProfileIterator";
import { DevTo } from "./DevTo";
import { Profile } from "./Profile";

export class DevToIterator implements IProfileIterator {
  private devTo: DevTo;
  private type: string;
  private email: string;

  private currentPosition: number = 0;
  private emails: string[] = [];
  private contacts: Profile[] = [];

  constructor(devTo: DevTo, type: string, email: string) {
    this.devTo = devTo;
    this.type = type;
    this.email = email;
  }

  private lazyLoad() {
    if (this.emails.length === 0) {
      const profiles = this.devTo.requestRelatedContactsFromDevToInApi(this.email, this.type);

      for (const profile of profiles) {
        this.emails.push(profile);
        this.contacts.push(null);
      }
    }
  }

  hasNext(): boolean {
    this.lazyLoad();
    return this.currentPosition < this.emails.length;
  }

  getNext(): Profile {
    if (!this.hasNext()) {
      return null;
    }

    const friendEmail = this.emails[this.currentPosition];
    let friendContact = this.contacts[this.currentPosition];

    if (!friendContact) {
      friendContact = this.devTo.requestContactInfoFromDevToInAPI(friendEmail);
      this.contacts.splice(this.currentPosition, 1, friendContact);
    }

    this.currentPosition++;

    return friendContact;
  }

  reset(): void {
    this.currentPosition = 0;
  }
}
