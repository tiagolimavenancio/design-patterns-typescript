import { IImage } from "../interface/IImage";

export class LS implements IImage {
  process(): string {
    return "LS";
  }
}
