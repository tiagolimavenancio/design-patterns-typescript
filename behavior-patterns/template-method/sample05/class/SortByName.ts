import { MusicMp3 } from "../model/MusicMp3";
import { SortTemplate } from "./SortTemplate";

export class SortByName extends SortTemplate {
  isFirst(music1: MusicMp3, music2: MusicMp3): boolean {
    return (
      music1.name.localeCompare(music2.name, undefined, {
        sensitivity: "base",
      }) <= 0
    );
  }
}
