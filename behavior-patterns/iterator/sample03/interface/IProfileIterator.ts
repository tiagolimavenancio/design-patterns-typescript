import { Profile } from "../class/Profile";

export interface IProfileIterator {
  getNext(): Profile;
  hasNext(): boolean;
  reset(): void;
}
