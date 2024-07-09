import { MusicMp3 } from "../model/MusicMp3";
import { SortTemplate } from "./SortTemplate";

export class SortByAuthor extends SortTemplate {
  isFirst(music1: MusicMp3, music2: MusicMp3): boolean {
    return music1.author.localeCompare(music2.author) <= 0;
  }
}
