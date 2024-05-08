import { IProfile } from "../interface/IProfile";

export class Profile {
  private _name: string;
  private _email: string;
  private _contacts: Map<string, Array<string>> = new Map();

  constructor({ name, email, contacts }: IProfile) {
    this._name = name;
    this._email = email;

    for (const contact of contacts) {
      const [contactType, contactEmail] = contact.split(":");

      if (!this._contacts.has(contactType)) {
        this._contacts.set(contactType, []);
      }

      this._contacts.get(contactType)?.push(contactEmail);
    }
  }

  get email(): string {
    return this._email;
  }

  get name(): string {
    return this._name;
  }

  public getContactsByType(contactType: string): string[] {
    if (!this._contacts.has(contactType)) {
      this._contacts.set(contactType, []);
    }

    return this._contacts.get(contactType) || [];
  }
}
