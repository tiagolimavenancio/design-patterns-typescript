import { IProfileIterator } from "./IProfileIterator";

export interface ISocialNetwork {
  createFriendsIterator(profileEmail: string): IProfileIterator;
  createCoworkersIterator(profileEmail: string): IProfileIterator;
}
