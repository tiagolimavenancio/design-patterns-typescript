import { MusicMp3 } from "../model/MusicMp3";
import { SortTemplate } from "./SortTemplate";

export class SortByStars extends SortTemplate {
  isFirst(music1: MusicMp3, music2: MusicMp3): boolean {
    return music1.stars > music2.stars;
  }
}
