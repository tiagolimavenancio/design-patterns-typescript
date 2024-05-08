import { IProfileIterator } from "../interface/IProfileIterator";
import { ISocialNetwork } from "../interface/ISocialNetwork";
import { MediumIterator } from "./MediumIterator";
import { Profile } from "./Profile";

export class Medium implements ISocialNetwork {
  private contacts: Map<string, Profile>;

  constructor(cache: Array<Profile>) {
    this.contacts = new Map();
    if (cache) {
      for (const profile of cache) {
        this.contacts.set(profile.email, profile);
      }
    }
  }

  public requestContactInfoFromMediumInAPI(profileEmail: string): Profile {
    // Here would be a POST request to one of the Medium API endpoints.
    console.log(`Medium: Loading profile ${profileEmail} over the network...`);

    // ...and return test data.
    return this.findContact(profileEmail);
  }

  public requestRelatedContactsFromMediumInAPI(
    profileEmail: string,
    contactType: string
  ): Array<string> {
    // Here would be a POST request to one of the DevTo API endpoints.
    console.log(`Medium: Loading ${contactType} list of ${profileEmail} over the network...`);
    // ...and return test data.
    const profile = this.findContact(profileEmail);
    return profile ? profile.getContactsByType(contactType) : null;
  }

  private findContact(profileEmail: string): Profile {
    return this.contacts.get(profileEmail);
  }

  public createFriendsIterator(profileEmail: string): IProfileIterator {
    return new MediumIterator(this, "friends", profileEmail);
  }

  public createCoworkersIterator(profileEmail: string): IProfileIterator {
    return new MediumIterator(this, "coworkers", profileEmail);
  }
}
