import { IProfileIterator } from "../interface/IProfileIterator";
import { ISocialNetwork } from "../interface/ISocialNetwork";
import { Profile } from "./Profile";
import { DevToIterator } from "./DevToIterator";

export class DevTo implements ISocialNetwork {
  private contacts: Array<Profile> = [];

  constructor(cache: Array<Profile>) {
    this.contacts = cache || [];
  }

  public requestContactInfoFromDevToInApi(profileEmail: string): Profile {
    console.log(`DevTo: Loading profile ${profileEmail} over the network...`);
    return this.findContact(profileEmail);
  }

  public requestRelatedContactsFromDevToInApi(
    profileEmail: string,
    contactType: string
  ): Array<string> {
    console.log(`DevTo: Loading ${contactType} list of ${profileEmail} over the network...`);

    const profile = this.findContact(profileEmail);
    return profile ? profile.getContactsByType(contactType) : null;
  }

  public createFriendsIterator(profileEmail: string): IProfileIterator {
    return new DevToIterator(this, "friends", profileEmail);
  }

  public createCoworkersIterator(profileEmail: string): IProfileIterator {
    return new DevToIterator(this, "coworkers", profileEmail);
  }

  private findContact(profileEmail: string): Profile {
    return this.contacts.find((profile) => profile.email === profileEmail);
  }
}
